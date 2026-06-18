// RAM line — escalate intensity per stage (Pebblamb stays the soft baby baseline,
// untouched). Bouldram = sterner/tougher; Ferrobex = fierce, armored, battle-ready.
module.exports = {
  // ========================================================== BOULDRAM =====
  bouldram: {
    pal: { o: 'ink', w: 'pale', l: 'lgry', s: 'skn2', t: 'skn1', n: 'brn2', m: 'brn1', p: 'stn2', q: 'stn1', K: 'white' },
    draw(g) {
      // sturdy legs
      g.rect(12, 34, 6, 11, 'n'); g.rect(20, 36, 6, 10, 'n');
      g.rect(29, 36, 6, 10, 'n'); g.rect(36, 34, 6, 11, 'n');
      // rocky wool mass
      g.ball(25, 22, 17, 15, 'w', null, 'l');
      g.ellipse(11, 14, 6, 5, 'w'); g.ellipse(24, 9, 7, 5, 'w');
      g.ellipse(37, 12, 6, 5, 'w'); g.ellipse(41, 24, 5, 6, 'l');
      // BIGGER curled horns (more intense)
      g.ring(10, 16, 8, 8, 'q', 0.5, 245, 165);
      g.ring(31, 10, 8, 7, 'q', 0.5, 275, 185);
      // face
      g.ball(15, 24, 8, 7, 's', null, 't');
      g.outline('o');
      g.seam(['s', 't'], ['w', 'l'], 'o'); g.seam(['q'], ['w', 'l'], 'o'); g.seam(['n'], ['w', 'l'], 'o');
      // ANGRY V brows + hard open eyes (was sleepy/soft)
      g.line(8, 20, 13, 22, 'o', 1); g.set(8, 19, 'o');
      g.line(16, 22, 21, 20, 'o', 1); g.set(21, 19, 'o');
      g.eye(9, 22, 4, 4); g.eye(16, 22, 4, 4);
      // stern frown mouth
      g.line(13, 28, 16, 28, 'o', 1); g.set(12, 29, 'o'); g.set(17, 29, 'o');
      // more embedded rocks (battle-worn)
      g.rect(28, 16, 3, 3, 'p'); g.rect(20, 13, 2, 2, 'p'); g.rect(33, 24, 3, 3, 'p');
      g.rect(16, 31, 2, 2, 'p'); g.rect(35, 29, 3, 3, 'p'); g.set(26, 18, 'p');
    },
    back(g) {
      g.rect(15, 30, 6, 9, 'n'); g.rect(34, 30, 6, 9, 'n');
      g.ball(28, 20, 18, 15, 'w', null, 'l');
      g.ellipse(14, 9, 6, 5, 'w'); g.ellipse(29, 6, 7, 5, 'w'); g.ellipse(42, 10, 6, 5, 'w');
      g.ring(13, 8, 8, 7, 'q', 0.5, 245, 165); g.ring(40, 7, 8, 7, 'q', 0.5, 275, 185);
      g.outline('o');
      g.seam(['q'], ['w', 'l'], 'o');
      g.rect(25, 14, 3, 3, 'p'); g.rect(34, 22, 3, 3, 'p'); g.rect(20, 24, 2, 2, 'p');
    }
  },

  // ========================================================== FERROBEX =====
  ferrobex: {
    w: 56, h: 56,
    pal: { o: 'ink', w: 'pale', l: 'lgry', s: 'skn2', t: 'skn1', n: 'brn1', p: 'stn2', q: 'stn3', i: 'stn1', K: 'white' },
    draw(g) {
      // legs with metal hooves
      g.rect(13, 38, 7, 13, 'n'); g.rect(23, 41, 7, 11, 'n');
      g.rect(33, 41, 7, 11, 'n'); g.rect(42, 38, 7, 13, 'n');
      g.rect(13, 48, 7, 4, 'i'); g.rect(42, 48, 7, 4, 'i');
      // massive body
      g.ball(29, 26, 20, 17, 'w', null, 'l');
      g.ellipse(12, 16, 7, 6, 'w'); g.ellipse(28, 10, 8, 6, 'w'); g.ellipse(44, 14, 7, 6, 'w');
      // MORE armor plates
      g.ellipse(36, 16, 8, 5, 'q'); g.ellipse(44, 24, 6, 5, 'q'); g.ellipse(28, 12, 6, 4, 'q');
      g.ellipse(40, 32, 6, 4, 'q'); g.ellipse(20, 14, 5, 4, 'q');
      // BIGGER, meaner steel horns
      g.ring(11, 18, 12, 11, 'q', 0.42, 238, 172);
      g.ring(33, 9, 12, 10, 'q', 0.42, 268, 196);
      g.ring(12, 17, 7, 6, 'i', 0.5, 238, 162);
      // face
      g.ball(16, 28, 10, 8, 's', null, 't');
      g.outline('o');
      g.seam(['s', 't'], ['w', 'l'], 'o'); g.seam(['q', 'i'], ['w', 'l'], 'o'); g.seam(['n'], ['w', 'l'], 'o');
      // FIERCE heavy angled brows + hard eyes
      g.line(8, 22, 14, 25, 'o', 1); g.set(8, 21, 'o'); g.set(9, 22, 'o');
      g.line(17, 25, 23, 22, 'o', 1); g.set(23, 21, 'o'); g.set(22, 22, 'o');
      g.eye(10, 25, 4, 4); g.eye(18, 25, 4, 4);
      // SNARL mouth with tusks
      g.line(13, 34, 19, 34, 'o', 1); g.set(12, 33, 'o'); g.set(20, 33, 'o');
      g.set(14, 35, 'w'); g.set(18, 35, 'w');
      // battle scars
      g.line(20, 30, 24, 33, 't', 1); g.line(33, 20, 36, 23, 't', 1);
    },
    back(g) {
      g.rect(16, 32, 7, 11, 'n'); g.rect(38, 32, 7, 11, 'n');
      g.ball(29, 22, 19, 16, 'w', null, 'l');
      g.ellipse(14, 10, 7, 6, 'w'); g.ellipse(30, 6, 8, 6, 'w'); g.ellipse(44, 10, 7, 6, 'w');
      g.ellipse(30, 16, 9, 6, 'q');
      g.ring(12, 9, 12, 10, 'q', 0.42, 238, 172); g.ring(44, 8, 12, 10, 'q', 0.42, 268, 200);
      g.outline('o');
      g.seam(['q'], ['w', 'l'], 'o');
      g.line(26, 18, 30, 21, 't', 1);
    }
  }
};
