const BLOCKED_TITLE_RE = /(just a moment|attention required|one more step|please wait|access denied|checking your browser|verify you are human)/i;
const BLOCKED_CHALLENGE_RE = /(checking your browser|verify you are human|enable javascript|ddos protection|cf-browser-verification|cf-challenge|turnstile|pardon our interruption|access denied|please wait|one more step)/i;
const BLOCKED_CLOUDFLARE_RE = /(cloudflare ray id|performance & security by cloudflare)/i;
const BLOCKED_URL_RE = /(\/cdn-cgi\/|\/cf-challenge\/|\/cf-cgi\/)/i;

export function isLikelyBlockedPage(
  title?: string,
  content?: string,
  url?: string
): boolean {
  const safeTitle = (title || '').toLowerCase();
  const safeContent = (content || '').toLowerCase();
  const safeUrl = (url || '').toLowerCase();

  if (BLOCKED_TITLE_RE.test(safeTitle)) return true;
  if (BLOCKED_URL_RE.test(safeUrl)) return true;
  if (BLOCKED_CHALLENGE_RE.test(safeContent)) return true;
  if (safeContent.includes('cloudflare') && BLOCKED_CLOUDFLARE_RE.test(safeContent)) return true;
  return false;
}
