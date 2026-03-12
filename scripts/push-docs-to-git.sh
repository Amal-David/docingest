#!/bin/bash
# Push documentation updates to GitHub (run nightly via cron)

set -e
REPO_DIR="${REPO_DIR:-/home/ubuntu/docingest}"
DOCS_DIR="$REPO_DIR/server/storage/docs"

cd "$REPO_DIR"

# Ensure we're on main
BRANCH="${GIT_BRANCH:-main}"
git checkout "$BRANCH" 2>/dev/null || true

# Check if there are changes in docs
if git status --porcelain server/storage/docs/ | grep -q .; then
  git add server/storage/docs/
  git commit -m "chore: sync documentation ($(date +%Y-%m-%d))" --no-verify
  git push origin "$BRANCH"
  echo "$(date -Iseconds) Pushed docs to $BRANCH"
else
  echo "$(date -Iseconds) No doc changes to push"
fi
