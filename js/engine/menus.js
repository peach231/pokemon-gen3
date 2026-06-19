// Pokéram — menus.js
// Start menu + party / summary / bag / dex / save screens.

(function () {
  var W = 240, H = 160;

  function panel(ctx, x, y, w, h) { G.nineSlice(ctx, G.IMG.ui_box, x, y, w, h, 4); }

  function hpBar(ctx, x, y, w, frac) {
    ctx.fillStyle = G.C.dgry; ctx.fillRect(x - 1, y - 1, w + 2, 5);
    ctx.fillStyle = '#585868'; ctx.fillRect(x, y, w, 3);
    var fw = Math.round(w * G.clamp(frac, 0, 1));
    if (frac > 0 && fw === 0) fw = 1;
    ctx.fillStyle = frac > 0.5 ? G.UI.hpGreen : frac > 0.2 ? G.UI.hpYellow : G.UI.hpRed;
    ctx.fillRect(x, y, fw, 3);
  }

  // ------------------------------------------------- starter preview screen --
  // Full preview before committing: sprite, types, stat bars, dex entry.
  // onChoice(true) = take it, onChoice(false) = put it back.
  G.StarterPreviewScene = function (spKey, onChoice) {
    var sp = G.SPECIES[spKey];
    var maxBase = 130; // bar scale
    return {
      opaque: true,
      enter: function () {
        var self = this;
        G.pushScene(G.Chooser({
          items: ['Take it!', 'Leave it'],
          x: 150, y: 112,
          onPick: function (i) {
            G.popScene(); // pop the preview itself
            onChoice(i === 0);
          }
        }));
      },
      update: function () {},
      draw: function (ctx) {
        ctx.fillStyle = '#2a3040';
        ctx.fillRect(0, 0, W, H);
        // left: the creature on a soft pedestal
        panel(ctx, 6, 6, 104, 116);
        ctx.fillStyle = '#3a4150';
        ctx.beginPath();
        ctx.ellipse(58, 96, 36, 9, 0, 0, Math.PI * 2);
        ctx.fill();
        var img = G.IMG['mon_' + spKey];
        if (img) ctx.drawImage(img, 58 - img.width / 2, 98 - img.height);
        G.text(ctx, sp.name, 14, 12, G.UI.text, G.UI.textShadow);
        for (var t = 0; t < sp.types.length; t++) {
          ctx.fillStyle = G.TYPE_COLORS[sp.types[t]];
          ctx.fillRect(14 + t * 44, 24, 40, 11);
          G.text(ctx, sp.types[t].toUpperCase().slice(0, 8), 17 + t * 44, 26, G.C.white);
        }
        // right: base stat bars
        panel(ctx, 116, 6, 120, 84);
        var rows = [['HP', sp.base.hp], ['Attack', sp.base.atk], ['Defense', sp.base.def],
                    ['Sp. Atk', sp.base.spa], ['Sp. Def', sp.base.spd], ['Speed', sp.base.spe]];
        for (var i = 0; i < rows.length; i++) {
          var y = 13 + i * 12;
          G.text(ctx, rows[i][0], 122, y, G.UI.text, G.UI.textShadow);
          var bw = Math.round(56 * Math.min(1, rows[i][1] / maxBase));
          ctx.fillStyle = G.C.dgry;
          ctx.fillRect(172, y + 1, 58, 6);
          ctx.fillStyle = rows[i][1] >= 100 ? G.UI.hpGreen : rows[i][1] >= 60 ? G.UI.expBlue : G.UI.hpYellow;
          ctx.fillRect(173, y + 2, bw, 4);
        }
        // dex flavor
        var lines = G.textWrap(sp.dex, 222);
        for (var d = 0; d < Math.min(2, lines.length); d++) {
          G.text(ctx, lines[d], 10, 128 + d * 11, G.C.white, '#1a1c2c');
        }
      }
    };
  };

  // ----------------------------------------------- caught: dex registration --
  // Shown after a successful catch: clean canvas, the creature, its data.
  G.CaughtScene = function (mon) {
    var sp = G.SPECIES[mon.sp];
    var t = 0;
    return {
      opaque: true,
      update: function () {
        t++;
        if (t > 20 && (G.input.justPressed('A') || G.input.justPressed('B') || G.input.justPressed('start'))) {
          G.audio.sfx('confirm');
          G.popScene();
        }
      },
      draw: function (ctx) {
        ctx.fillStyle = '#f0ead8';
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = '#d8d0b8';
        ctx.fillRect(0, 0, W, 18);
        ctx.fillRect(0, H - 14, W, 14);
        G.text(ctx, sp.name + "'s data was added to the Creature Dex!", 10, 5, G.UI.text, '#f0ead8');
        // creature on a pedestal, fading in
        ctx.fillStyle = '#d8d0b8';
        ctx.beginPath();
        ctx.ellipse(62, 102, 38, 9, 0, 0, Math.PI * 2);
        ctx.fill();
        var img = G.IMG['mon_' + mon.sp];
        if (img && t > 6) ctx.drawImage(img, 62 - img.width / 2, 104 - img.height);
        // identity
        G.text(ctx, 'No.' + (sp.id < 10 ? '00' : sp.id < 100 ? '0' : '') + sp.id + '  ' + sp.name, 116, 26, G.UI.text, '#d8d0b8');
        for (var ty = 0; ty < sp.types.length; ty++) {
          ctx.fillStyle = G.TYPE_COLORS[sp.types[ty]];
          ctx.fillRect(116 + ty * 44, 38, 40, 11);
          G.text(ctx, sp.types[ty].toUpperCase().slice(0, 8), 119 + ty * 44, 40, G.C.white);
        }
        // stat bars
        var rows = [['HP', sp.base.hp], ['Atk', sp.base.atk], ['Def', sp.base.def], ['SpA', sp.base.spa], ['SpD', sp.base.spd], ['Spe', sp.base.spe]];
        for (var i = 0; i < rows.length; i++) {
          var y = 54 + i * 10;
          G.text(ctx, rows[i][0], 116, y, G.UI.text, '#d8d0b8');
          ctx.fillStyle = '#c8c0a8';
          ctx.fillRect(142, y + 1, 80, 6);
          ctx.fillStyle = rows[i][1] >= 100 ? G.UI.hpGreen : rows[i][1] >= 60 ? G.UI.expBlue : G.UI.hpYellow;
          ctx.fillRect(143, y + 2, Math.round(78 * Math.min(1, rows[i][1] / 130)), 4);
        }
        // dex flavor
        var lines = G.textWrap(sp.dex, 120);
        for (var d = 0; d < Math.min(3, lines.length); d++) {
          G.text(ctx, lines[d], 116, 118 + d * 10, G.UI.text, '#d8d0b8');
        }
        if ((G.frame >> 4) % 2 === 0) G.text(ctx, 'Z: continue', 92, H - 12, G.UI.text);
      }
    };
  };

  // ------------------------------------------------------------ start menu --
  G.StartMenu = function () {
    var items = ['DEX', 'MAP', 'PARTY', 'BAG', 'SAVE', 'EXIT'];
    return {
      opaque: false,
      sel: 0,
      update: function () {
        if (G.input.repeat('up')) { this.sel = (this.sel + items.length - 1) % items.length; G.audio.sfx('menuMove'); }
        if (G.input.repeat('down')) { this.sel = (this.sel + 1) % items.length; G.audio.sfx('menuMove'); }
        if (G.input.justPressed('B') || G.input.justPressed('start')) { G.audio.sfx('cancel'); G.popScene(); return; }
        if (G.input.justPressed('A')) {
          G.audio.sfx('confirm');
          var pick = items[this.sel];
          if (pick === 'EXIT') { G.popScene(); return; }
          if (pick === 'DEX') G.pushScene(G.DexScene());
          if (pick === 'MAP') G.pushScene(G.RegionMapScene());
          if (pick === 'PARTY') G.pushScene(G.PartyScene());
          if (pick === 'BAG') G.pushScene(G.BagScene());
          if (pick === 'SAVE') {
            G.ask('Save your progress?', function () {
              var ok = G.saveGame();
              G.pushScene(G.Textbox(ok ? 'Progress saved!' : 'Save failed...'));
              if (ok) G.audio.sfx('heal');
            });
          }
        }
      },
      draw: function (ctx) {
        var x = W - 70, y = 6;
        panel(ctx, x, y, 64, items.length * 15 + 12);
        for (var i = 0; i < items.length; i++) {
          G.text(ctx, items[i], x + 20, y + 8 + i * 15, G.UI.text, G.UI.textShadow);
          if (i === this.sel) ctx.drawImage(G.IMG.ui_cursor, x + 9, y + 9 + i * 15);
        }
        // money chip
        panel(ctx, 4, 6, 80, 22);
        G.text(ctx, '$' + G.player.money, 12, 13, G.UI.text, G.UI.textShadow);
      }
    };
  };

  // ------------------------------------------------------------ party screen --
  // opts: { pickMode, onPick(index) } — pickMode = choosing an item target
  G.PartyScene = function (opts) {
    opts = opts || {};
    return {
      opaque: true,
      sel: 0,
      update: function () {
        var n = G.player.party.length;
        if (!n) { G.popScene(); return; }
        if (G.input.repeat('up')) { this.sel = (this.sel + n - 1) % n; G.audio.sfx('menuMove'); }
        if (G.input.repeat('down')) { this.sel = (this.sel + 1) % n; G.audio.sfx('menuMove'); }
        if (G.input.justPressed('B')) { G.audio.sfx('cancel'); G.popScene(); if (opts.onPick) opts.onPick(-1); return; }
        if (G.input.justPressed('A')) {
          G.audio.sfx('confirm');
          var idx = this.sel;
          if (opts.pickMode) {
            G.popScene();
            if (opts.onPick) opts.onPick(idx);
            return;
          }
          var self = this;
          G.pushScene(G.Chooser({
            items: ['Summary', 'Move up', 'Back'],
            onPick: function (i) {
              if (i === 0) G.pushScene(G.SummaryScene(G.player.party[idx]));
              if (i === 1 && idx > 0) {
                var p = G.player.party;
                var tmp = p[idx - 1]; p[idx - 1] = p[idx]; p[idx] = tmp;
                self.sel = idx - 1;
              }
            }
          }));
        }
      },
      draw: function (ctx) {
        ctx.fillStyle = '#2a3040';
        ctx.fillRect(0, 0, W, H);
        G.text(ctx, opts.prompt || (opts.pickMode ? 'Use on which creature?' : 'PARTY'), 10, 6, G.C.white, '#1a1c2c');
        var party = G.player.party;
        for (var i = 0; i < party.length; i++) {
          var mon = party[i];
          var y = 20 + i * 22;
          panel(ctx, 8, y, 136, 22);
          G.text(ctx, (mon.shiny ? '★' : '') + G.monName(mon), 16, y + 7, G.UI.text, G.UI.textShadow);
          G.text(ctx, 'Lv' + mon.level, 78, y + 7, G.UI.text, G.UI.textShadow);
          var stats = G.monStats(mon);
          hpBar(ctx, 104, y + 10, 32, mon.curHp / stats.hp);
          if (mon.curHp <= 0) G.text(ctx, 'FNT', 104, y + 1, G.UI.hpRed);
          else if (mon.status) G.text(ctx, mon.status.toUpperCase(), 104, y + 1, '#9040a0');
          if (i === this.sel) ctx.drawImage(G.IMG.ui_cursor, 2, y + 8);
        }
        // selected mon portrait
        var cur = party[this.sel];
        if (cur) {
          panel(ctx, 152, 20, 84, 92);
          var img = G.IMG['mon_' + cur.sp];
          if (img) ctx.drawImage(img, 194 - img.width / 2, 96 - img.height);
          var sp = G.SPECIES[cur.sp];
          for (var t = 0; t < sp.types.length; t++) {
            ctx.fillStyle = G.TYPE_COLORS[sp.types[t]];
            ctx.fillRect(158 + t * 40, 98, 36, 10);
            G.text(ctx, sp.types[t].toUpperCase().slice(0, 8), 160 + t * 40, 100, G.C.white);
          }
          var stats2 = G.monStats(cur);
          G.text(ctx, cur.curHp + '/' + stats2.hp + ' HP', 158, 26, G.UI.text, G.UI.textShadow);
        }
        G.text(ctx, 'Z: select   X: back', 10, H - 12, G.C.lgry);
      }
    };
  };

  // ----------------------------------------------------------- summary screen --
  G.SummaryScene = function (mon) {
    return {
      opaque: true,
      update: function () {
        if (G.input.justPressed('B') || G.input.justPressed('A')) { G.audio.sfx('cancel'); G.popScene(); }
      },
      draw: function (ctx) {
        ctx.fillStyle = '#2a3040';
        ctx.fillRect(0, 0, W, H);
        var sp = G.SPECIES[mon.sp];
        // left: sprite + identity
        panel(ctx, 6, 6, 96, 104);
        var img = G.IMG['mon_' + mon.sp];
        if (img) ctx.drawImage(img, 54 - img.width / 2, 72 - img.height);
        G.text(ctx, (mon.shiny ? '★' : '') + G.monName(mon), 14, 12, G.UI.text, G.UI.textShadow);
        G.text(ctx, 'Lv' + mon.level, 74, 12, G.UI.text, G.UI.textShadow);
        for (var t = 0; t < sp.types.length; t++) {
          ctx.fillStyle = G.TYPE_COLORS[sp.types[t]];
          ctx.fillRect(14 + t * 42, 78, 38, 10);
          G.text(ctx, sp.types[t].toUpperCase().slice(0, 8), 16 + t * 42, 80, G.C.white);
        }
        G.text(ctx, 'No.' + (sp.id < 10 ? '00' : sp.id < 100 ? '0' : '') + sp.id, 14, 94, G.UI.text, G.UI.textShadow);
        // right: stats
        panel(ctx, 108, 6, 126, 70);
        var stats = G.monStats(mon);
        var rows = [['HP', mon.curHp + '/' + stats.hp], ['Attack', stats.atk], ['Defense', stats.def], ['Sp. Atk', stats.spa], ['Sp. Def', stats.spd], ['Speed', stats.spe]];
        for (var i = 0; i < rows.length; i++) {
          G.text(ctx, rows[i][0], 116, 12 + i * 10, G.UI.text, G.UI.textShadow);
          G.text(ctx, String(rows[i][1]), 196, 12 + i * 10, G.UI.text, G.UI.textShadow);
        }
        // moves
        panel(ctx, 108, 80, 126, 56);
        for (var m = 0; m < mon.moves.length; m++) {
          var ms = mon.moves[m];
          var mv = G.MOVES[ms.id];
          G.text(ctx, mv.name, 116, 86 + m * 12, G.UI.text, G.UI.textShadow);
          G.text(ctx, ms.pp + '/' + ms.maxPp, 204, 86 + m * 12, G.UI.text, G.UI.textShadow);
        }
        // dex line
        var lines = G.textWrap(sp.dex, 220);
        for (var d = 0; d < Math.min(2, lines.length); d++) {
          G.text(ctx, lines[d], 10, 116 + d * 11, G.C.white, '#1a1c2c');
        }
        G.text(ctx, 'Z/X: back', 10, H - 12, G.C.lgry);
      }
    };
  };

  // -------------------------------------------------------------- bag screen --
  G.BagScene = function () {
    function usable() {
      var list = [];
      for (var id in G.player.bag) {
        if (G.player.bag[id] > 0) list.push(id);
      }
      return list;
    }
    return {
      opaque: true,
      sel: 0,
      update: function () {
        var ids = usable();
        if (!ids.length) { G.popScene(); G.pushScene(G.Textbox('The bag is empty!')); return; }
        var n = ids.length;
        this.sel = G.clamp(this.sel, 0, n - 1);
        if (G.input.repeat('up')) { this.sel = (this.sel + n - 1) % n; G.audio.sfx('menuMove'); }
        if (G.input.repeat('down')) { this.sel = (this.sel + 1) % n; G.audio.sfx('menuMove'); }
        if (G.input.justPressed('B')) { G.audio.sfx('cancel'); G.popScene(); return; }
        if (G.input.justPressed('A')) {
          G.audio.sfx('confirm');
          var id = ids[this.sel];
          var item = G.ITEMS[id];
          if (item.kind === 'orb') {
            G.pushScene(G.Textbox('Better saved for a wild battle!'));
          } else if (item.kind === 'repel') {
            G.player.bag[id]--;
            G.player.repelSteps = item.steps;
            G.audio.sfx('heal');
            G.pushScene(G.Textbox('You spritzed the Repel Mist. Weak wild creatures will keep away!'));
          } else {
            G.pushScene(G.PartyScene({
              pickMode: true,
              onPick: function (idx) {
                if (idx < 0) return;
                var mon = G.player.party[idx];
                var stats = G.monStats(mon);
                var msg = 'It had no effect...';
                if (item.kind === 'heal' && mon.curHp > 0 && mon.curHp < stats.hp) {
                  var from = mon.curHp;
                  mon.curHp = Math.min(stats.hp, mon.curHp + item.amount);
                  msg = G.monName(mon) + ' recovered ' + (mon.curHp - from) + ' HP!';
                  G.player.bag[id]--;
                  G.audio.sfx('heal');
                } else if (item.kind === 'cure' && mon.status && item.statuses.indexOf(mon.status) !== -1) {
                  mon.status = null; mon.slpTurns = 0;
                  msg = G.monName(mon) + ' is back to normal!';
                  G.player.bag[id]--;
                  G.audio.sfx('heal');
                } else if (item.kind === 'revive' && mon.curHp <= 0) {
                  mon.curHp = Math.max(1, Math.floor(stats.hp * item.frac));
                  msg = G.monName(mon) + ' came back to its senses!';
                  G.player.bag[id]--;
                  G.audio.sfx('heal');
                }
                G.pushScene(G.Textbox(msg));
              }
            }));
          }
        }
      },
      draw: function (ctx) {
        ctx.fillStyle = '#2a3040';
        ctx.fillRect(0, 0, W, H);
        G.text(ctx, 'BAG', 10, 6, G.C.white, '#1a1c2c');
        var ids = usable();
        var top = Math.max(0, Math.min(this.sel - 3, ids.length - 7));
        for (var i = top; i < Math.min(ids.length, top + 7); i++) {
          var y = 20 + (i - top) * 16;
          var item = G.ITEMS[ids[i]];
          panel(ctx, 8, y, 130, 17);
          G.text(ctx, item.name, 16, y + 5, G.UI.text, G.UI.textShadow);
          G.text(ctx, 'x' + G.player.bag[ids[i]], 112, y + 5, G.UI.text, G.UI.textShadow);
          if (i === this.sel) ctx.drawImage(G.IMG.ui_cursor, 2, y + 6);
        }
        var cur = G.ITEMS[ids[this.sel]];
        if (cur) {
          panel(ctx, 144, 20, 92, 60);
          var lines = G.textWrap(cur.desc, 76);
          for (var d = 0; d < Math.min(4, lines.length); d++) {
            G.text(ctx, lines[d], 151, 27 + d * 11, G.UI.text, G.UI.textShadow);
          }
        }
        G.text(ctx, '$' + G.player.money, 150, 90, G.C.white, '#1a1c2c');
        G.text(ctx, 'Z: use   X: back', 10, H - 12, G.C.lgry);
      }
    };
  };

  // --------------------------------------------------- Birch's Lab storage PC --
  // Two columns: PARTY (left, max 6) and LAB box (right, scrollable). Z transfers
  // the highlighted creature across; the party can never drop below 1 or exceed 6.
  G.PCScene = function () {
    var VIS = 7; // visible box rows
    return {
      opaque: true,
      col: 0,        // 0 = party, 1 = box
      pSel: 0, bSel: 0, bTop: 0,
      msg: 'Move creatures between your party and the Lab.',
      _list: function () { return this.col === 0 ? G.player.party : G.player.box; },
      _sel: function () { return this.col === 0 ? this.pSel : this.bSel; },
      _setSel: function (v) { if (this.col === 0) this.pSel = v; else this.bSel = v; },
      update: function () {
        var party = G.player.party, box = G.player.box;
        if (G.input.justPressed('B')) { G.audio.sfx('cancel'); G.popScene(); return; }
        if (G.input.justPressed('left') && this.col !== 0) { this.col = 0; G.audio.sfx('menuMove'); }
        if (G.input.justPressed('right') && box.length) { this.col = 1; this.bSel = Math.min(this.bSel, box.length - 1); G.audio.sfx('menuMove'); }
        var n = this._list().length;
        if (n) {
          if (G.input.repeat('up')) { this._setSel((this._sel() + n - 1) % n); G.audio.sfx('menuMove'); }
          if (G.input.repeat('down')) { this._setSel((this._sel() + 1) % n); G.audio.sfx('menuMove'); }
        }
        // keep box scroll window around the selection
        if (this.bSel < this.bTop) this.bTop = this.bSel;
        if (this.bSel >= this.bTop + VIS) this.bTop = this.bSel - VIS + 1;
        if (G.input.justPressed('A')) {
          if (this.col === 0) {
            if (!party.length) return;
            if (party.length <= 1) { this.msg = "You can't store your last creature!"; G.audio.sfx('cancel'); return; }
            var m = party.splice(this.pSel, 1)[0];
            box.push(m);
            this.pSel = Math.min(this.pSel, party.length - 1);
            this.msg = G.monName(m) + ' was stored in the Lab.';
            G.audio.sfx('confirm');
          } else {
            if (!box.length) return;
            if (party.length >= 6) { this.msg = 'Your party is full (6).'; G.audio.sfx('cancel'); return; }
            var m2 = box.splice(this.bSel, 1)[0];
            party.push(m2);
            if (this.bSel >= box.length) this.bSel = Math.max(0, box.length - 1);
            if (!box.length) this.col = 0;
            this.msg = G.monName(m2) + ' was added to your party!';
            G.audio.sfx('confirm');
          }
        }
      },
      draw: function (ctx) {
        ctx.fillStyle = '#2a3040'; ctx.fillRect(0, 0, W, H);
        var party = G.player.party, box = G.player.box;
        G.text(ctx, "BIRCH'S LAB  —  STORAGE PC", 10, 4, G.C.white, '#1a1c2c');

        // PARTY column
        G.text(ctx, 'PARTY ' + party.length + '/6', 12, 16, this.col === 0 ? '#f8e878' : G.C.lgry, '#1a1c2c');
        for (var i = 0; i < 6; i++) {
          var y = 26 + i * 16;
          panel(ctx, 8, y, 104, 15);
          var mon = party[i];
          if (mon) {
            G.text(ctx, G.monName(mon), 16, y + 4, G.UI.text, G.UI.textShadow);
            G.text(ctx, 'Lv' + mon.level, 82, y + 4, G.UI.text, G.UI.textShadow);
          } else {
            G.text(ctx, '—', 16, y + 4, G.C.gry);
          }
          if (this.col === 0 && i === this.pSel) ctx.drawImage(G.IMG.ui_cursor, 1, y + 4);
        }

        // LAB box column (scrollable)
        G.text(ctx, 'LAB ' + box.length, 126, 16, this.col === 1 ? '#f8e878' : G.C.lgry, '#1a1c2c');
        panel(ctx, 120, 24, 116, VIS * 13 + 8);
        if (!box.length) {
          G.text(ctx, 'Empty.', 128, 30, G.C.gry);
        } else {
          for (var b = this.bTop; b < Math.min(box.length, this.bTop + VIS); b++) {
            var by = 30 + (b - this.bTop) * 13;
            var bm = box[b];
            G.text(ctx, G.monName(bm), 134, by, G.UI.text, G.UI.textShadow);
            G.text(ctx, 'Lv' + bm.level, 204, by, G.UI.text, G.UI.textShadow);
            if (this.col === 1 && b === this.bSel) ctx.drawImage(G.IMG.ui_cursor, 124, by);
          }
        }

        // selected creature preview
        var cur = this._list()[this._sel()];
        if (cur) {
          var img = G.IMG['mon_' + cur.sp];
          if (img) ctx.drawImage(img, 178 - img.width / 2, 150 - img.height);
        }
        panel(ctx, 2, H - 26, 170, 22);
        var ml = G.textWrap(this.msg, 158);
        G.text(ctx, ml[0] || '', 8, H - 21, G.UI.text, G.UI.textShadow);
        G.text(ctx, 'Z: move   <>: switch   X: exit', 8, H - 11, G.C.lgry);
      }
    };
  };

  // -------------------------------------------------------------- dex screen --
  G.DexScene = function () {
    var RARITY_STARS = { common: '★', uncommon: '★★', rare: '★★★', elusive: '★★★★', legendary: '★★★★★' };
    return {
      opaque: true,
      sel: 0,
      update: function () {
        var n = G.DEX_ORDER.length;
        if (G.input.repeat('up')) { this.sel = (this.sel + n - 1) % n; G.audio.sfx('menuMove'); }
        if (G.input.repeat('down')) { this.sel = (this.sel + 1) % n; G.audio.sfx('menuMove'); }
        if (G.input.repeat('left')) { this.sel = Math.max(0, this.sel - 10); G.audio.sfx('menuMove'); }
        if (G.input.repeat('right')) { this.sel = Math.min(n - 1, this.sel + 10); G.audio.sfx('menuMove'); }
        if (G.input.justPressed('B')) { G.audio.sfx('cancel'); G.popScene(); }
      },
      draw: function (ctx) {
        ctx.fillStyle = '#222838';
        ctx.fillRect(0, 0, W, H);
        var seen = 0, caught = 0;
        for (var k in G.player.dexSeen) seen++;
        for (var c in G.player.dexCaught) caught++;
        G.text(ctx, 'CREATURE DEX', 10, 5, G.C.white, '#1a1c2c');
        G.text(ctx, 'Seen ' + seen + '  Caught ' + caught, 130, 5, G.C.white, '#1a1c2c');

        var top = G.clamp(this.sel - 4, 0, Math.max(0, G.DEX_ORDER.length - 9));
        for (var i = top; i < Math.min(G.DEX_ORDER.length, top + 9); i++) {
          var key = G.DEX_ORDER[i];
          var sp = G.SPECIES[key];
          var y = 18 + (i - top) * 14;
          var isSeen = G.player.dexSeen[key], isCaught = G.player.dexCaught[key];
          var label = 'No.' + (sp.id < 10 ? '00' : sp.id < 100 ? '0' : '') + sp.id + '  ' + (isSeen ? sp.name : '-----');
          // caught = bright, seen-only = grayed, unseen = darkest
          var color = isCaught ? G.C.white : isSeen ? G.C.gry : '#3a3f4e';
          if (i === this.sel) color = isCaught ? '#f8e878' : G.C.lgry;
          G.text(ctx, label, 12, y, color, '#1a1c2c');
          if (isCaught) G.text(ctx, '★', 2, y, G.UI.hpGreen);
          if (i === this.sel) ctx.drawImage(G.IMG.ui_cursor, 110, y + 1);
        }
        // detail panel
        var curKey = G.DEX_ORDER[this.sel];
        var curSp = G.SPECIES[curKey];
        panel(ctx, 124, 16, 112, 120);
        if (G.player.dexCaught[curKey]) {
          var img = G.IMG['mon_' + curKey];
          if (img) ctx.drawImage(img, 168 - img.width / 2, 72 - img.height);
          G.text(ctx, curSp.name, 132, 22, G.UI.text, G.UI.textShadow);
          G.text(ctx, RARITY_STARS[curSp.rarity] || '', 196, 22, '#b08818');
          // base stats, compact
          var sRows = [['HP', curSp.base.hp], ['Atk', curSp.base.atk], ['Def', curSp.base.def], ['SpA', curSp.base.spa], ['SpD', curSp.base.spd], ['Spe', curSp.base.spe]];
          for (var si = 0; si < sRows.length; si++) {
            var sx = 132 + (si % 2) * 52, sy = 76 + Math.floor(si / 2) * 10;
            G.text(ctx, sRows[si][0], sx, sy, G.UI.text, G.UI.textShadow);
            G.text(ctx, String(sRows[si][1]), sx + 26, sy, '#2a6a8e', G.UI.textShadow);
          }
          var lines = G.textWrap(curSp.dex, 96);
          for (var d = 0; d < Math.min(3, lines.length); d++) {
            G.text(ctx, lines[d], 132, 108 + d * 10, G.UI.text, G.UI.textShadow);
          }
        } else if (G.player.dexSeen[curKey]) {
          G.text(ctx, curSp.name, 132, 22, G.UI.text, G.UI.textShadow);
          G.text(ctx, '? ? ?', 168, 60, G.UI.text, G.UI.textShadow);
          G.text(ctx, 'Catch one to record', 132, 92, G.UI.text, G.UI.textShadow);
          G.text(ctx, 'its dex entry.', 132, 102, G.UI.text, G.UI.textShadow);
        } else {
          G.text(ctx, 'Unknown', 132, 22, G.UI.text, G.UI.textShadow);
        }
        G.text(ctx, 'X: back', 10, H - 12, G.C.lgry);
      }
    };
  };

  // ------------------------------------------------------------ region map --
  // Hoenn (western/southern half) overworld map. Areas the player has entered
  // light up; unexplored areas stay dim. Cursor inspects each; current area is
  // ringed. Node ids are the internal map ids so visited[] lines up directly.
  G.RegionMapScene = function () {
    // full western/southern Hoenn route, 8 gym towns, laid out as a serpentine
    var NODES = [
      // band 1 (left -> right)
      { id: 'hearthvale',    label: 'Littleroot Town',  x: 24,  y: 34 },
      { id: 'route1',        label: 'Route 101',        x: 56,  y: 34 },
      { id: 'cobblemarch',   label: 'Rustboro City',    x: 88,  y: 34 },
      { id: 'route2',        label: 'Route 102',        x: 120, y: 34 },
      { id: 'verdantforest', label: 'Petalburg Woods',  x: 152, y: 34 },
      { id: 'brinehollow',   label: 'Dewford Town',     x: 184, y: 34 },
      { id: 'route3',        label: 'Route 109',        x: 216, y: 34 },
      // band 2 (right -> left)
      { id: 'hollowdeep1',   label: 'Granite Cave',     x: 216, y: 74 },
      { id: 'coilgate',      label: 'Mauville City',    x: 184, y: 74 },
      { id: 'route4',        label: 'Route 111',        x: 152, y: 74 },
      { id: 'aurelune',      label: 'Lavaridge Town',   x: 120, y: 74 },
      { id: 'route5',        label: 'Route 117',        x: 88,  y: 74 },
      { id: 'petalburg',     label: 'Petalburg City',   x: 56,  y: 74 },
      { id: 'route6',        label: 'Route 119',        x: 24,  y: 74 },
      // band 3 (left -> right)
      { id: 'fortree',       label: 'Fortree City',     x: 24,  y: 112 },
      { id: 'route7',        label: 'Route 121',        x: 56,  y: 112 },
      { id: 'mossdeep',      label: 'Mossdeep City',    x: 88,  y: 112 },
      { id: 'route8',        label: 'Route 124',        x: 120, y: 112 },
      { id: 'sootopolis',    label: 'Sootopolis City',  x: 152, y: 112 },
      { id: 'summitpath',    label: 'Victory Road',     x: 184, y: 112 },
      { id: 'crownsummit',   label: 'Pokémon League',   x: 216, y: 112 }
    ];
    var visited = G.player.visited || {};
    function isSeen(id) { return !!visited[id]; }
    var mid = (G.world && G.world.mapId) || '';
    var cur = -1;
    for (var i = 0; i < NODES.length; i++) {
      if (NODES[i].id === mid || mid.indexOf(NODES[i].id) !== -1) { cur = i; break; }
    }
    var seenCount = 0;
    for (var v = 0; v < NODES.length; v++) if (isSeen(NODES[v].id)) seenCount++;

    return {
      opaque: true,
      sel: cur >= 0 ? cur : 0,
      update: function () {
        if (G.input.justPressed('B') || G.input.justPressed('start')) { G.audio.sfx('cancel'); G.popScene(); return; }
        if (G.input.repeat('right') || G.input.repeat('down')) { this.sel = (this.sel + 1) % NODES.length; G.audio.sfx('menuMove'); }
        if (G.input.repeat('left') || G.input.repeat('up')) { this.sel = (this.sel + NODES.length - 1) % NODES.length; G.audio.sfx('menuMove'); }
      },
      draw: function (ctx) {
        // sea + a soft landmass so it reads like a map
        ctx.fillStyle = '#1f3550'; ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = '#2a4a64';
        for (var s = 0; s < H; s += 4) { ctx.fillRect(0, s, W, 1); } // gentle sea banding
        ctx.fillStyle = '#3c6b40';
        ctx.beginPath(); ctx.ellipse(120, 78, 116, 56, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#4f7e4a';
        ctx.beginPath(); ctx.ellipse(96, 70, 72, 34, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(180, 60, 44, 26, 0, 0, Math.PI * 2); ctx.fill();

        G.text(ctx, 'HOENN — REGION MAP', 8, 5, G.C.white, '#1a1c2c');

        // routes between areas
        ctx.strokeStyle = '#d8cf9a'; ctx.lineWidth = 2;
        ctx.beginPath();
        for (var e = 0; e < NODES.length - 1; e++) { ctx.moveTo(NODES[e].x, NODES[e].y); ctx.lineTo(NODES[e + 1].x, NODES[e + 1].y); }
        ctx.stroke();

        // nodes
        for (var i = 0; i < NODES.length; i++) {
          var n = NODES[i], seen = isSeen(n.id), here = (i === cur);
          if (here) { ctx.strokeStyle = '#f8e878'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(n.x, n.y, 7 + (G.frame >> 3) % 2, 0, Math.PI * 2); ctx.stroke(); }
          ctx.fillStyle = seen ? (i === this.sel ? '#f8e878' : '#f4f4f4') : '#33425e';
          ctx.beginPath(); ctx.arc(n.x, n.y, 4, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = seen ? '#c23a3a' : '#26314a';
          ctx.beginPath(); ctx.arc(n.x, n.y, 2, 0, Math.PI * 2); ctx.fill();
          if (i === this.sel) { ctx.strokeStyle = '#f8e878'; ctx.lineWidth = 1; ctx.strokeRect(n.x - 6, n.y - 6, 13, 13); }
        }

        // footer: selected area name + explored count
        panel(ctx, 2, H - 28, W - 4, 24);
        var sNode = NODES[this.sel], seenSel = isSeen(sNode.id);
        G.text(ctx, seenSel ? sNode.label : '? ? ? (unexplored)', 8, H - 23, seenSel ? G.UI.text : G.C.gry, G.UI.textShadow);
        if (this.sel === cur) G.text(ctx, 'You are here.', 150, H - 23, G.UI.hpGreen, G.UI.textShadow);
        G.text(ctx, 'Explored ' + seenCount + '/' + NODES.length, 8, H - 12, G.C.lgry);
        G.text(ctx, '<>: move   X: back', W - 110, H - 12, G.C.lgry);
      }
    };
  };
})();
