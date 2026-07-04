#!/usr/bin/env node
/**
 * Build dist/editback.standalone.js — single file with inlined CSS.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const css = readFileSync(join(root, "src/editback.css"), "utf8");
const js = readFileSync(join(root, "src/editback.js"), "utf8");

mkdirSync(join(root, "dist"), { recursive: true });

writeFileSync(join(root, "dist/editback.css"), css);
writeFileSync(join(root, "dist/editback.js"), js);

const standalone = `/* html-editback standalone bundle — https://github.com/waltwang1019-sudo/html-editback */
(function(){var s=document.createElement("style");s.textContent=${JSON.stringify(css)};document.head.appendChild(s);})();\n${js}`;

writeFileSync(join(root, "dist/editback.standalone.js"), standalone);
console.log("Built dist/editback.css, dist/editback.js, dist/editback.standalone.js");
