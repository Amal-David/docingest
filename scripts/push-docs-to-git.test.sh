#!/bin/bash
# Functional test harness for scripts/push-docs-to-git.sh
#
# Each case encodes WHY the behavior matters, tied to the July 2026 outage:
# the script committed onto a diverged base and failed silently for 15 nights.

set -uo pipefail

# Resolve to an absolute path: setup() cds to /, so a relative script path
# would silently exit 127 and be misread as a script failure.
SCRIPT="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
[ -f "$SCRIPT" ] || { echo "HARNESS ERROR: script not found: $SCRIPT"; exit 1; }
SANDBOX="$(mktemp -d)"
PASS=0
FAIL=0

check() {
  local name="$1" expected="$2" actual="$3"
  if [ "$expected" = "$actual" ]; then
    echo "  PASS: $name"
    PASS=$((PASS + 1))
  else
    echo "  FAIL: $name (expected '$expected', got '$actual')"
    FAIL=$((FAIL + 1))
  fi
}

# Build a fresh origin + server pair for each case.
# cd out first: the previous case left the shell inside a dir we are about to
# delete, and a dangling cwd silently breaks every later git call.
setup() {
  cd / || exit 1
  rm -rf "$SANDBOX/origin.git" "$SANDBOX/server" "$SANDBOX/other"
  git init -q --bare -b main "$SANDBOX/origin.git"
  git clone -q "$SANDBOX/origin.git" "$SANDBOX/server" 2>/dev/null
  cd "$SANDBOX/server" || exit 1
  git config user.email t@t.t && git config user.name t
  mkdir -p server/storage/docs/example.com
  echo "initial" > server/storage/docs/example.com/doc.md
  mkdir -p server/lib && echo "export const x = 1" > server/lib/code.ts
  git add -A && git commit -qm "init"
  git branch -M main && git push -q -u origin main
  # Fail fast if the fixture itself did not land, so a broken harness can
  # never be misread as a passing script.
  git -C "$SANDBOX/origin.git" rev-parse main >/dev/null 2>&1 ||
    { echo "  HARNESS ERROR: fixture push failed"; exit 1; }
}

# Advance origin from an independent clone, simulating work landing via PR.
advance_remote() {
  git clone -q "$SANDBOX/origin.git" "$SANDBOX/other"
  git -C "$SANDBOX/other" config user.email t@t.t
  git -C "$SANDBOX/other" config user.name t
  echo "remote-side" > "$SANDBOX/other/remote.txt"
  git -C "$SANDBOX/other" add -A
  git -C "$SANDBOX/other" commit -qm "remote work"
  git -C "$SANDBOX/other" push -q origin main
  cd "$SANDBOX/server" || exit 1
}

run_script() {
  REPO_DIR="$SANDBOX/server" GIT_BRANCH=main bash "$SCRIPT" 2>&1
}

echo "=== Case 1: no doc changes -> exit 0, clean no-op ==="
setup
OUT="$(run_script)"; RC=$?
check "exit code 0" "0" "$RC"
check "logs no-change path" "yes" "$(echo "$OUT" | grep -q 'no doc changes' && echo yes || echo no)"

echo "=== Case 2: doc change -> commits and pushes ==="
setup
echo "updated" > server/storage/docs/example.com/doc.md
OUT="$(run_script)"; RC=$?
check "exit code 0" "0" "$RC"
check "pushed" "yes" "$(echo "$OUT" | grep -q 'pushed docs to main' && echo yes || echo no)"
check "origin received commit" "updated" "$(git -C "$SANDBOX/origin.git" show main:server/storage/docs/example.com/doc.md)"

echo "=== Case 2b: LARGE backlog still syncs (SIGPIPE regression) ==="
echo "     A single-file change cannot reproduce this. Piping git status into"
echo "     'grep -q' kills the writer with SIGPIPE(141) once output exceeds the"
echo "     pipe buffer; under pipefail that reads as 'no changes' and the sync"
echo "     is skipped silently — the exact failure this script exists to prevent."
setup
python3 -c "
import os
for i in range(3000):
    d = 'server/storage/docs/domain%d.example.com' % i
    os.makedirs(d, exist_ok=True)
    open(d + '/doc.md', 'w').write('x' * 200)
"
git add -A >/dev/null 2>&1 && git commit -qm "seed large corpus" >/dev/null 2>&1
git push -q origin main
# Modify every tracked doc so `git status` lists each file individually and the
# output comfortably exceeds the 64KB pipe buffer.
python3 -c "
import glob
for f in glob.glob('server/storage/docs/*/doc.md'):
    open(f, 'w').write('y' * 300)
"
STATUS_BYTES="$(git status --porcelain -- server/storage/docs | wc -c | tr -d ' ')"
OUT="$(run_script)"; RC=$?
check "status output exceeds 64KB pipe buffer" "yes" "$([ "$STATUS_BYTES" -gt 65536 ] && echo yes || echo no)"
check "exit code 0" "0" "$RC"
check "did NOT silently report no-changes" "yes" "$(echo "$OUT" | grep -q 'no doc changes' && echo no || echo yes)"
check "actually pushed the large backlog" "yes" "$(echo "$OUT" | grep -q 'pushed docs to main' && echo yes || echo no)"
check "origin received the modified content" "yes" \
  "$(git -C "$SANDBOX/origin.git" show main:server/storage/docs/domain0.example.com/doc.md 2>/dev/null | grep -q '^y' && echo yes || echo no)"

