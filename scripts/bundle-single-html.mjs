import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const html = readFileSync(join(dist, "index.html"), "utf8");

const KEEP_SUBSETS = ["latin", "latin-ext"];

const readDist = (urlPath) => readFileSync(join(dist, urlPath.replace(/^\//, "")));

const dataUri = (mime, buf) => `data:${mime};base64,${buf.toString("base64")}`;

// 1. Process CSS: drop unwanted @font-face blocks, inline remaining woff2 as data URIs.
const cssMatch = html.match(/<link rel="stylesheet" href="([^"]+\.css)">/);
if (!cssMatch) throw new Error("CSS link not found in index.html");
let css = readDist(cssMatch[1]).toString("utf8");

css = css.replace(/@font-face\{[^}]*src:url\(([^)]+\.woff2)\)[^}]*\}/g, (block, url) => {
  const isKept = KEEP_SUBSETS.some((s) => url.includes(`-${s}-`));
  if (!isKept) return "";
  const buf = readDist(url);
  return block.replace(url, dataUri("font/woff2", buf));
});

// 2. Inline JS modules. runtime.js becomes a data: URL; consumer scripts get their imports rewritten.
const runtimeMatch = css.match(/runtime\.[A-Za-z0-9_-]+\.js/) ||
  html.match(/runtime\.[A-Za-z0-9_-]+\.js/);
const runtimePath = `/_astro/${(html.match(/runtime\.[A-Za-z0-9_-]+\.js/) || [])[0] || ""}`;
let runtimeFile = (html.match(/runtime\.[A-Za-z0-9_-]+\.js/) || [])[0];
if (!runtimeFile) {
  // runtime.js is referenced by the consumer scripts, not the HTML. Locate it from the file system.
  const fs = await import("node:fs");
  runtimeFile = fs.readdirSync(join(dist, "_astro")).find((f) => /^runtime\..+\.js$/.test(f));
}
const runtimeJs = readDist(`/_astro/${runtimeFile}`).toString("utf8");
const runtimeDataUrl = `data:text/javascript;base64,${Buffer.from(runtimeJs, "utf8").toString("base64")}`;

const scriptTags = [...html.matchAll(/<script type="module" src="([^"]+\.js)"[^>]*><\/script>/g)];
let inlinedScripts = "";
for (const [, src] of scriptTags) {
  let js = readDist(src).toString("utf8");
  js = js.replace(/(["'])\.\/runtime\.[A-Za-z0-9_-]+\.js\1/g, JSON.stringify(runtimeDataUrl));
  inlinedScripts += `<script type="module">${js}</script>\n`;
}

// 3. Inline SVG assets referenced via src="/...svg" or href="/...svg".
const inlineSvg = (path) => dataUri("image/svg+xml", readDist(path));

let out = html;

// Replace stylesheet link with inline <style>
out = out.replace(
  /<link rel="stylesheet" href="[^"]+\.css">/,
  `<style>${css}</style>`,
);

// Replace favicon link
out = out.replace(/href="\/favicon\.svg"/g, `href="${inlineSvg("/favicon.svg")}"`);

// Replace klaus-logo SVGs
out = out.replace(/src="\/(klaus-logo-[a-z]+\.svg)"/g, (_, file) =>
  `src="${inlineSvg("/" + file)}"`,
);

// Replace external module scripts with inlined ones
out = out.replace(/<script type="module" src="[^"]+\.js"[^>]*><\/script>\s*/g, "");
out = out.replace(/<\/body>/, `${inlinedScripts}</body>`);

// Drop dead internal page links so the file is genuinely standalone (datenschutz/impressum still linked outwards).
// These point to other pages on the deployed site, so we leave them as absolute URLs.
out = out.replace(/href="\/(datenschutz|impressum)"/g, 'href="https://alpha-platform.de/$1"');
out = out.replace(/href="\/"/g, 'href="https://alpha-platform.de/"');

const outPath = join(dist, "alpha-standalone.html");
writeFileSync(outPath, out, "utf8");
const sizeKB = (Buffer.byteLength(out, "utf8") / 1024).toFixed(1);
console.log(`✓ Wrote ${outPath} (${sizeKB} KB)`);
