const TRACKING_PARAMETER_RE = /^(utm_[^=]*|fbclid|gclid|mc_cid|mc_eid)$/i;

/**
 * Canonical form used only for matching and content-addressed identity. The
 * original submitted URL remains the public/source URL in stored metadata.
 */
export function canonicalizeUrl(value: string | undefined | null): string {
  const raw = value?.trim() || '';
  if (!raw) return '';

  try {
    const parsed = new URL(raw);
    parsed.protocol = parsed.protocol.toLowerCase();
    parsed.hostname = parsed.hostname.toLowerCase();
    if ((parsed.protocol === 'https:' && parsed.port === '443') || (parsed.protocol === 'http:' && parsed.port === '80')) {
      parsed.port = '';
    }
    parsed.pathname = parsed.pathname.replace(/\/{2,}/g, '/');
    if (parsed.pathname.length > 1) {
      parsed.pathname = parsed.pathname.replace(/\/+$/, '');
    }
    parsed.hash = '';

    const parameters = [...parsed.searchParams.entries()]
      .filter(([key]) => !TRACKING_PARAMETER_RE.test(key))
      .sort(([leftKey, leftValue], [rightKey, rightValue]) =>
        leftKey.localeCompare(rightKey) || leftValue.localeCompare(rightValue)
      );
    parsed.search = '';
    for (const [key, parameterValue] of parameters) {
      parsed.searchParams.append(key, parameterValue);
    }

    return parsed.toString();
  } catch {
    return raw;
  }
}

export function canonicalDomain(value: string): string {
  const canonical = canonicalizeUrl(value);
  try {
    return new URL(canonical).hostname.replace(/^www\./i, '');
  } catch {
    return canonical.replace(/^www\./i, '').replace(/\/$/, '');
  }
}
