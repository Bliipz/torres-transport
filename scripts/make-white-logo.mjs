import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'public', 'logo.png');
const OUT_WHITE = join(__dirname, '..', 'public', 'logo-white.png');
const OUT_ICON = join(__dirname, '..', 'public', 'logo-icon.png');

async function run() {
  const raw = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { data } = raw;
  const { width, height, channels } = raw.info;
  console.log(`Source: ${width}x${height}`);

  // Per-column alpha sum
  const colAlpha = new Array(width).fill(0);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      colAlpha[x] += data[i + 3];
    }
  }

  // Find icon start (first non-empty column)
  let iconStart = 0;
  while (iconStart < width && colAlpha[iconStart] < 30) iconStart++;

  // Find first empty column AFTER icon starts (the gap before text)
  let iconEnd = iconStart;
  while (iconEnd < width && colAlpha[iconEnd] >= 30) iconEnd++;
  // iconEnd now points at first empty col after icon

  // Verify the gap is meaningful (>= 8 empty cols), else continue scanning
  let gapWidth = 0;
  let scan = iconEnd;
  while (scan < width && colAlpha[scan] < 30) { gapWidth++; scan++; }
  if (gapWidth < 5) {
    // No real gap, fall back to scanning whole left half
    iconEnd = Math.floor(width * 0.42);
  }

  console.log(`Icon X range: ${iconStart}-${iconEnd} (gap width=${gapWidth})`);

  // Y bbox within icon X range
  let minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = iconStart; x < iconEnd; x++) {
      const a = data[(y * width + x) * channels + 3];
      if (a > 30) {
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const padding = 4;
  const ex = Math.max(0, iconStart - padding);
  const ey = Math.max(0, minY - padding);
  const ew = Math.min(width - ex, (iconEnd - iconStart) + padding * 2);
  const eh = Math.min(height - ey, (maxY - minY) + padding * 2);

  const iconBuf = await sharp(SRC).extract({ left: ex, top: ey, width: ew, height: eh }).png().toBuffer();
  await sharp(iconBuf).toFile(OUT_ICON);
  console.log(`Icon saved: ${OUT_ICON} (${ew}x${eh})`);

  // White version
  const iconRaw = await sharp(iconBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const iData = Buffer.from(iconRaw.data);
  const iInfo = iconRaw.info;
  for (let p = 0; p < iData.length; p += 4) {
    if (iData[p + 3] > 0) {
      iData[p] = 255;
      iData[p + 1] = 255;
      iData[p + 2] = 255;
    }
  }
  await sharp(iData, { raw: { width: iInfo.width, height: iInfo.height, channels: 4 } })
    .png()
    .toFile(OUT_WHITE);
  console.log(`White icon saved: ${OUT_WHITE}`);
}

run().catch((e) => { console.error(e); process.exit(1); });
