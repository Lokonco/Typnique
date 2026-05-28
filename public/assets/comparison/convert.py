#!/usr/bin/env python3
"""Convert problems-tex.js and problems-typ.js to JSON for use by the comparison documents."""

import json
import re
import os

ASSETS = os.path.join(os.path.dirname(__file__), '..', 'public', 'assets', 'js')
OUT    = os.path.dirname(__file__)


def parse_js(filepath, value_key):
    with open(filepath, encoding='utf-8') as f:
        content = f.read()

    entries = []
    current = {}

    for line in content.splitlines():
        s = line.strip()

        m = re.match(r'"title":\s*String\.raw`([^`]*)`\s*,?$', s)
        if m:
            current['title'] = m.group(1)
            continue

        m = re.match(r'"title":\s*"([^"]*)"\s*,?$', s)
        if m:
            current['title'] = m.group(1)
            continue

        m = re.match(r'"description":\s*"([^"]*)"\s*,?$', s)
        if m:
            current['description'] = m.group(1)
            continue

        m = re.match(rf'"{value_key}":\s*String\.raw`([^`]*)`\s*,?$', s)
        if m:
            current[value_key] = m.group(1)
            if 'title' in current and 'description' in current:
                entries.append(current)
                current = {}
            continue

    return entries


for (js_name, key) in [('problems-tex.js', 'latex'), ('problems-typ.js', 'typst')]:
    entries = parse_js(os.path.join(ASSETS, js_name), key)
    out_name = js_name.replace('.js', '.json')
    with open(os.path.join(OUT, out_name), 'w', encoding='utf-8') as f:
        json.dump(entries, f, indent=2, ensure_ascii=False)
    print(f"Written {len(entries)} entries to {out_name}")
