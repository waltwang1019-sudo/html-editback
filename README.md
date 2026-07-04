# html-editback

**Self-contained edit layer for HTML documents.**

Open any HTML file in the browser → edit text and layout in place → save back to the same local file. No server, no build step, no account.

Inspired by [html-presentation-editor](https://github.com/itchernetski/html-presentation-editor) and built for brand decks, handbooks, and marketing HTML backs.

## Why

| Format | Pretty | Editable in browser | Saves to local file |
|--------|--------|---------------------|---------------------|
| PDF | ✅ | ❌ | ❌ |
| Google Docs / Notion | ✅ | ✅ | ❌ (locked in) |
| Raw HTML | ✅ | ❌ (source only) | manual |
| **HTML + EditBack** | ✅ | ✅ | ✅ (Chrome/Edge) |

The whole product is the file. The file is the whole product.

## Features

- **Inline text editing** — click any text, type, done
- **Block tools** — move, resize, duplicate, delete selected modules
- **Image replace** — pick a local image, embedded as base64 (self-contained file)
- **Save to disk** — [File System Access API](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access) writes back to the original HTML; editor UI is stripped on save
- **Draft autosave** — `localStorage` safety net with optional restore banner
- **Print / PDF** — native print dialog
- **Keyboard shortcuts** — `E` edit · `Cmd/Ctrl+S` save · `Cmd/Ctrl+P` print · `Esc` deselect
- **Zero dependencies** — vanilla HTML/CSS/JS

## Quick start

```bash
git clone https://github.com/waltwang1019-sudo/html-editback.git
cd html-editback
npm run build
open demo/demo.html
```

In Chrome or Edge: click **编** → **Edit** → change text → **Save** → link the HTML file once → future saves overwrite in place.

## Inject into your HTML

```bash
npm run build
node scripts/inject.mjs path/to/your-doc.html --root ".book"
```

Options:

| Flag | Description |
|------|-------------|
| `--root ".book"` | Content root selector (default `.book`) |
| `--standalone` | Use single `editback.standalone.js` (CSS inlined) |
| `--inline` | Embed CSS + JS directly into the HTML file |

Your content root should be marked with `data-editback-root` or use class `.book`.

## Manual setup

```html
<link rel="stylesheet" href="dist/editback.css">
<div class="book" data-editback-root>
  <!-- your pages -->
</div>
<script>
  window.EDITBACK_CONFIG = {
    root: "[data-editback-root]",
    fabLabel: "编",
    accentColor: "#F56A21",
    pageScaleSelector: ".pg",
    pageDesignWidth: 1920,
  };
</script>
<script src="dist/editback.js"></script>
```

## Configuration

```js
window.EDITBACK_CONFIG = {
  root: "[data-editback-root], .book, main",
  pageScaleSelector: ".pg, [data-editback-page]",
  pageDesignWidth: 1920,
  accentColor: "#F56A21",
  storagePrefix: "editback",
  fabLabel: "编",
  restoreDraft: true,
  layoutSelectors: ["img", ".card", ".tile", "section"],
};
```

Set `window.EDITBACK_AUTO_INIT = false` before loading the script to call `EditBack.init()` manually.

## Browser support

| Browser | Direct save | Edit + download |
|---------|-------------|-----------------|
| Chrome, Edge, Brave, Arc | ✅ | ✅ |
| Safari, Firefox | ❌ | ✅ (downloads copy) |

## Project layout

```
html-editback/
├── src/editback.css      # Editor UI styles
├── src/editback.js       # Core library
├── dist/                 # Built assets (npm run build)
├── demo/demo.html        # Live demo
├── scripts/
│   ├── build.mjs         # Bundle standalone JS
│   └── inject.mjs        # Inject into existing HTML
└── skill/SKILL.md        # Agent skill for Cursor / Claude
```

## Credits

- Extracted from **破泥 PURE PONY** brand handbook editor
- Architecture inspired by [itchernetski/html-presentation-editor](https://github.com/itchernetski/html-presentation-editor)
- File save pattern from [Chrome File System Access API docs](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

## License

MIT
