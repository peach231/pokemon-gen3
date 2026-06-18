// Pokéram — tools/render_one.js
// STANDALONE, conflict-free sprite preview. Renders one or more recipes to a
// single PNG WITHOUT touching the shared baked files (js/data/sprites_mons_*).
// This lets parallel design agents each preview their own attempt safely.
//
// It mirrors the bake pipeline exactly: same Grid (spritegen.js), same master
// palette (palettes.js), same sel-out postShade pass (copied from bake_mons.js),
// so the preview matches what `node tools/bake_mons.js` would produce.
//
// Usage:
//   node tools/render_one.js <recipeFile.js> <key1,key2,...> <out.png> [scale] [side]
//     recipeFile : a JS module exporting { key: {pal,draw,w,h,back,backW,backH}, ... }
//     keys       : comma-separated recipe keys to render, left→right
//     out.png    : output path
//     scale      : integer pixel scale (default 8)
//     side       : 'front' (default) | 'back' | 'both'

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const zlib = require('zlib');
const { Grid } = require('./spritegen');

const ROOT = path.join(__dirname, '..');

// --- load master palette G.C -------------------------------------------------
global.window = global;
global.window.addEventListener = function () {};
vm.runInThisContext(fs.readFileSync(path.join(ROOT, 'js/core/util.js'), 'utf8'), { filename: 'util.js' });
vm.runInThisContext(fs.readFileSync(path.join(ROOT, 'js/data/palettes.js'), 'utf8'), { filename: 'palettes.js' });
const G = global.G;

// --- sel-out postShade (verbatim from bake_mons.js, so preview == bake) ------
const MASTER = Object.values(G.C).map(hexToRgb);
function hexToRgb(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
function rgbToHex(c) { return '#' + c.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join(''); }
function nearestMaster(rgb) {
  let best = null, bd = 1e9;
  for (const m of MASTER) {
    const d = (m[0] - rgb[0]) ** 2 + (m[1] - rgb[1]) ** 2 + (m[2] - rgb[2]) ** 2;
    if (d < bd) { bd = d; best = m; }
  }
  return rgbToHex(best);
}
const SHADE_POOL = '!@&{}<>?;:^"|`'.split('');
function postShade(rows, pal) {
  const h = rows.length, w = rows[0].length;
  const grid = rows.map(r => r.split(''));
  const shadeChar = {};
  let poolIdx = 0;
  const newPal = Object.assign({}, pal);
  function shadeFor(ch) {
    if (ch in shadeChar) return shadeChar[ch];
    const hex = pal[ch];
    if (!hex) return (shadeChar[ch] = null);
    const rgb = hexToRgb(hex);
    const lum = 0.3 * rgb[0] + 0.6 * rgb[1] + 0.1 * rgb[2];
    if (lum < 70 || lum > 235) return (shadeChar[ch] = null);
    const darker = nearestMaster(rgb.map(v => v * 0.7));
    if (darker === hex || darker === pal.o) return (shadeChar[ch] = null);
    while (poolIdx < SHADE_POOL.length && newPal[SHADE_POOL[poolIdx]]) poolIdx++;
    if (poolIdx >= SHADE_POOL.length) return (shadeChar[ch] = null);
    const sc = SHADE_POOL[poolIdx++];
    newPal[sc] = darker;
    shadeChar[ch] = sc;
    return sc;
  }
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const ch = rows[y][x];
      if (ch === '.' || ch === 'o' || ch === 'K' || ch === 'W') continue;
      const below = y + 1 < h ? rows[y + 1][x] : '.';
      const right = x + 1 < w ? rows[y][x + 1] : '.';
      if (below === 'o' || right === 'o') {
        const sc = shadeFor(ch);
        if (sc) grid[y][x] = sc;
      }
    }
  }
  return { rows: grid.map(r => r.join('')), pal: newPal };
}

// --- render one recipe variant to {w,h,rows,pal(hex)} ------------------------
function bakeVariant(rec, drawFn, w, h) {
  const g = new Grid(w, h);
  drawFn.call(rec, g);
  let rows = g.render();
  let pal = {};
  for (const ch in rec.pal) {
    const hex = G.C[rec.pal[ch]];
    if (!hex) throw new Error(`palette key '${rec.pal[ch]}' not in master palette`);
    pal[ch] = hex;
  }
  if (!pal.W && rows.some(rr => rr.includes('W'))) pal.W = '#f4f4f4';
  if (!pal.K && rows.some(rr => rr.includes('K'))) pal.K = '#f4f4f4';
  const shaded = postShade(rows, pal);
  return { w, h, rows: shaded.rows, pal: shaded.pal };
}

