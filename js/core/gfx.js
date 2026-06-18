// Pokéram — gfx.js
// Logical 240x160 canvas with integer CSS upscaling, the palette-indexed
// sprite-grid decoder (all game art flows through here), bitmap-font text
// rendering, and 9-slice frames.

(function () {
  var W = 240, H = 160;

  G.SCREEN_W = W;
  G.SCREEN_H = H;
  G.IMG = {};   // name -> decoded offscreen canvas
  G.ART = {};   // name -> {w,h,pal,px} source grids (data files fill this)

  function makeCanvas(w, h) {
    var c = document.createElement('canvas');
    c.width = w; c.height = h;
    return c;
  }

  function hexToRgb(hex) {
    return [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16)
    ];
  }

  // Decode one {w,h,pal,px} grid into a canvas. '.' (and ' ') = transparent.
  function decodeGrid(art) {
    var w = art.w, h = art.h;
    var c = makeCanvas(w, h);
    var ctx = c.getContext('2d');
    var img = ctx.createImageData(w, h);
    var data = img.data;
    var rgbCache = {};
    for (var key in art.pal) rgbCache[key] = hexToRgb(art.pal[key]);
    for (var y = 0; y < h; y++) {
      var row = art.px[y] || '';
      for (var x = 0; x < w; x++) {
        var ch = row[x];
        if (ch === undefined || ch === '.' || ch === ' ') continue;
        var rgb = rgbCache[ch];
        if (!rgb) continue;
        var i = (y * w + x) * 4;
        data[i] = rgb[0]; data[i + 1] = rgb[1]; data[i + 2] = rgb[2]; data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return c;
  }

  function flipped(canvas) {
    var c = makeCanvas(canvas.width, canvas.height);
    var ctx = c.getContext('2d');
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(canvas, 0, 0);
    return c;
  }

  G.gfx = {
    makeCanvas: makeCanvas,
    flipped: flipped,

    init: function () {
      var canvas = document.getElementById('screen');
      G.screen = canvas;
      G.ctx = canvas.getContext('2d');
      G.ctx.imageSmoothingEnabled = false;

      function resize() {
        // fill the window exactly: the game takes 100% of the limiting
        // dimension (aspect preserved, nearest-neighbor keeps pixels crisp)
        var scale = Math.max(1, Math.min(window.innerWidth / W, window.innerHeight / H));
        canvas.style.width = Math.floor(W * scale) + 'px';
        canvas.style.height = Math.floor(H * scale) + 'px';
      }
      window.addEventListener('resize', resize);
      document.addEventListener('fullscreenchange', resize);
      resize();
    },

    // Decode every G.ART entry into G.IMG. Entries may use:
    //   base: 'otherName'  — reuse another entry's px grid (palette swap)
    //   mirror: true       — also produce IMG[name + '_flip']
    decodeAll: function () {
      var name, art;
      // Two passes so palette swaps can reference entries declared later.
      for (name in G.ART) {
        art = G.ART[name];
        if (!art.base) G.IMG[name] = decodeGrid(art);
      }
      for (name in G.ART) {
        art = G.ART[name];
        if (art.base) {
          var src = G.ART[art.base];
          G.IMG[name] = decodeGrid({ w: src.w, h: src.h, px: src.px, pal: art.pal });
        }
      }
      for (name in G.ART) {
        if (G.ART[name].mirror) G.IMG[name + '_flip'] = flipped(G.IMG[name]);
      }
      // NOTE: creature fronts/backs are NOT decoded here — they load as real
      // image files (see loadMonSprites), which is async, so boot waits on them
      // separately (main.js). World/UI art above is still baked synchronously.
      G.gfx.buildFont();
    },

    // -----------------------------------------------------------------------
    // Creature sprites load as real IMAGE files (you supply them; see
    // sprites_config.js), keyed by national dex number. Each side is fit into a
    // `box`x`box` canvas so the battle/gallery layout is consistent regardless
    // of the source resolution. Missing files -> a clean numbered placeholder.
    // -----------------------------------------------------------------------

    // Fallback sprite: soft rounded body + dex number in palette colors, so the
    // game is fully playable before any creature art is supplied.
    makePlaceholder: function (dexId) {
      var box = (G.SPRITE_CFG && G.SPRITE_CFG.box) || 64;
      var c = makeCanvas(box, box);
      var ctx = c.getContext('2d');
      var cx = box / 2, body = Math.round(box * 0.6), top = box - body - 5;
      // ground shadow
      ctx.fillStyle = G.C.dgry || '#3a3a4a';
      ctx.beginPath();
      ctx.ellipse(cx, box - 4, body * 0.5, body * 0.16, 0, 0, Math.PI * 2);
      ctx.fill();
      var r = Math.round(body * 0.3), x0 = Math.round(cx - body / 2), y0 = top;
      function rrect(x, y, w, h, rad, col) {
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.moveTo(x + rad, y);
        ctx.arcTo(x + w, y, x + w, y + h, rad);
        ctx.arcTo(x + w, y + h, x, y + h, rad);
        ctx.arcTo(x, y + h, x, y, rad);
        ctx.arcTo(x, y, x + w, y, rad);
        ctx.fill();
      }
      rrect(x0, y0, body, body, r, G.C.ink || '#26233a');
      rrect(x0 + 2, y0 + 2, body - 4, body - 4, r - 1, G.C.lgry || '#8a8aa0');
      var q = String(dexId);
      var qw = G.textWidth ? G.textWidth(q) : q.length * 4;
      if (G.text) {
        G.text(ctx, q, Math.round(cx - qw / 2), Math.round(top + body / 2 - 3), G.C.white || '#fff', G.C.ink || '#26233a');
      }
      return c;
    },

    // Fit src (Image or canvas) into a box-sized canvas, bottom-center anchored,
    // aspect preserved. No getImageData, so cross-origin art never taints.
    _fitToBox: function (src, box, flip) {
      var c = makeCanvas(box, box);
      var ctx = c.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      var sw = src.width || box, sh = src.height || box;
      var scale = Math.min(box / sw, box / sh, 1);
      var dw = Math.round(sw * scale), dh = Math.round(sh * scale);
      var dx = Math.round((box - dw) / 2), dy = box - dh;
      if (flip) {
        ctx.translate(box, 0); ctx.scale(-1, 1);
        ctx.drawImage(src, box - dx - dw, dy, dw, dh);
      } else {
        ctx.drawImage(src, dx, dy, dw, dh);
      }
      return c;
    },

    // Load front (+ optional dedicated back) for every species; calls onDone
    // once all requests settle. Robust to missing files and slow networks.
    loadMonSprites: function (onProgress, onDone) {
      var box = (G.SPRITE_CFG && G.SPRITE_CFG.box) || 64;
      var keys = [];
      for (var k in (G.SPECIES || {})) keys.push(k);
      var pending = 0, settled = 0, finished = false;
      var total = keys.length;
      if (!total) { if (onDone) onDone(); return; }

      function done() {
        if (finished) return;
        finished = true;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i], sp = G.SPECIES[key];
          if (!G.IMG['mon_' + key]) G.IMG['mon_' + key] = G.gfx.makePlaceholder(sp.id);
          if (!G.IMG['mon_' + key + '_back']) G.IMG['mon_' + key + '_back'] = G.gfx._fitToBox(G.IMG['mon_' + key], box, true);
        }
        if (onDone) onDone();
      }

      function tick() {
        settled++;
        if (onProgress) onProgress(settled, pending);
        if (settled >= pending) done();
      }

      // Try candidate URLs in order; cb(img) on first success, cb(null) if none.
      function loadFirst(urls, cb) {
        var i = 0;
        (function attempt() {
          if (i >= urls.length) { cb(null); return; }
          var img = new Image();
          if (G.SPRITE_CFG.remoteBase && G.SPRITE_CFG.crossOrigin) img.crossOrigin = G.SPRITE_CFG.crossOrigin;
          img.onload = function () { cb(img); };
          img.onerror = function () { i++; attempt(); };
          img.src = urls[i];
        })();
      }

      keys.forEach(function (key) {
        var sp = G.SPECIES[key];
        var override = G.SPRITE_MANIFEST && G.SPRITE_MANIFEST[sp.id];
        var hasBack = override && override.back;

        pending++; // front
        loadFirst(G.spriteUrl('front', sp.id), function (img) {
          G.IMG['mon_' + key] = img ? G.gfx._fitToBox(img, box, false) : G.gfx.makePlaceholder(sp.id);
          tick();
        });

        if (hasBack) {
          pending++; // dedicated back
          loadFirst(G.spriteUrl('back', sp.id), function (img) {
            if (img) G.IMG['mon_' + key + '_back'] = G.gfx._fitToBox(img, box, false);
            tick();
          });
        }
      });

      setTimeout(done, 9000); // never hang boot on a slow/dead source
    },

    // -----------------------------------------------------------------------
    // Bitmap font. G.FONT.glyphs[char] = array of rows of '.'/'#'.
    // Pre-rendered per color on demand; '#' pixels take the requested color.
    // -----------------------------------------------------------------------
    _fontCache: {},   // color -> char -> canvas
    _glyphW: {},      // char -> advance width

    buildFont: function () {
      for (var ch in G.FONT.glyphs) {
        var rows = G.FONT.glyphs[ch];
        var w = 0;
        for (var i = 0; i < rows.length; i++) w = Math.max(w, rows[i].length);
        G.gfx._glyphW[ch] = w + 1; // +1px letter spacing
      }
      G.gfx._glyphW[' '] = 3;
    },

    _glyph: function (ch, color) {
      var cache = G.gfx._fontCache[color];
      if (!cache) cache = G.gfx._fontCache[color] = {};
      if (cache[ch]) return cache[ch];
      var rows = G.FONT.glyphs[ch];
      if (!rows) return null;
      var w = G.gfx._glyphW[ch] - 1;
      var c = makeCanvas(Math.max(1, w), G.FONT.height);
      var ctx = c.getContext('2d');
      ctx.fillStyle = color;
      for (var y = 0; y < rows.length; y++) {
        for (var x = 0; x < rows[y].length; x++) {
          if (rows[y][x] === '#') ctx.fillRect(x, y, 1, 1);
        }
      }
      cache[ch] = c;
      return c;
    }
  };

  // Draw text; returns end x. shadow: optional second color drawn at +1,+1
  // (the GBA text look is dark text with a light drop shadow).
  G.text = function (ctx, str, x, y, color, shadow) {
    str = String(str);
    var cx = x;
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (ch === ' ') { cx += G.gfx._glyphW[' ']; continue; }
      var img = G.gfx._glyph(ch, color);
      if (!img) { cx += 4; continue; }
      if (shadow) {
        var sh = G.gfx._glyph(ch, shadow);
        ctx.drawImage(sh, cx + 1, y + 1);
      }
      ctx.drawImage(img, cx, y);
      cx += G.gfx._glyphW[ch];
    }
    return cx;
  };

  G.textWidth = function (str) {
    str = String(str);
    var w = 0;
    for (var i = 0; i < str.length; i++) w += G.gfx._glyphW[str[i]] || 4;
    return w;
  };

  // Word-wrap to maxWidth px; returns array of lines.
  G.textWrap = function (str, maxWidth) {
    var words = String(str).split(' ');
    var lines = [], line = '';
    for (var i = 0; i < words.length; i++) {
      var probe = line ? line + ' ' + words[i] : words[i];
      if (G.textWidth(probe) > maxWidth && line) {
        lines.push(line);
        line = words[i];
      } else {
        line = probe;
      }
    }
    if (line) lines.push(line);
    return lines;
  };

  // 9-slice: img divided into a 3x3 grid of `c`-sized corners; edges/center tile.
  G.nineSlice = function (ctx, img, x, y, w, h, c) {
    var iw = img.width, ih = img.height;
    var ew = iw - c * 2, eh = ih - c * 2; // source edge strip sizes
    // corners
    ctx.drawImage(img, 0, 0, c, c, x, y, c, c);
    ctx.drawImage(img, iw - c, 0, c, c, x + w - c, y, c, c);
    ctx.drawImage(img, 0, ih - c, c, c, x, y + h - c, c, c);
    ctx.drawImage(img, iw - c, ih - c, c, c, x + w - c, y + h - c, c, c);
    // edges
    ctx.drawImage(img, c, 0, ew, c, x + c, y, w - c * 2, c);
    ctx.drawImage(img, c, ih - c, ew, c, x + c, y + h - c, w - c * 2, c);
    ctx.drawImage(img, 0, c, c, eh, x, y + c, c, h - c * 2);
    ctx.drawImage(img, iw - c, c, c, eh, x + w - c, y + c, c, h - c * 2);
    // center
    ctx.drawImage(img, c, c, ew, eh, x + c, y + c, w - c * 2, h - c * 2);
  };
})();
