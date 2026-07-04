#!/usr/bin/env node
/**
 * Inject EditBack into an HTML file.
 *
 * Usage:
 *   node scripts/inject.mjs path/to/doc.html
 *   node scripts/inject.mjs path/to/doc.html --root ".book" --standalone
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(__dirname, "..");

const args = process.argv.slice(2);
const fileArg = args.find((a) => !a.startsWith("--"));
if (!fileArg) {
  console.error("Usage: node scripts/inject.mjs <file.html> [--root .book] [--standalone] [--inline]");
  process.exit(1);
}

const target = resolve(fileArg);
const rootSelector = args.includes("--root")
  ? args[args.indexOf("--root") + 1]
  : ".book";
const standalone = args.includes("--standalone");
const inline = args.includes("--inline");

function relativePath(from, to) {
  const fromParts = from.split(/[/\\]/).filter(Boolean);
  const toParts = to.split(/[/\\]/).filter(Boolean);
  let i = 0;
  while (i < fromParts.length && i < toParts.length && fromParts[i] === toParts[i]) i++;
  const up = "../".repeat(fromParts.length - i);
  const down = toParts.slice(i).join("/");
  return (up + down).replace(/\/$/, "") || ".";
}

let html = readFileSync(target, "utf8");

if (html.includes("data-editback") || html.includes("eb-editbar")) {
  console.warn("EditBack markers already present — skipping duplicate inject.");
  process.exit(0);
}

const relDist = relativePath(dirname(target), join(pkgRoot, "dist"));
const cssHref = `${relDist}/editback.css`.replace(/\\/g, "/");
const jsSrc = standalone
  ? `${relDist}/editback.standalone.js`.replace(/\\/g, "/")
  : `${relDist}/editback.js`.replace(/\\/g, "/");

if (!html.includes("data-editback-root") && html.includes('class="book"')) {
  html = html.replace(/class="book"/, 'class="book" data-editback-root');
} else if (!html.match(/data-editback-root|class="book"/)) {
  console.warn(`No .book found. Add data-editback-root to your content root, or pass --root "${rootSelector}"`);
}

const configBlock = `<script>window.EDITBACK_CONFIG={root:${JSON.stringify(rootSelector)}};</script>`;

let injectBlock = "";
if (inline) {
  const css = readFileSync(join(pkgRoot, "src/editback.css"), "utf8");
  const js = readFileSync(join(pkgRoot, "src/editback.js"), "utf8");
  injectBlock = `<style data-editback>${css}</style>\n${configBlock}\n<script data-editback>${js}</script>`;
} else {
  injectBlock = `<link rel="stylesheet" href="${cssHref}" data-editback>\n${configBlock}\n<script src="${jsSrc}" defer data-editback></script>`;
}

if (html.includes("</body>")) {
  html = html.replace("</body>", `${injectBlock}\n</body>`);
} else {
  html += `\n${injectBlock}\n`;
}

writeFileSync(target, html);
console.log(`Injected EditBack into ${target}`);