echo "=== Case 3: DIVERGED -> fails loudly, exits non-zero, does NOT commit ==="
echo "     (this is the exact July 2026 failure mode)"
setup
advance_remote
# ...while the server makes its own local commit on the old base.
echo "server-side" > server/storage/docs/example.com/other.md
git add -A && git commit -qm "server local work"
BEFORE_COUNT="$(git rev-list --count HEAD)"
echo "new doc" > server/storage/docs/example.com/fresh.md
OUT="$(run_script)"; RC=$?
AFTER_COUNT="$(git rev-list --count HEAD)"
check "exit code non-zero" "yes" "$([ "$RC" -ne 0 ] && echo yes || echo no)"
check "emits greppable ERROR marker" "yes" "$(echo "$OUT" | grep -q '\[push-docs\]\[ERROR\]' && echo yes || echo no)"
check "says diverged" "yes" "$(echo "$OUT" | grep -qi 'diverged' && echo yes || echo no)"
check "did NOT create a new commit" "$BEFORE_COUNT" "$AFTER_COUNT"

echo "=== Case 4: BEHIND only -> fast-forwards, then pushes ==="
setup
advance_remote
echo "new doc" > server/storage/docs/example.com/fresh.md
OUT="$(run_script)"; RC=$?
check "exit code 0" "0" "$RC"
check "fast-forwarded" "yes" "$(echo "$OUT" | grep -q 'fast-forwarding' && echo yes || echo no)"
check "pushed" "yes" "$(echo "$OUT" | grep -q 'pushed docs to main' && echo yes || echo no)"
check "remote file present after ff" "yes" "$([ -f remote.txt ] && echo yes || echo no)"

echo "=== Case 5: unrelated modified source code is NOT swept into sync commit ==="
echo "     (server legitimately carries uncommitted prod code today)"
setup
echo "export const x = 999 // local prod drift" > server/lib/code.ts
echo "new doc" > server/storage/docs/example.com/fresh.md
OUT="$(run_script)"; RC=$?
check "exit code 0" "0" "$RC"
check "code.ts NOT in pushed commit" "yes" \
  "$(git -C "$SANDBOX/origin.git" show --name-only --format='' main | grep -q 'server/lib/code.ts' && echo no || echo yes)"
check "doc IS in pushed commit" "yes" \
  "$(git -C "$SANDBOX/origin.git" show --name-only --format='' main | grep -q 'fresh.md' && echo yes || echo no)"
check "local code drift preserved on disk" "yes" \
  "$(grep -q 'local prod drift' server/lib/code.ts && echo yes || echo no)"

echo "=== Case 6: expected branch missing -> fails, does not commit elsewhere ==="
setup
OUT="$(REPO_DIR="$SANDBOX/server" GIT_BRANCH=nonexistent-branch bash "$SCRIPT" 2>&1)"; RC=$?
check "exit code non-zero" "yes" "$([ "$RC" -ne 0 ] && echo yes || echo no)"
check "emits ERROR marker" "yes" "$(echo "$OUT" | grep -q '\[push-docs\]\[ERROR\]' && echo yes || echo no)"

echo "=== Case 7: PUSH failure surfaces as non-zero ERROR ==="
echo "     Remote stays reachable so fetch succeeds and execution actually"
echo "     reaches the push. Deleting the remote instead aborts at fetch and"
echo "     leaves the push path untested while still passing both assertions."
setup
echo "new doc" > server/storage/docs/example.com/fresh.md
printf '#!/bin/sh\nexit 1\n' > "$SANDBOX/origin.git/hooks/pre-receive"
chmod +x "$SANDBOX/origin.git/hooks/pre-receive"
OUT="$(run_script)"; RC=$?
check "exit code non-zero" "yes" "$([ "$RC" -ne 0 ] && echo yes || echo no)"
check "emits ERROR marker" "yes" "$(echo "$OUT" | grep -q '\[push-docs\]\[ERROR\]' && echo yes || echo no)"
check "failure names the push, not the fetch" "yes" "$(echo "$OUT" | grep -q 'git push origin' && echo yes || echo no)"
check "commit was still created locally" "yes" "$(git log --oneline -1 | grep -q 'sync documentation' && echo yes || echo no)"

echo "=== Case 8: FETCH failure surfaces as non-zero ERROR ==="
echo "     Distinct from Case 7: an unreachable remote must abort before any"
echo "     commit is made, so nothing is ever committed onto an unverified base."
setup
echo "new doc" > server/storage/docs/example.com/fresh.md
BEFORE_COUNT="$(git rev-list --count HEAD)"
rm -rf "$SANDBOX/origin.git"   # remote genuinely unreachable
OUT="$(run_script)"; RC=$?
check "exit code non-zero" "yes" "$([ "$RC" -ne 0 ] && echo yes || echo no)"
check "emits ERROR marker" "yes" "$(echo "$OUT" | grep -q '\[push-docs\]\[ERROR\]' && echo yes || echo no)"
check "failure names the fetch" "yes" "$(echo "$OUT" | grep -q 'git fetch origin' && echo yes || echo no)"
check "did NOT commit before failing" "$BEFORE_COUNT" "$(git rev-list --count HEAD)"

cd /
rm -rf "$SANDBOX"
echo
echo "==================== RESULT ===================="
echo "PASSED: $PASS   FAILED: $FAIL"
[ "$FAIL" -eq 0 ] || exit 1
