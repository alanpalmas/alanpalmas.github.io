/**
 * Generates PDF(s) from CV HTML files using Puppeteer.
 *
 * Usage:
 *   npm run cv:pdf          → generates both cv-es.pdf and cv-en.pdf
 *   npm run cv:pdf:es       → generates cv-es.pdf only
 *   npm run cv:pdf:en       → generates cv-en.pdf only
 */
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const TARGETS = {
  es: { html: 'cv-es.html', pdf: 'cv-es.pdf' },
  en: { html: 'cv.html',    pdf: 'cv-en.pdf' },
};

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
};

function staticServer() {
  return http.createServer((req, res) => {
    try {
      const u = new URL(req.url, 'http://127.0.0.1');
      let pathname = decodeURIComponent(u.pathname);
      if (pathname === '/') pathname = '/index.html';
      const rel = pathname.replace(/^\/+/, '');
      const filePath = path.join(root, rel);
      if (!filePath.startsWith(root)) { res.writeHead(403); res.end(); return; }
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        const ext = path.extname(filePath);
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
      });
    } catch { res.writeHead(500); res.end(); }
  });
}

const lang = process.argv[2];
const keys = lang && TARGETS[lang] ? [lang] : Object.keys(TARGETS);

const server = staticServer();
await new Promise((resolve, reject) => {
  server.listen(0, '127.0.0.1', (err) => (err ? reject(err) : resolve()));
});
const { port } = server.address();

let browser;
try {
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const pdfDir = path.join(root, 'pdf');
  fs.mkdirSync(pdfDir, { recursive: true });

  for (const key of keys) {
    const { html, pdf: pdfName } = TARGETS[key];
    const pageUrl = `http://127.0.0.1:${port}/${html}`;
    const outPath = path.join(pdfDir, pdfName);

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
    await page.goto(pageUrl, { waitUntil: 'networkidle0', timeout: 120000 });
    await page.emulateMediaType('print');

    await page.evaluate(() => {
      const page = document.querySelector('.page');
      const header = document.querySelector('.header');
      const printHeader = document.querySelector('.print-header');
      const actions = document.querySelector('.cv-actions');

      if (header) header.remove();
      if (actions) actions.remove();

      if (printHeader) {
        printHeader.style.display = 'block';
        printHeader.remove();
        page.insertBefore(printHeader, page.firstChild);
      }

      document.querySelectorAll('.job-header').forEach(el => {
        el.style.display = 'block';
      });
      document.querySelectorAll('.job-meta').forEach(el => {
        el.style.textAlign = 'left';
        el.style.marginTop = '2px';
      });
      document.querySelectorAll('.skills-grid, .cert-grid').forEach(el => {
        el.style.gridTemplateColumns = '1fr';
      });
    });

    await page.pdf({
      path: outPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
      preferCSSPageSize: false,
      displayHeaderFooter: false,
    });

    await page.close();
    console.log(`[${key.toUpperCase()}] PDF generado: ${outPath}`);
  }
} finally {
  if (browser) await browser.close();
  server.close();
}
