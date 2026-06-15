#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_NAME="${1:-}"

if [[ -z "$APP_NAME" ]]; then
  echo "Usage: npm run new:app -- <app-name>" >&2
  exit 1
fi

if [[ ! "$APP_NAME" =~ ^[a-z0-9][a-z0-9-]*$ ]]; then
  echo "App name must be kebab-case: lowercase letters, numbers, and hyphens." >&2
  exit 1
fi

TARGET_DIR="$ROOT_DIR/apps/$APP_NAME"

if [[ -e "$TARGET_DIR" ]]; then
  echo "App already exists: apps/$APP_NAME" >&2
  exit 1
fi

cp -R "$ROOT_DIR/apps/mi-primer-app" "$TARGET_DIR"

node - "$TARGET_DIR/package.json" "$APP_NAME" <<'NODE'
const fs = require('node:fs')
const [packagePath, appName] = process.argv.slice(2)
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
pkg.name = appName
fs.writeFileSync(packagePath, `${JSON.stringify(pkg, null, 2)}\n`)
NODE

echo "Created apps/$APP_NAME from the example app."
