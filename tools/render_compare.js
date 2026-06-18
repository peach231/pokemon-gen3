// Pokéram — tools/render_compare.js
// Stacks several recipe files into ONE labeled comparison sheet (one row per
// candidate, its 3 stages left→right). Reuses the exact bake pipeline so the
// preview matches the game. For design review only.
//
// Usage:
//   node tools/render_compare.js <out.png> <scale> <label1=file1.js@k1,k2,k3> [label2=...] ...

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const zlib = require('zlib');
const { Grid } = require('./spritegen');

const ROOT = path.join(__dirname, '..');
global.window = global; global.window.addEventListener = function () {};
vm.runInThisContext(fs.readFileSync(path.join(ROOT, 'js/core/util.js'), 'utf8'), { filename: 'util.js' });
vm.runInThisContext(fs.readFileSync(path.join(ROOT, 'js/data/palettes.js'), 'utf8'), { filename: 'palettes.js' });
const G = global.G;

const MASTER = Object.values(G.C).map(hexToRgb);
function hexToRgb(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
function rgbToHex(c) { return '#' + c.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join(''); }
function nearestMaster(rgb) { let best = null, bd = 1e9; for (const m of MASTER) { const d = (m[0] - rgb[0]) ** 2 + (m[1] - rgb[1]) ** 2 + (m[2] - rgb[2]) ** 2; if (d < bd) { bd = d; best = m; } } return rgbToHex(best); }
const SHADE_POOL = '!@&{}<>?;:^"|`'.split('');
function postShade(rows, pal) {
  const h = rows.length, w = rows[0].length; const grid = rows.map(r => r.split('')); const shadeChar = {}; let poolIdx = 0; const newPal = Object.assign({}, pal);
  function shadeFor(ch) {
    if (ch in shadeChar) return shadeChar[ch];
    const hex = pal[ch]; if (!hex) return (shadeChar[ch] = null);
    const rgb = hexToRgb(hex); const lum = 0.3 * rgb[0] + 0.6 * rgb[1] + 0.1 * rgb[2];
    if (lum < 70 || lum > 235) return (shadeChar[ch] = null);
    const darker = nearestMaster(rgb.map(v => v * 0.7)); if (darker === hex || darker === pal.o) return (shadeChar[ch] = null);
    while (poolIdx < SHADE_POOL.length && newPal[SHADE_POOL[poolIdx]]) poolIdx++;
    if (poolIdx >= SHADE_POOL.length) return (shadeChar[ch] = null);
    const sc = SHADE_POOL[poolIdx++]; newPal[sc] = darker; shadeChar[ch] = sc; return sc;
  }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const ch = rows[y][x]; if (ch === '.' || ch === 'o' || ch === 'K' || ch === 'W') continue;
    const below = y + 1 < h ? rows[y + 1][x] : '.'; const right = x + 1 < w ? rows[y][x + 1] : '.';
    if (below === 'o' || right === 'o') { const sc = shadeFor(ch); if (sc) grid[y][x] = sc; }
  }
  return { rows: grid.map(r => r.join('')), pal: newPal };
}
function bakeVariant(rec, drawFn, w, h) {
  const g = new Grid(w, h); drawFn.call(rec, g); let rows = g.render(); let pal = {};
  for (const ch in rec.pal) { const hex = G.C[rec.pal[ch]]; if (!hex) throw new Error(`palette key '${rec.pal[ch]}' not in master palette`); pal[ch] = hex; }
  if (!pal.W && rows.some(rr => rr.includes('W'))) pal.W = '#f4f4f4';
  if (!pal.K && rows.some(rr => rr.includes('K'))) pal.K = '#f4f4f4';
  const shaded = postShade(rows, pal); return { w, h, rows: shaded.rows, pal: shaded.pal };
}

// PNG
const CRC_TABLE = (() => { const t = new Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1); t[n] = c >>> 0; } return t; })();
function crc32(buf) { let c = 0xffffffff; for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
function chunk(type, data) { const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0); const body = Buffer.concat([Buffer.from(type, 'ascii'), data]); const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body), 0); return Buffer.concat([len, body, crc]); }
function encodePNG(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4); ihdr[8] = 8; ihdr[9] = 6;
  const stride = width * 4; const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) { raw[y * (stride + 1)] = 0; rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride); }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

