#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FAILED=0

check_file() {
  local path="$1"
  if [[ ! -f "$ROOT_DIR/$path" ]]; then
    echo "Missing file: $path" >&2
    FAILED=1
  fi
}

check_dir() {
  local path="$1"
  if [[ ! -d "$ROOT_DIR/$path" ]]; then
    echo "Missing directory: $path" >&2
    FAILED=1
  fi
}

check_file "README.md"
check_file "CLAUDE.md"
check_file "package.json"
check_file ".github/workflows/ci.yml"
check_file ".claude/commands/iniciar.md"
check_file ".agent/skill-registry.md"
check_file "apps/mi-primer-app/package.json"
check_dir "apps"
check_dir "packages"
check_dir "planes"
check_dir "contexto"
check_dir "referencia"
check_dir "scripts"

if [[ -d "$ROOT_DIR/planas" ]]; then
  echo "Unexpected legacy directory: planas. Use planes instead." >&2
  FAILED=1
fi

if grep -RIn --exclude-dir=.git --exclude-dir=node_modules --exclude-dir=.next --exclude=package-lock.json -i "[n]exum" "$ROOT_DIR" >/dev/null; then
  echo "Found legacy product branding. Remove it before publishing the template." >&2
  FAILED=1
fi

if [[ "$FAILED" -ne 0 ]]; then
  exit 1
fi

echo "Template structure looks good."
