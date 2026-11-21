// Generates the link preview images (1200×630) for LinkedIn, WhatsApp, etc.:
// public/og.png (English) and public/og-es.png (Spanish).
// Run: pnpm og
import sharp from "sharp";

const W = 1200;
const H = 630;
const bg = "#16171a";
const fg = "#f1f2f4";
const muted = "#9a9ca3";
const line = "rgba(255,255,255,0.05)";

const texts = {
  "og.png": {
    status: "Open to work",
    title: "Systems Analyst &amp; Full-stack Developer",
    subtitle: "Python · TypeScript · React · SQL — plus QA automation and IT support",
    location: "Corrientes, Argentina · Remote (UTC-3)",
  },
  "og-es.png": {
    status: "Disponible",
    title: "Analista de Sistemas y Desarrollador Full Stack",
    subtitle: "Python · TypeScript · React · SQL — además, QA y soporte IT",
    location: "Corrientes, Argentina · Remoto (UTC-3)",
  },
};

const grid = [];
for (let x = 0; x <= W; x += 40) grid.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}" />`);
for (let y = 0; y <= H; y += 40) grid.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}" />`);

for (const [file, t] of Object.entries(texts)) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="fade" cx="50%" cy="0%" r="85%">
      <stop offset="0%" stop-color="#fff" stop-opacity="1" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </radialGradient>
    <mask id="m"><rect width="${W}" height="${H}" fill="url(#fade)" /></mask>
  </defs>
  <rect width="${W}" height="${H}" fill="${bg}" />
  <g stroke="${line}" stroke-width="1" mask="url(#m)">${grid.join("")}</g>

  <g font-family="Segoe UI, Inter, Arial, sans-serif">
    <circle cx="96" cy="196" r="6" fill="#34b27b" />
    <text x="114" y="203" font-size="22" fill="${muted}">${t.status}</text>
    <text x="80" y="300" font-size="88" font-weight="600" fill="${fg}" letter-spacing="-2.5">Lucas Sanchez</text>
    <text x="82" y="366" font-size="36" fill="${fg}" fill-opacity="0.9">${t.title}</text>
    <text x="82" y="410" font-size="26" fill="${muted}">${t.subtitle}</text>
    <text x="82" y="452" font-size="24" fill="${muted}">${t.location}</text>
  </g>
  <text x="82" y="552" font-family="Consolas, Geist Mono, monospace" font-size="22" fill="${muted}">lucaswsanchez.vercel.app</text>
</svg>`;

  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`public/${file}`);
  console.log(`public/${file} written`);
}
