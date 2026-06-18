// PYRANTHER (fire panther, stage 2) — differentiated from Emberpaw per feedback.
// Adds the line's evolving fire identity: a FLAME MANE running down the neck/back,
// a bigger tail flame, and ember stripe markings. Bridges cub -> maned Umbranther.
module.exports = {
  pyranther: {
    pal: {
      o: 'ink', b: 'dgry', l: 'gry', s: 'stn0', e: 'org2', f: 'yel2',
      m: 'stn2', E: 'org1', K: 'yel2'
    },
    draw(g) {
      // --- FLAME MANE down the neck/back (signature of the evolution). Drawn
      // first so the head + body overlap the bases, leaving flame tips rising. ---
      g.ellipse(23, 14, 3, 4, 'e'); g.ellipse(23, 11, 2, 3, 'f'); g.set(23, 8, 'f');
      g.ellipse(28, 17, 3, 4, 'e'); g.ellipse(28, 14, 2, 3, 'f'); g.set(28, 11, 'f');
      g.ellipse(32, 22, 3, 4, 'e'); g.ellipse(32, 19, 2, 2, 'f'); g.set(32, 17, 'f');
      g.ellipse(35, 28, 3, 3, 'e'); g.ellipse(35, 26, 2, 2, 'f');

      // --- bigger FLAME TAIL ---
      g.line(36, 34, 43, 27, 'b', 2);
      g.ellipse(46, 20, 5, 7, 'e'); g.ellipse(46, 18, 3, 5, 'f');
      g.set(46, 12, 'f'); g.set(47, 15, 'f'); g.set(44, 17, 'E');

      // --- lean standing body ---
      g.ball(27, 32, 12, 9, 'b', 'l', 's');

      // --- legs, ember paws ---
      g.line(18, 37, 18, 44, 'b', 3);
      g.line(26, 38, 26, 45, 'b', 3);
      g.line(34, 37, 34, 44, 's', 3);
      g.set(17, 45, 'e'); g.set(18, 45, 'e');
      g.set(25, 46, 'e'); g.set(26, 46, 'e');

      // --- FIRE CREST on the crown (drawn before ears/head so flames rise) ---
      g.ellipse(16, 6, 3, 4, 'e'); g.ellipse(16, 3, 2, 3, 'f'); g.set(16, 0, 'f');
      g.set(13, 5, 'e'); g.set(19, 5, 'e'); g.set(19, 3, 'f'); g.set(13, 3, 'f');
      // --- rounded ears (kept, as the panther line was approved), with fire tufts ---
      g.ellipse(10, 8, 4, 4, 'b'); g.ellipse(23, 7, 4, 4, 'b');
      g.set(10, 8, 'e'); g.set(11, 8, 'e'); g.set(23, 7, 'e'); g.set(24, 7, 'e');
      g.set(9, 4, 'e'); g.set(9, 2, 'f');           // left ear fire tuft
      g.set(24, 3, 'e'); g.set(24, 1, 'f');         // right ear fire tuft

      // --- head, low and forward ---
      g.ball(16, 16, 10, 9, 'b', 'l', 's');
      g.ellipse(12, 21, 5, 4, 'm');                 // pale muzzle

      g.outline('o');
      g.seam(['m'], ['b', 'l', 's'], 's');
      g.seam(['e', 'f', 'E'], ['b', 'l', 's'], 'o'); // flames read against the fur

      // --- fierce amber eyes under a sharp brow ---
      g.line(8, 11, 14, 11, 'o', 1);
      g.eyeAlmond(9, 12, 6, 4);
      g.eyeAlmond(18, 12, 6, 4);
      g.set(11, 20, 'o'); g.set(12, 20, 'o');       // nose
      g.line(11, 24, 14, 25, 'o', 1);

      // --- ember stripe markings on the flank ---
      g.line(24, 30, 27, 30, 'e', 1);
      g.line(28, 34, 32, 34, 'e', 1);
      g.set(22, 36, 'f');
    },
    back(g) {
      g.line(42, 22, 47, 12, 'b', 2);
      g.ellipse(47, 8, 4, 5, 'e'); g.ellipse(47, 7, 2, 3, 'f');
      // flame mane along the back ridge
      g.ellipse(24, 13, 3, 3, 'e'); g.set(24, 10, 'f');
      g.ellipse(30, 15, 3, 3, 'e'); g.set(30, 12, 'f');
      g.ball(28, 26, 14, 11, 'b', 'l', 's');
      g.ellipse(17, 6, 4, 4, 'b'); g.ellipse(34, 5, 4, 4, 'b');
      g.set(17, 6, 'e'); g.set(34, 5, 'e');
      g.ball(26, 14, 11, 9, 'b', 'l', 's');
      g.outline('o');
      g.seam(['e', 'f'], ['b', 'l', 's'], 'o');
      g.set(23, 28, 'e'); g.set(24, 28, 'e');
      g.set(27, 32, 'e'); g.set(28, 32, 'e');
    }
  }
};
