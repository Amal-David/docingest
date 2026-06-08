/**
 * Playwright container self-healing watchdog.
 *
 * Tails firecrawl-worker logs and tracks playwright timeout errors in a
 * sliding window. When the error rate exceeds the threshold it restarts
 * the playwright container, then enforces a cooldown before the next
 * restart can happen.
 *
 * Config (env vars):
 *   PLAYWRIGHT_CONTAINER   container name to restart  (default: firecrawl-playwright-service-1)
 *   WORKER_CONTAINER       container to tail logs from (default: firecrawl-worker-1)
 *   ERROR_THRESHOLD        errors in window before restart (default: 3)
 *   WINDOW_MS              rolling window in ms          (default: 60000)
 *   COOLDOWN_MS            min time between restarts     (default: 120000)
 */

const PLAYWRIGHT_CONTAINER = process.env.PLAYWRIGHT_CONTAINER ?? 'firecrawl-playwright-service-1';
const WORKER_CONTAINER     = process.env.WORKER_CONTAINER     ?? 'firecrawl-worker-1';
const ERROR_THRESHOLD      = Number(process.env.ERROR_THRESHOLD ?? 3);
const WINDOW_MS            = Number(process.env.WINDOW_MS      ?? 60_000);
const COOLDOWN_MS          = Number(process.env.COOLDOWN_MS    ?? 120_000);

// Patterns in worker logs that indicate the playwright service is unhealthy
const PLAYWRIGHT_TIMEOUT_RE = /playwright.*timeout|timeout.*playwright|playwright-service.*timeout|An unexpected error happened while scraping with playwright/i;

function log(msg: string) {
  console.log(`[playwright-watchdog] ${new Date().toISOString()} ${msg}`);
}

async function restartContainer(): Promise<void> {
  log(`🔄 Restarting ${PLAYWRIGHT_CONTAINER}...`);
  const proc = Bun.spawn(['sudo', 'docker', 'restart', PLAYWRIGHT_CONTAINER], {
    stdout: 'pipe',
    stderr: 'pipe',
  });
  await proc.exited;
  if (proc.exitCode === 0) {
    log(`✅ ${PLAYWRIGHT_CONTAINER} restarted successfully`);
  } else {
    const err = await new Response(proc.stderr).text();
    log(`❌ Restart failed (exit ${proc.exitCode}): ${err.trim()}`);
  }
}

async function tailWorkerLogs(): Promise<void> {
  log(`Starting — container=${WORKER_CONTAINER} threshold=${ERROR_THRESHOLD}/${WINDOW_MS}ms cooldown=${COOLDOWN_MS}ms`);

  const timeoutTimestamps: number[] = [];
  let lastRestartAt = 0;

  const proc = Bun.spawn(
    ['sudo', 'docker', 'logs', '--follow', '--tail', '0', WORKER_CONTAINER],
    { stdout: 'pipe', stderr: 'pipe' },
  );

  // Read stderr too — docker logs writes to stderr by default
  async function readStream(stream: ReadableStream<Uint8Array>) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!PLAYWRIGHT_TIMEOUT_RE.test(line)) continue;

        const now = Date.now();
        log(`⚠️  Playwright timeout detected: ${line.slice(0, 120)}`);

        // Slide the window
        timeoutTimestamps.push(now);
        while (timeoutTimestamps.length > 0 && now - timeoutTimestamps[0] > WINDOW_MS) {
          timeoutTimestamps.shift();
        }

        log(`   Window count: ${timeoutTimestamps.length}/${ERROR_THRESHOLD}`);

        if (timeoutTimestamps.length >= ERROR_THRESHOLD) {
          const sinceLast = now - lastRestartAt;
          if (sinceLast < COOLDOWN_MS) {
            log(`⏳ Cooldown active — skipping restart (${Math.round((COOLDOWN_MS - sinceLast) / 1000)}s remaining)`);
          } else {
            timeoutTimestamps.length = 0; // reset window after restart
            lastRestartAt = now;
            await restartContainer();
          }
        }
      }
    }
  }

  // docker logs sends output to stderr; stdout is usually empty but read both
  await Promise.all([
    readStream(proc.stdout),
    readStream(proc.stderr),
  ]);

  const exit = await proc.exited;
  log(`docker logs process exited with code ${exit} — restarting watchdog in 5s`);
}

// Top-level restart loop: if docker logs dies for any reason, restart the watcher
while (true) {
  try {
    await tailWorkerLogs();
  } catch (err: any) {
    log(`Error in watchdog loop: ${err.message} — restarting in 5s`);
  }
  await Bun.sleep(5_000);
}
