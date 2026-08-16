#!/usr/bin/env bash
#
# test-pr-8.sh — set up and run the automated checks for PR #8 (auth restyling)
#
# It puts the PR in a SEPARATE folder next to your repo (a "git worktree"),
# so your current branch and any unsaved work stay exactly as they are.
#
# HOW TO RUN (from inside your team-81 repo folder):
#     bash test-pr-8.sh
#
set -uo pipefail

PR=8
BRANCH="pr-${PR}"
WORKTREE_DIR="../team-81-pr-${PR}"

echo "==> Checking this is your team-81 git repo..."
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo "ERROR: run this from inside your team-81 repo folder (where you normally run git)."; exit 1;
}

echo "==> Fetching PR #${PR} from GitHub..."
git fetch origin "+refs/pull/${PR}/head:refs/heads/${BRANCH}" || {
  echo "ERROR: could not fetch the PR. Are you online / is 'origin' the team-81 repo?"; exit 1;
}

echo "==> Putting the PR in a separate folder: ${WORKTREE_DIR}"
echo "    (your current branch is NOT touched)"
if [ -d "$WORKTREE_DIR" ]; then
  echo "    Folder already exists — reusing it. (Delete it first if you want a fresh copy.)"
else
  git worktree add "$WORKTREE_DIR" "$BRANCH" || { echo "ERROR: could not create the worktree."; exit 1; }
fi

echo "==> Installing dependencies (first time can take ~1 minute)..."
cd "$WORKTREE_DIR/frontend" || { echo "ERROR: frontend folder not found."; exit 1; }
pnpm install || { echo "ERROR: pnpm install failed."; exit 1; }

echo
echo "======================================================"
echo "  AUTOMATED CHECKS — PR #${PR}"
echo "======================================================"

echo
echo "----- 1/3  Unit tests -----"
pnpm exec vitest run || echo ">> Tests reported FAILURES (scroll up to read them)."

echo
echo "----- 2/3  TypeScript typecheck -----"
if pnpm exec tsc --noEmit; then echo ">> TypeScript: CLEAN"; else echo ">> TypeScript: ERRORS (scroll up)."; fi

echo
echo "----- 3/3  ESLint -----"
if pnpm exec eslint src; then echo ">> ESLint: CLEAN"; else echo ">> ESLint: PROBLEMS (scroll up)."; fi

echo
echo "======================================================"
echo "  NOW SEE IT IN THE BROWSER (the important part)"
echo "======================================================"
echo "You are here:   $(pwd)"
echo "Start the app:  pnpm dev"
echo "Then open:      http://localhost:3000/auth/signin"
echo "        and:    http://localhost:3000/auth/signup"
echo "Stop the app:   Ctrl + C"
echo
echo "Go through PR-8-test-checklist.md while you look at the pages."
echo
echo "WHEN DONE, from your MAIN repo folder, clean up with:"
echo "   git worktree remove ${WORKTREE_DIR}"
echo "   git branch -D ${BRANCH}"