// UMBRANTHER (fire/dark apex panther, stage 3) — per feedback:
//   - add the MISSING hind legs (it only had two forelegs)
//   - deck it with a FIRE-DARK vibe: a purple-smoke shadow mane shot through with
//     flame licks, ember stripe markings, big flame tail, blazing eyes.
module.exports = {
  umbranther: {
    w: 56, h: 56,
    pal: {
      o: 'ink', c: 'dgry', d: 'stn0', e: 'gry', m: 'stn2',
      f: 'yel2', g: 'org2', G: 'org1',     // fire
      s: 'pur1', S: 'pur2',                 // shadow smoke
      K: 'yel2'
    },
    draw(g) {
      // --- big flame tail whip ---
      g.line(48, 32, 53, 21, 'c', 3);
      g.ellipse(53, 14, 5, 7, 'g'); g.ellipse(53, 12, 3, 5, 'f');
      g.set(53, 7, 'f'); g.set(54, 10, 'f'); g.set(51, 13, 'G');
      // --- crouched body ---
      g.ball(32, 33, 18, 13, 'c', 'e', 'd');
      // --- HIND legs (were missing) ---
      g.line(40, 44, 40, 53, 'c', 4);
      g.line(47, 43, 47, 52, 'd', 4);
      // --- FORE legs ---
      g.line(16, 43, 14, 52, 'c', 4);
      g.line(27, 45, 27, 53, 'd', 4);
      // --- fire-shadow MANE: purple smoke wreath shot through with flame licks ---
      g.ellipse(24, 15, 8, 6, 's'); g.ellipse(31, 19, 8, 6, 's'); g.ellipse(20, 22, 7, 5, 'S');
      g.ellipse(28, 12, 4, 4, 'g'); g.set(28, 9, 'f');       // flame lick
      g.ellipse(34, 17, 4, 4, 'g'); g.set(35, 14, 'f');      // flame lick
      g.ellipse(22, 11, 3, 3, 'g'); g.set(22, 9, 'f');       // flame lick
      // --- ears with flame tips ---
      g.tri(6, 14, 8, 3, 15, 10, 'c');
      g.tri(18, 10, 24, 2, 27, 13, 'c');
      g.ellipse(9, 5, 2, 3, 'g'); g.set(9, 2, 'f');          // left ear flame
      g.ellipse(23, 4, 2, 3, 'g'); g.set(23, 1, 'f');        // right ear flame
      // --- head low and forward ---
      g.ball(15, 19, 11, 10, 'c', 'e', 'd');
      g.ellipse(10, 25, 5, 4, 'm');                          // pale muzzle
      g.outline('o');
      g.seam(['m'], ['c', 'e', 'd'], 'd');
      g.seam(['s', 'S'], ['c', 'e', 'd'], 'o');
      g.seam(['g', 'f', 'G'], ['c', 'e', 'd', 's', 'S'], 'o'); // flames read everywhere
      // --- blazing fierce eyes (flame-yellow), heavy brow ---
      g.line(7, 14, 13, 14, 'o', 1);
      g.eyeAlmond(7, 15, 6, 4, 'f');
      g.eyeAlmond(16, 15, 6, 4, 'f');
      g.set(9, 24, 'o'); g.set(10, 24, 'o');                 // nose
      g.line(9, 28, 13, 29, 'o', 1);                         // snarl
      g.set(13, 28, 'o');
      // --- ember stripe markings across the flank ---
      g.line(34, 31, 39, 31, 'g', 1);
      g.line(38, 37, 43, 37, 'g', 1);
      g.line(30, 41, 34, 41, 'g', 1);
      g.set(40, 34, 'f'); g.set(36, 39, 'f');
    },
    back(g) {
      g.line(46, 28, 52, 16, 'c', 3);
      g.ellipse(52, 11, 5, 6, 'g'); g.ellipse(52, 9, 3, 4, 'f');
      g.ball(30, 34, 17, 13, 'c', 'e', 'd');
      g.line(22, 44, 22, 52, 'c', 4); g.line(38, 44, 38, 52, 'd', 4);
      g.ellipse(26, 18, 8, 6, 's'); g.ellipse(36, 22, 8, 6, 's');
      g.ellipse(30, 15, 3, 3, 'g'); g.set(30, 12, 'f');
      g.tri(12, 12, 14, 2, 21, 10, 'c'); g.tri(28, 10, 34, 2, 37, 12, 'c');
      g.ellipse(15, 5, 2, 3, 'g'); g.ellipse(32, 4, 2, 3, 'g');
      g.ball(25, 17, 12, 10, 'c', 'e', 'd');
      g.outline('o');
      g.seam(['s', 'S'], ['c', 'e', 'd'], 'o');
      g.seam(['g', 'f'], ['c', 'e', 'd', 's', 'S'], 'o');
      g.line(24, 31, 29, 31, 'g', 1); g.line(32, 37, 37, 37, 'g', 1);
    }
  }
};
