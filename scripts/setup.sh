#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required to set up this workspace." >&2
  exit 1
fi

npm install
npm run check:template

echo "Workspace ready. Start with: claude \"/iniciar\""