// tiny 3x5 pixel font for row labels
const FONT = {
  A: ['010', '101', '111', '101', '101'], B: ['110', '101', '110', '101', '110'], C: ['011', '100', '100', '100', '011'],
  E: ['111', '100', '110', '100', '111'], G: ['011', '100', '101', '101', '011'], L: ['100', '100', '100', '100', '111'],
  R: ['110', '101', '110', '101', '101'], T: ['111', '010', '010', '010', '010'], U: ['101', '101', '101', '101', '111'],
  _: ['000', '000', '000', '000', '000'], '1': ['010', '110', '010', '010', '111'], '2': ['110', '001', '010', '100', '111'],
  '3': ['110', '001', '010', '001', '110'], ':': ['000', '010', '000', '010', '000'], ' ': ['000', '000', '000', '000', '000'],
};

function main() {
  const out = process.argv[2]; const scale = parseInt(process.argv[3] || '8', 10);
  const specs = process.argv.slice(4).map(s => {
    const eq = s.indexOf('='); const label = s.slice(0, eq); const rest = s.slice(eq + 1);
    const at = rest.indexOf('@'); const file = rest.slice(0, at); const keys = rest.slice(at + 1).split(',');
    return { label, file, keys };
  });

  const rows = specs.map(spec => {
    const recipes = require(path.resolve(spec.file));
    const sprites = spec.keys.map(k => { const r = recipes[k]; if (!r) throw new Error(`'${k}' not in ${spec.file}`); return { ...bakeVariant(r, r.draw, r.w || 48, r.h || 48) }; });
    return { label: spec.label, sprites };
  });

  const PAD = 6, LABELW = 14; // label gutter in source px
  const cellW = Math.max(...rows.flatMap(r => r.sprites.map(s => s.w))) + 8;
  const cellH = Math.max(...rows.flatMap(r => r.sprites.map(s => s.h))) + 8;
  const cols = Math.max(...rows.map(r => r.sprites.length));
  const rowW = LABELW + cellW * cols + PAD * (cols + 1);
  const imgW = rowW * scale;
  const imgH = (rows.length * (cellH + PAD) + PAD) * scale;
  const rgba = Buffer.alloc(imgW * imgH * 4);
  const OUTER = [0x30, 0x34, 0x3c, 0xff], CELL = [0x49, 0x4f, 0x5c, 0xff], TEXT = [0xf4, 0xf4, 0xf4, 0xff];
  function px(x, y, rgb) { if (x < 0 || y < 0 || x >= imgW || y >= imgH) return; const i = (y * imgW + x) * 4; rgba[i] = rgb[0]; rgba[i + 1] = rgb[1]; rgba[i + 2] = rgb[2]; rgba[i + 3] = rgb[3] === undefined ? 255 : rgb[3]; }
  function block(sx, sy, rgb) { for (let yy = 0; yy < scale; yy++) for (let xx = 0; xx < scale; xx++) px(sx * scale + xx, sy * scale + yy, rgb); }
  function glyph(ch, ox, oy) { const g = FONT[ch] || FONT[' ']; for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) if (g[r][c] === '1') block(ox + c, oy + r, TEXT); }
  for (let y = 0; y < imgH; y++) for (let x = 0; x < imgW; x++) px(x, y, OUTER);

  rows.forEach((row, ri) => {
    const rowY = PAD + ri * (cellH + PAD);
    // label (vertical-ish: just first 6 chars stacked top of row)
    const lbl = row.label.toUpperCase().replace(/[^A-Z0-9: ]/g, '');
    for (let i = 0; i < lbl.length && i < 7; i++) glyph(lbl[i], 1, rowY + i * 6);
    row.sprites.forEach((s, ci) => {
      const cellX = LABELW + PAD + ci * (cellW + PAD);
      for (let yy = 0; yy < cellH; yy++) for (let xx = 0; xx < cellW; xx++) block(cellX + xx, rowY + yy, CELL);
      const offX = cellX + Math.floor((cellW - s.w) / 2);
      const offY = rowY + (cellH - s.h - 2);
      for (let gy = 0; gy < s.h; gy++) { const r = s.rows[gy] || ''; for (let gx = 0; gx < s.w; gx++) { const ch = r[gx]; if (!ch || ch === '.') continue; const hex = s.pal[ch] || (ch === 'o' ? s.pal.o : null); if (!hex) continue; block(offX + gx, offY + gy, hexToRgb(hex)); } }
    });
  });

  fs.writeFileSync(out, encodePNG(imgW, imgH, rgba));
  console.log(`compare sheet -> ${out} (${imgW}x${imgH}), ${rows.length} rows`);
}
main();
