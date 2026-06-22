// Pokéram — title.js
// Title screen: chunky pixel logo, the Starwyrm overhead, New Game / Continue.

(function () {
  var W = 240, H = 160;

  function makeLogo() {
    // render at 1x, blit at 3x for a chunky pixel logo
    var txt = 'POKÉMON';
    var w = G.textWidth(txt);
    var c = G.gfx.makeCanvas(w + 2, 12);
    var ctx = c.getContext('2d');
    G.text(ctx, txt, 1, 1, '#f8e878');
    G.text(ctx, txt, 0, 0, '#f4f4f4');
    return c;
  }

  function fillCircle(ctx, cx, cy, r) { ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill(); }

  // a low, dark mountain horizon for Groudon's ridge
  function drawRidge(ctx) {
    ctx.fillStyle = '#241a30';
    var peaks = [-6, 34, 78, 120, 162, 206, 240];
    for (var i = 0; i < peaks.length; i++) {
      var px = peaks[i], ph = 16 + ((i * 7) % 12);
      ctx.beginPath();
      ctx.moveTo(px - 30, 70); ctx.lineTo(px, 70 - ph); ctx.lineTo(px + 30, 70); ctx.closePath(); ctx.fill();
    }
    ctx.fillStyle = '#2c2238'; ctx.fillRect(0, 68, W, 16);
  }

  // three scrolling wave-crest rows across the sea
  function drawWaves(ctx, f) {
    ctx.fillStyle = '#6aa8e8';
    for (var row = 0; row < 3; row++) {
      var y = 96 + row * 7;
      var off = (((f >> 1) + row * 6) % 16);
      for (var x = -16 + off; x < W; x += 16) ctx.fillRect(x, y, 8, 1);
    }
  }

  // Opening cinematic backdrop behind Prof. Birch's welcome monologue: a living
  // diorama of the weather trio — Rayquaza drifting through the stars, Groudon on
  // a glowing volcanic ridge, Kyogre breaching the sea — with Wingull and a
  // Poochyena for life. All animation is driven from G.frame in draw(), because
  // the monologue Textbox sits on top and steals update().
  function introScene() {
    var stars = [];
    for (var i = 0; i < 70; i++) {
      stars.push({ x: (i * 71 + 13) % W, y: (i * 41 + 7) % 58, ph: i % 6, sp: 0.03 + (i % 3) * 0.05, big: i % 11 === 0 });
    }
    var bubbles = [], embers = [], sparkles = [];

    function step(f) {
      if (f % 7 === 0 && bubbles.length < 22) bubbles.push({ x: 176 + (f % 44), y: 114, v: 0.4 + (f % 3) * 0.15, r: 1 + (f % 2) });
      for (var b = bubbles.length - 1; b >= 0; b--) { bubbles[b].y -= bubbles[b].v; if (bubbles[b].y < 88) bubbles.splice(b, 1); }
      if (f % 9 === 0 && embers.length < 18) embers.push({ x: 12 + (f % 38), y: 80, v: 0.3 + (f % 4) * 0.12, life: 42 });
      for (var e = embers.length - 1; e >= 0; e--) { embers[e].y -= embers[e].v; embers[e].x += Math.sin(embers[e].y * 0.2) * 0.3; if (--embers[e].life <= 0) embers.splice(e, 1); }
      if (f % 5 === 0 && sparkles.length < 16) {
        var rcx = 120 + Math.sin(f * 0.012) * 78;
        sparkles.push({ x: rcx - 18, y: 4 + Math.sin(f * 0.03) * 5 + 20, life: 22 });
      }
      for (var s = sparkles.length - 1; s >= 0; s--) { if (--sparkles[s].life <= 0) sparkles.splice(s, 1); }
    }

    return {
      opaque: true,
      enter: function () { G.audio.playMusic('title'); },
      update: function () {},
      draw: function (ctx) {
        var f = G.frame;
        step(f);
        ctx.imageSmoothingEnabled = false;

        // ===== SPACE — gradient, moon, twinkling parallax stars =====
        ctx.fillStyle = '#0a0820'; ctx.fillRect(0, 0, W, 16);
        ctx.fillStyle = '#161038'; ctx.fillRect(0, 16, W, 16);
        ctx.fillStyle = '#241a4e'; ctx.fillRect(0, 32, W, 14);
        ctx.fillStyle = '#f0e8c8'; fillCircle(ctx, 38, 15, 9);
        ctx.fillStyle = '#161038'; fillCircle(ctx, 33, 12, 8); // crescent cut
        for (var i = 0; i < stars.length; i++) {
          var st = stars[i];
          var sx = (((st.x - f * st.sp) % W) + W) % W;
          var on = (((f >> 4) + st.ph) % 6) !== 0;
          ctx.fillStyle = on ? (st.big ? '#f8e878' : '#c8c8e8') : '#48486e';
          ctx.fillRect(sx | 0, st.y, st.big ? 2 : 1, st.big ? 2 : 1);
        }
        for (var sp = 0; sp < sparkles.length; sp++) {
          ctx.fillStyle = (sparkles[sp].life >> 1) % 2 ? '#a0e0c0' : '#f4f4f4';
          ctx.fillRect(sparkles[sp].x | 0, sparkles[sp].y | 0, 1, 1);
        }
        // Rayquaza weaves slowly across the upper sky — always on screen.
        var ray = G.IMG.mon_rayquaza;
        if (ray) { var rcx = 120 + Math.sin(f * 0.012) * 78; var ry = 2 + Math.sin(f * 0.03) * 5; ctx.drawImage(ray, (rcx - 23) | 0, ry | 0, 46, 46); }

        // ===== LAND — dusk sky, pulsing horizon glow, ridge, Groudon =====
        ctx.fillStyle = '#3a2240'; ctx.fillRect(0, 46, W, 10);
        ctx.fillStyle = '#6e3038'; ctx.fillRect(0, 56, W, 8);
        var glow = (0.28 + 0.20 * (0.5 + 0.5 * Math.sin(f * 0.05))).toFixed(3);
        ctx.fillStyle = 'rgba(240,150,70,' + glow + ')'; ctx.fillRect(0, 60, W, 8);
        drawRidge(ctx);
        var gro = G.IMG.mon_groudon;
        if (gro) { var gy = 40 + Math.sin(f * 0.045) * 1.5; ctx.drawImage(gro, 6, gy | 0, 46, 46); }
        for (var em = 0; em < embers.length; em++) {
          ctx.fillStyle = (embers[em].life >> 2) % 2 ? '#f09838' : '#d04a48';
          ctx.fillRect(embers[em].x | 0, embers[em].y | 0, 1, 1);
        }
        var pch = G.IMG.mon_poochyena;
        if (pch) { var px = 96 + ((f * 0.35) % 64); var py = 56 + (Math.floor(f * 0.25) % 2); ctx.drawImage(pch, px | 0, py | 0, 22, 22); }

        // ===== SEA — gradient, scrolling waves, Wingull, Kyogre =====
        ctx.fillStyle = '#16356a'; ctx.fillRect(0, 82, W, 12);
        ctx.fillStyle = '#2860c0'; ctx.fillRect(0, 94, W, H - 94);
        drawWaves(ctx, f);
        var wg = G.IMG.mon_wingull;
        if (wg) { var wx = ((f * 0.9) % (W + 50)) - 25; var wy = 68 + Math.sin(f * 0.07) * 3; ctx.drawImage(wg, wx | 0, wy | 0, 22, 22); }
        var kyo = G.IMG.mon_kyogre;
        if (kyo) { var ky = 74 + Math.sin(f * 0.05) * 4; ctx.drawImage(kyo, 168, ky | 0, 52, 52); }
        for (var bb = 0; bb < bubbles.length; bb++) {
          ctx.fillStyle = '#a0e0e8';
          ctx.fillRect(bubbles[bb].x | 0, bubbles[bb].y | 0, bubbles[bb].r, bubbles[bb].r);
        }
      }
    };
  }

  G.TitleScene = function () {
    var logo = null;
    var phase = 'press'; // press | menu
    var sel = 0;
    return {
      opaque: true,
      enter: function () {
        logo = makeLogo();
        G.audio.playMusic('title');
      },
      update: function () {
        if (phase === 'press') {
          if (G.input.justPressed('start') || G.input.justPressed('A')) {
            G.audio.sfx('confirm');
            phase = 'menu';
            sel = 0; // first item: CONTINUE if a save exists, else NEW GAME
          }
          return;
        }
        var items = this._items();
        if (sel >= items.length) sel = 0;
        if (G.input.repeat('up')) { sel = (sel + items.length - 1) % items.length; G.audio.sfx('menuMove'); }
        if (G.input.repeat('down')) { sel = (sel + 1) % items.length; G.audio.sfx('menuMove'); }
        if (G.input.justPressed('B')) { phase = 'press'; G.audio.sfx('cancel'); return; }
        if (G.input.justPressed('A') || G.input.justPressed('start')) {
          G.audio.sfx('confirm');
          var pick = items[sel];
          if (pick === 'CONTINUE') {
            if (G.loadGame()) {
              G.replaceScene(G.overworldScene);
            } else {
              G.pushScene(G.Textbox('The save data could not be read...'));
            }
          } else if (pick === 'NEW GAME') {
            G.newGame();
            var startGame = function () {
              G.world.loadMap('playerhome', 4, 4, 'down');
              G.replaceScene(G.overworldScene);
              G.pushScene(G.Textbox([
                'A bright Hoenn morning, ' + (G.player.name || 'friend') + '! Prof. Birch is expecting you at his lab in Littleroot Town!',
                '(Arrows to move, Z to talk and confirm, X to cancel, Enter for the menu. M mutes.)'
              ]));
            };
            var toChar = function () {
              if (G.CharSelectScene) G.replaceScene(G.CharSelectScene(startGame));
              else startGame();
            };
            // Prof. Birch's welcome — the series' opening monologue — then you
            // choose your trainer and name.
            G.replaceScene(introScene());
            G.pushScene(G.Textbox([
              'Hi! Sorry to keep you waiting!',
              'Welcome to the world of Pokémon! My name is Birch — though folks call me the Pokémon Professor.',
              'This world is widely inhabited by creatures we call Pokémon. Some keep them as partners; others battle at their side. I study them.',
              'And now your own adventure is about to unfold. A world of dreams and discovery awaits!',
              'But first — tell me a little about yourself.'
            ], { onDone: toChar }));
          }
        }
      },
      _items: function () {
        return G.hasSave() ? ['CONTINUE', 'NEW GAME'] : ['NEW GAME'];
      },
      draw: function (ctx) {
        // night-sky gradient bands
        ctx.fillStyle = '#1a1c2c'; ctx.fillRect(0, 0, W, 60);
        ctx.fillStyle = '#2a1a40'; ctx.fillRect(0, 60, W, 40);
        ctx.fillStyle = '#4a2a6a'; ctx.fillRect(0, 100, W, 24);
        ctx.fillStyle = '#1f6e44'; ctx.fillRect(0, 124, W, H - 124);
        // stars
        for (var i = 0; i < 24; i++) {
          var sx = (i * 53 + 17) % W, sy = (i * 37 + 11) % 95;
          ctx.fillStyle = (i + (G.frame >> 5)) % 5 === 0 ? '#f8e878' : '#8a8aa4';
          ctx.fillRect(sx, sy, 1, 1);
        }
        // the weather trio: Rayquaza in the sky, Groudon & Kyogre at the horizon
        var ray = G.IMG.mon_rayquaza, gro = G.IMG.mon_groudon, kyo = G.IMG.mon_kyogre;
        if (ray) ctx.drawImage(ray, 150, 6);
        if (gro) ctx.drawImage(gro, 2, 78, 52, 52);
        if (kyo) ctx.drawImage(kyo, 186, 78, 52, 52);
        // starters on the ridge, between the two giants
        var starters = ['mon_treecko', 'mon_torchic', 'mon_mudkip'];
        for (var s = 0; s < starters.length; s++) {
          var img = G.IMG[starters[s]];
          if (img) ctx.drawImage(img, 62 + s * 42, 84, 40, 40);
        }
        // logo at 3x
        if (logo) {
          ctx.imageSmoothingEnabled = false;
          var lw = logo.width * 3, lh = logo.height * 3;
          ctx.drawImage(logo, (W - lw) / 2, 30, lw, lh);
        }
        G.text(ctx, 'A Hoenn region adventure', 68, 68, '#c2c2d6', '#1a1c2c');

        if (phase === 'press') {
          if ((G.frame >> 5) % 2 === 0) {
            G.text(ctx, 'PRESS ENTER', 88, 138, G.C.white, '#1a1c2c');
          }
        } else {
          var items = this._items();
          G.nineSlice(ctx, G.IMG.ui_box, 76, 128, 88, items.length * 15 + 10, 4);
          for (var m = 0; m < items.length; m++) {
            G.text(ctx, items[m], 96, 134 + m * 15, G.UI.text, G.UI.textShadow);
            if (m === sel) ctx.drawImage(G.IMG.ui_cursor, 85, 135 + m * 15);
          }
        }
      }
    };
  };
})();
