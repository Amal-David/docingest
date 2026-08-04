#!/bin/bash
# Push documentation updates to GitHub (run nightly via cron).
#
# Failure policy: this script must fail LOUDLY and non-zero.
#
# In July 2026 it failed silently for 15 consecutive nights. The server had
# diverged from origin/main, so every `git push` was rejected non-fast-forward
# while the script kept happily committing on top of a stale base. Nothing
# alerted, because the only signal was a rejected push buried in a log nobody
# reads. The two rules below exist to make that impossible to repeat:
#
#   1. Reconcile with origin BEFORE committing, and refuse to commit onto a
#      diverged base rather than piling up commits that can never be pushed.
#   2. Exit non-zero with a greppable [push-docs][ERROR] marker on any failure.

set -euo pipefail

REPO_DIR="${REPO_DIR:-/home/ubuntu/docingest}"
BRANCH="${GIT_BRANCH:-main}"
DOCS_PATH="server/storage/docs"

log() { echo "$(date -Iseconds) [push-docs] $*"; }
fail() { echo "$(date -Iseconds) [push-docs][ERROR] $*" >&2; exit 1; }

cd "$REPO_DIR" || fail "repo dir not found: $REPO_DIR"
git rev-parse --git-dir >/dev/null 2>&1 || fail "not a git repository: $REPO_DIR"

# Get onto the expected branch. The previous `git checkout "$BRANCH" || true`
# swallowed failures and let the script commit onto whatever HEAD happened to
# be, so a checkout failure is now fatal and the result is re-verified.
git checkout "$BRANCH" >/dev/null 2>&1 || fail "cannot checkout branch '$BRANCH'"
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
[ "$CURRENT_BRANCH" = "$BRANCH" ] || fail "expected branch '$BRANCH' but HEAD is on '$CURRENT_BRANCH'"

git fetch --quiet origin "$BRANCH" || fail "git fetch origin '$BRANCH' failed"

AHEAD="$(git rev-list --count "origin/$BRANCH..$BRANCH")"
BEHIND="$(git rev-list --count "$BRANCH..origin/$BRANCH")"

# Diverged means a human has to look. Committing here is what created the
# 15-night backlog, so stop before making it worse.
if [ "$AHEAD" -gt 0 ] && [ "$BEHIND" -gt 0 ]; then
  fail "'$BRANCH' has diverged from origin/$BRANCH ($AHEAD ahead, $BEHIND behind). Refusing to commit onto a diverged base — reconcile manually."
fi

if [ "$BEHIND" -gt 0 ]; then
  log "behind origin/$BRANCH by $BEHIND commit(s); fast-forwarding"
  git merge --ff-only "origin/$BRANCH" >/dev/null || fail "fast-forward of '$BRANCH' from origin failed"
fi

if [ "$AHEAD" -gt 0 ]; then
  log "note: $AHEAD local commit(s) not yet on origin/$BRANCH (likely an earlier push that failed); will retry the push"
fi

# Only ever stage documentation. The server working tree can legitimately hold
# unrelated modified source files, and they must never be swept into a sync
# commit by a `git add` with a wider scope than intended.
if git status --porcelain -- "$DOCS_PATH" | grep -q .; then
  git add -- "$DOCS_PATH"

  STRAY_PATHS="$(git diff --cached --name-only | grep -v "^$DOCS_PATH/" || true)"
  [ -z "$STRAY_PATHS" ] || fail "refusing to commit non-docs paths: $(echo "$STRAY_PATHS" | tr '\n' ' ')"

  if git diff --cached --quiet; then
    log "doc changes were ignored or empty after staging; nothing to commit"
  else
    git commit -m "chore: sync documentation ($(date +%Y-%m-%d))" --no-verify >/dev/null ||
      fail "git commit failed"
    log "committed doc changes"
  fi
elif [ "$AHEAD" -eq 0 ]; then
  log "no doc changes to push"
  exit 0
fi

# Never force. A rejected push means reconcile, not overwrite.
git push origin "$BRANCH" || fail "git push origin '$BRANCH' failed"

log "pushed docs to $BRANCH"
