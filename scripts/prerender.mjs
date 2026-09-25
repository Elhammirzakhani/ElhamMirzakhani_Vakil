// Injects the server-rendered page and JSON-LD into dist/index.html,
// so the full Persian content is in the HTML before any JavaScript runs.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;
const serverEntry = pathToFileURL(`${root}dist-ssr/entry-server.js`).href;

const { render, structuredData } = await import(serverEntry);

let html = await readFile(indexPath, 'utf8');

if (!html.includes('<div id="root"></div>') || !html.includes('<!--app-structured-data-->')) {
  throw new Error('prerender: placeholders not found in dist/index.html');
}

// Escape "<" so the JSON can never close the script tag early
const jsonLd = structuredData().replace(/</g, '\\u003c');

html = html
  .replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
  .replace('<!--app-structured-data-->', `<script type="application/ld+json">${jsonLd}</script>`);

await writeFile(indexPath, html);
await rm(`${root}dist-ssr`, { recursive: true, force: true });

console.log('prerender: dist/index.html written');
