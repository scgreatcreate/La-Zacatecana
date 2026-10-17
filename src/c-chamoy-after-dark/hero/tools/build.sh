#!/bin/sh
# dev bundle (prod build is the lead's; same flags)
cd "$(dirname "$0")/../../../.." && npx esbuild src/c-chamoy-after-dark/hero/hero.js --bundle --format=iife --minify --loader:.svg=text --outfile=src/c-chamoy-after-dark/hero/.dev/hero.js --log-level=warning && node src/c-chamoy-after-dark/hero/tools/make-dev.mjs >/dev/null && printf 'bundle gz bytes: ' && gzip -9 -c src/c-chamoy-after-dark/hero/.dev/hero.js | wc -c