// --- minimal RGBA PNG encoder ------------------------------------------------
const CRC_TABLE = (() => {
  const t = new Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}
function encodePNG(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

// --- compositor --------------------------------------------------------------
function main() {
  const [recipeFile, keysArg, outPng, scaleArg, sideArg] = process.argv.slice(2);
  if (!recipeFile || !keysArg || !outPng) {
    console.error('usage: node tools/render_one.js <recipeFile.js> <key1,key2,...> <out.png> [scale] [side]');
    process.exit(1);
  }
  const scale = parseInt(scaleArg || '8', 10);
  const side = sideArg || 'front';
  const recipes = require(path.resolve(recipeFile));
  const keys = keysArg.split(',').map(s => s.trim()).filter(Boolean);

  // build sprite list (front and/or back per key)
  const sprites = [];
  for (const key of keys) {
    const r = recipes[key];
    if (!r) throw new Error(`recipe '${key}' not found in ${recipeFile}`);
    if (side === 'front' || side === 'both') {
      sprites.push({ label: key, ...bakeVariant(r, r.draw, r.w || 48, r.h || 48) });
    }
    if ((side === 'back' || side === 'both') && r.back) {
      sprites.push({ label: key + '~b', ...bakeVariant({ pal: r.pal }, r.back, r.backW || 56, r.backH || 40) });
    }
  }

  // layout: a row of fixed cells, sprite bottom-aligned (feet on a baseline)
  const PAD = 6;
  const cellW = Math.max(...sprites.map(s => s.w)) + 8;
  const cellH = Math.max(...sprites.map(s => s.h)) + 8;
  const cols = sprites.length;
  const imgW = (cellW * cols + PAD * (cols + 1)) * scale;
  const imgH = (cellH + PAD * 2) * scale;
  const rgba = Buffer.alloc(imgW * imgH * 4);

  // backgrounds: outer #30343c, cell #494f5c (match the in-game gallery)
  const OUTER = [0x30, 0x34, 0x3c, 0xff];
  const CELL = [0x49, 0x4f, 0x5c, 0xff];
  function px(x, y, rgb) {
    if (x < 0 || y < 0 || x >= imgW || y >= imgH) return;
    const i = (y * imgW + x) * 4;
    rgba[i] = rgb[0]; rgba[i + 1] = rgb[1]; rgba[i + 2] = rgb[2]; rgba[i + 3] = rgb[3] === undefined ? 0xff : rgb[3];
  }
  // fill outer
  for (let y = 0; y < imgH; y++) for (let x = 0; x < imgW; x++) px(x, y, OUTER);
  // fill cells + draw sprites
  for (let c = 0; c < cols; c++) {
    const s = sprites[c];
    const cellX = (PAD + c * (cellW + PAD)) * scale;
    const cellY = PAD * scale;
    // cell bg
    for (let y = 0; y < cellH * scale; y++) for (let x = 0; x < cellW * scale; x++) px(cellX + x, cellY + y, CELL);
    // sprite: horizontally centered, bottom-aligned in cell
    const offX = cellX + Math.floor(((cellW - s.w) / 2) * scale);
    const offY = cellY + Math.floor((cellH - s.h - 2) * scale);
    for (let gy = 0; gy < s.h; gy++) {
      const row = s.rows[gy] || '';
      for (let gx = 0; gx < s.w; gx++) {
        const ch = row[gx];
        if (!ch || ch === '.') continue;
        const hex = s.pal[ch] || (ch === 'o' ? s.pal.o : null);
        if (!hex) continue;
        const rgb = hexToRgb(hex);
        for (let sy = 0; sy < scale; sy++) for (let sx = 0; sx < scale; sx++) {
          px(offX + gx * scale + sx, offY + gy * scale + sy, rgb);
        }
      }
    }
  }

  fs.writeFileSync(outPng, encodePNG(imgW, imgH, rgba));
  console.log(`rendered ${sprites.length} sprite(s) [${sprites.map(s => s.label).join(', ')}] -> ${outPng} (${imgW}x${imgH})`);
}

main();
