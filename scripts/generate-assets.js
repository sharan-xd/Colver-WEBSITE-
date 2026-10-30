const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  const logoPath = path.join(__dirname, '../public/brand/colver-logo-transparent.png');
  const logoBuf = await sharp(logoPath)
    .resize(520, null, { fit: 'inside' })
    .toBuffer();

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#161616" stroke-width="1"/>
      </pattern>
      <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C8FF00" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#405CFF" stop-opacity="0.06"/>
      </linearGradient>
    </defs>

    <rect width="100%" height="100%" fill="#080808"/>
    <rect width="100%" height="100%" fill="url(#grid)"/>

    <circle cx="600" cy="300" r="320" fill="url(#glow)" filter="blur(60px)"/>

    <rect x="32" y="32" width="1136" height="566" fill="none" stroke="#222222" stroke-width="1.5"/>

    <path d="M 32 64 L 32 32 L 64 32" fill="none" stroke="#C8FF00" stroke-width="2.5"/>
    <path d="M 1136 32 L 1168 32 L 1168 64" fill="none" stroke="#C8FF00" stroke-width="2.5"/>
    <path d="M 32 566 L 32 598 L 64 598" fill="none" stroke="#C8FF00" stroke-width="2.5"/>
    <path d="M 1136 598 L 1168 598 L 1168 566" fill="none" stroke="#C8FF00" stroke-width="2.5"/>

    <text x="64" y="76" fill="#8E929A" font-family="monospace" font-size="14" font-weight="600" letter-spacing="2">COLVER // ARCHITECTURAL LEDGER &amp; SYSTEMS</text>
    <text x="1136" y="76" text-anchor="end" fill="#C8FF00" font-family="monospace" font-size="14" font-weight="700" letter-spacing="1.5">[ BENGALURU, IN • 12.9716° N ]</text>

    <text x="600" y="380" text-anchor="middle" fill="#F4F1EA" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" letter-spacing="-0.5">Bespoke Business Software &amp; High-Concurrency Web Architecture</text>
    <text x="600" y="420" text-anchor="middle" fill="#8E929A" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" letter-spacing="0.2">Zero generic templates. Sub-100ms interaction targets. 100% intellectual property ownership.</text>

    <g transform="translate(64, 520)">
      <rect x="0" y="0" width="220" height="38" fill="#111111" stroke="#2a2a2a" rx="2"/>
      <text x="110" y="24" text-anchor="middle" fill="#BFC3C9" font-family="monospace" font-size="12" font-weight="600" letter-spacing="1">50K+ EVENTS/SEC</text>

      <rect x="236" y="0" width="230" height="38" fill="#111111" stroke="#2a2a2a" rx="2"/>
      <text x="351" y="24" text-anchor="middle" fill="#BFC3C9" font-family="monospace" font-size="12" font-weight="600" letter-spacing="1">POSTGRES • REDIS • TS</text>

      <rect x="482" y="0" width="260" height="38" fill="#111111" stroke="#2a2a2a" rx="2"/>
      <text x="612" y="24" text-anchor="middle" fill="#BFC3C9" font-family="monospace" font-size="12" font-weight="600" letter-spacing="1">PAYMENT RAILS &amp; GST CORE</text>

      <rect x="758" y="0" width="314" height="38" fill="#151d08" stroke="#C8FF00" stroke-width="1.2" rx="2"/>
      <text x="915" y="24" text-anchor="middle" fill="#C8FF00" font-family="monospace" font-size="12" font-weight="700" letter-spacing="1.5">WWW.COLVER.IN</text>
    </g>
  </svg>
  `;

  const finalImage = await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: logoBuf,
        top: 190,
        left: Math.round((width - 520) / 2)
      }
    ])
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/og-image.png'), finalImage);
  fs.writeFileSync(path.join(__dirname, '../app/opengraph-image.png'), finalImage);
  fs.writeFileSync(path.join(__dirname, '../app/twitter-image.png'), finalImage);
  console.log('OpenGraph and Twitter images created successfully!');
}

createOgImage().catch(console.error);
