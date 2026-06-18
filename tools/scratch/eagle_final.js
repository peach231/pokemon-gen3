// EAGLE line — direction "eagle_b" (CHOSEN): DYNAMIC SIDE-3/4 RIVER RAPTOR.
// aquilet -> streagle -> torrentalon
// Reworked per feedback:
//   - VISIBLE fierce AMBER eye on every stage (gold iris, dark pupil, glint)
//   - stages clearly differentiated:
//       aquilet   = baby: single tuft crest, small folded wing, simple
//       streagle  = teen: FORKED crest, long STREAMER tail, white eagle brow
//       torrentalon = adult: BALD-EAGLE white head, crown crest, neck ruff,
//                     wings thrown wide (flying type)

module.exports = {
  // ===================================================== STAGE 1: AQUILET ===
  aquilet: {
    pal: {
      o: 'ink', b: 'blu1', d: 'blu0', l: 'blu2', h: 'blu3',
      w: 'white', p: 'pale', i: 'ice2', I: 'ice3',
      y: 'org2', Y: 'org3', A: 'yel2', t: 'yel1', K: 'white'
    },
    draw(g) {
      // baby river eaglet — small, downy, fierce-eyed
      // --- tail: small layered wedge, set low ---
      g.tri(29, 37, 40, 41, 30, 45, 'd');
      g.line(32, 39, 38, 42, 'l', 1);

      // --- body ---
      g.ball(23, 31, 11, 11, 'b', 'l', 'd');

      // --- head on the chest, slight forward lean ---
      g.ball(16, 15, 10, 9, 'b', 'l', 'd');
      // single short crest tuft swept up-back
      g.line(19, 9, 24, 6, 'd', 3); g.set(25, 6, 'd');
      g.line(19, 8, 23, 6, 'l', 1);

      // --- white throat + chest bib ---
      g.ellipse(15, 28, 6, 8, 'w');
      g.ellipse(13, 19, 4, 4, 'w');
      g.tri(11, 33, 15, 33, 12, 38, 'w');
      g.tri(16, 33, 20, 33, 17, 38, 'w');
      g.set(15, 26, 'i'); g.set(16, 26, 'i'); g.set(15, 27, 'i');

      // --- folded wing ---
      g.ellipse(28, 28, 4, 7, 'd');
      g.ellipse(28, 25, 3, 3, 'b');
      g.line(25, 23, 30, 22, 'l', 1);
      g.line(25, 32, 31, 29, 'l', 1);
      g.line(26, 37, 31, 34, 'l', 1);
      g.set(30, 40, 'd'); g.set(29, 41, 'd');

      // --- legs + talons ---
      g.line(14, 41, 14, 44, 'd', 3);
      g.line(24, 42, 24, 45, 'd', 3);
      g.rect(11, 44, 7, 2, 'y');
      g.rect(21, 45, 7, 2, 'y');
      g.set(11, 46, 'Y'); g.set(14, 46, 'Y'); g.set(17, 46, 'Y');
      g.set(21, 47, 'Y'); g.set(24, 47, 'Y'); g.set(27, 47, 'Y');

      // --- hooked beak ---
      g.tri(4, 13, 12, 11, 12, 17, 'y');
      g.set(4, 15, 'Y'); g.set(5, 16, 'Y'); g.set(6, 16, 'y');

      g.outline('o');
      g.seam(['d'], ['b', 'l'], 'o');
      g.seam(['w'], ['b', 'l', 'd'], 'd');
      g.seam(['y', 'Y'], ['w', 'b', 'l'], 'o');

      // --- UNMISTAKABLE eye: big WHITE eyeball + bold black pupil + brow ---
      g.ellipse(11, 13, 4, 3.6, 'o');           // ink socket
      g.ellipse(11, 13, 3, 2.8, 'w');           // WHITE eyeball (pops on navy)
      g.ellipse(10, 13.5, 1.7, 1.8, 'o');       // big black pupil
      g.set(12, 11, 'A'); g.set(13, 12, 'A');   // amber eagle fleck
      g.line(6, 9, 15, 9, 'o', 1);              // heavy fierce brow
      g.set(15, 10, 'o');
    },
    back(g) {
      g.ball(27, 24, 14, 14, 'b', 'l', 'd');
      g.ellipse(27, 9, 4, 3, 'd');
      g.ellipse(25, 6, 2, 2, 'l');
      g.ellipse(15, 28, 5, 8, 'd');
      g.ellipse(39, 28, 5, 8, 'd');
      g.tri(22, 36, 28, 36, 24, 44, 'd');
      g.tri(28, 36, 34, 36, 31, 44, 'b');
      g.outline('o');
      g.seam(['d'], ['b', 'l'], 'o');
      g.line(13, 24, 17, 28, 'b', 1);
      g.line(37, 24, 41, 28, 'b', 1);
    }
  },

  // ==================================================== STAGE 2: STREAGLE ===
  streagle: {
    pal: {
      o: 'ink', b: 'blu1', d: 'blu0', l: 'blu2', h: 'blu3',
      w: 'white', p: 'pale', i: 'ice2', I: 'ice3',
      y: 'org2', Y: 'org3', A: 'yel2', t: 'yel1', K: 'white'
    },
    draw(g) {
      // leaner, faster "stream-eagle": forked crest, long streamer tail, white brow
      // --- streamer tail: layered base + a LONG central streamer ---
      g.tri(30, 37, 40, 41, 31, 46, 'd');        // tail base fan
      g.line(37, 39, 48, 45, 'd', 3);            // long streamer
      g.line(46, 43, 53, 48, 'd', 2);            // streamer taper
      g.set(53, 48, 'l');
      g.line(38, 40, 47, 45, 'l', 1);            // streamer highlight

      // --- leaner, taller body ---
      g.ball(24, 31, 11, 13, 'b', 'l', 'd');

      // --- head ---
      g.ball(17, 14, 10, 9, 'b', 'l', 'd');
      // forked crest: two swept plumes
      g.line(20, 7, 28, 3, 'd', 3); g.set(29, 3, 'd'); g.set(30, 4, 'd');
      g.line(21, 9, 27, 6, 'd', 2); g.set(28, 6, 'd');
      g.line(20, 6, 27, 3, 'l', 1);

      // --- white bib ---
      g.ellipse(15, 29, 7, 9, 'w');
      g.ellipse(12, 19, 4, 4, 'w');
      g.tri(9, 35, 14, 35, 11, 41, 'w');
      g.tri(15, 35, 20, 35, 17, 41, 'w');
      g.set(15, 26, 'i'); g.set(16, 26, 'i'); g.set(15, 27, 'i'); g.set(16, 27, 'i');

      // --- folded wing: 3 stepped primaries ---
      g.ellipse(30, 29, 5, 9, 'd');
      g.ellipse(30, 24, 4, 4, 'b');
      g.line(26, 21, 33, 20, 'l', 1);
      g.line(26, 30, 34, 27, 'l', 1);
      g.line(27, 34, 34, 31, 'l', 1);
      g.line(28, 38, 34, 35, 'l', 1);
      g.set(33, 41, 'd'); g.set(32, 42, 'd');

      // --- bigger hooked beak ---
      g.tri(3, 12, 12, 10, 12, 18, 'y');
      g.set(3, 15, 'Y'); g.set(4, 16, 'Y'); g.set(5, 17, 'Y'); g.set(6, 16, 'y');

      // --- legs + talons ---
      g.line(14, 42, 14, 45, 'd', 3);
      g.line(25, 43, 25, 46, 'd', 3);
      g.rect(11, 45, 8, 2, 'y');
      g.rect(22, 46, 8, 2, 'y');
      g.set(11, 47, 'Y'); g.set(15, 47, 'Y'); g.set(18, 47, 'Y');
      g.set(22, 48, 'Y'); g.set(26, 48, 'Y'); g.set(29, 48, 'Y');

      g.outline('o');
      g.seam(['d'], ['b', 'l'], 'o');
      g.seam(['w'], ['b', 'l', 'd'], 'd');
      g.seam(['y', 'Y'], ['w', 'b', 'l'], 'o');

      // --- UNMISTAKABLE eye: big WHITE eyeball + bold black pupil + brow ---
      g.ellipse(11, 12, 4, 3.6, 'o');           // ink socket
      g.ellipse(11, 12, 3, 2.8, 'w');           // WHITE eyeball
      g.ellipse(10, 12.5, 1.7, 1.8, 'o');       // big black pupil
      g.set(12, 10, 'A'); g.set(13, 11, 'A');   // amber eagle fleck
      g.line(6, 8, 15, 8, 'o', 1);              // heavy fierce brow
      g.set(15, 9, 'o');
    },
    back(g) {
      g.ball(28, 24, 16, 15, 'b', 'l', 'd');
      g.ellipse(28, 8, 4, 3, 'd');
      g.ellipse(26, 4, 2, 2, 'l');
      g.ellipse(14, 27, 5, 10, 'd');
      g.ellipse(42, 27, 5, 10, 'd');
      g.tri(22, 37, 28, 37, 24, 46, 'd');
      g.line(28, 39, 36, 48, 'd', 2);            // streamer on the back too
      g.outline('o');
      g.seam(['d'], ['b', 'l'], 'o');
      g.line(12, 23, 16, 28, 'b', 1);
      g.line(40, 23, 44, 28, 'b', 1);
    }
  },

  // ================================================= STAGE 3: TORRENTALON ===
  torrentalon: {
    w: 56, h: 56,
    pal: {
      o: 'ink', b: 'blu0', d: 'blu0', l: 'blu1', h: 'blu2',
      w: 'white', p: 'pale', i: 'ice2', I: 'ice3',
      y: 'org2', Y: 'org3', A: 'yel2', t: 'yel1', K: 'white'
    },
    draw(g) {
      // FLYING adult: bald-eagle white head, crown crest, neck ruff, wings wide.
      // --- left wing (up-out) ---
      g.tri(22, 24, 3, 18, 7, 32, 'l'); g.tri(7, 32, 22, 24, 22, 34, 'l');
      g.tri(3, 18, 7, 32, 14, 38, 'd'); g.tri(7, 32, 14, 38, 22, 34, 'd');
      g.line(8, 24, 20, 28, 'h', 1); g.line(6, 30, 17, 33, 'h', 1); g.line(9, 34, 18, 36, 'h', 1);
      // --- right wing (mirror) ---
      g.tri(34, 24, 53, 18, 49, 32, 'l'); g.tri(49, 32, 34, 24, 34, 34, 'l');
      g.tri(53, 18, 49, 32, 42, 38, 'd'); g.tri(49, 32, 42, 38, 34, 34, 'd');
      g.line(36, 28, 48, 24, 'h', 1); g.line(39, 33, 49, 30, 'h', 1); g.line(38, 36, 46, 34, 'h', 1);

      // --- tail plume (long, layered) ---
      g.tri(22, 45, 34, 45, 28, 55, 'd');
      g.line(26, 47, 26, 54, 'b', 1); g.line(30, 47, 30, 54, 'b', 1);
      g.line(28, 47, 28, 55, 'l', 1);

      // --- body ---
      g.ball(28, 33, 12, 13, 'b', 'l', 'd');

      // --- white chest bib ---
      g.ellipse(28, 33, 7, 10, 'w'); g.ellipse(28, 22, 5, 4, 'w');
      g.tri(23, 41, 28, 41, 25, 47, 'w'); g.tri(28, 41, 33, 41, 31, 47, 'w');
      g.set(27, 30, 'i'); g.set(28, 30, 'i'); g.set(29, 30, 'i'); g.set(28, 31, 'i');

      // --- neck ruff: scalloped navy feather collar where head meets chest ---
      g.ellipse(23, 25, 3, 2, 'd'); g.ellipse(28, 26, 3, 2, 'd'); g.ellipse(33, 25, 3, 2, 'd');

      // --- head (navy crown) ---
      g.ball(28, 15, 11, 10, 'b', 'l', 'd');
      // bald-eagle WHITE head/face over the front
      g.ellipse(25, 16, 7, 7, 'w');
      g.ellipse(21, 18, 3, 3, 'w');
      // crown crest: 3 swept feathers from the navy back-crown
      g.line(33, 8, 41, 4, 'd', 3); g.set(42, 4, 'd'); g.set(43, 5, 'd');
      g.line(34, 10, 42, 7, 'd', 2); g.set(43, 7, 'd');
      g.line(33, 11, 40, 10, 'd', 2); g.set(41, 10, 'd');
      g.line(33, 7, 40, 4, 'l', 1);

      // --- hooked beak from the white face ---
      g.tri(13, 15, 23, 13, 23, 20, 'y');
      g.set(13, 17, 'Y'); g.set(14, 18, 'Y'); g.set(15, 17, 'y');

      // --- legs + talons gripping ---
      g.line(24, 44, 24, 50, 'd', 4); g.line(33, 44, 33, 50, 'd', 4);
      g.rect(20, 50, 8, 2, 'y'); g.rect(30, 50, 8, 2, 'y');
      g.set(20, 52, 'Y'); g.set(24, 52, 'Y'); g.set(27, 52, 'Y');
      g.set(30, 52, 'Y'); g.set(34, 52, 'Y'); g.set(37, 52, 'Y');

      g.outline('o');
      g.seam(['d'], ['l', 'b'], 'd');
      g.seam(['l'], ['b'], 'd');
      g.seam(['w'], ['b', 'l', 'd'], 'd');
      g.seam(['y', 'Y'], ['w', 'b', 'l'], 'o');

      // --- bold eye on the white face: amber iris + big black pupil + brow ---
      g.ellipse(21, 15, 3.6, 3.2, 'o');         // ink socket
      g.ellipse(21, 15, 2.6, 2.4, 'A');         // amber iris (reads on white face)
      g.ellipse(20, 15.5, 1.7, 1.8, 'o');       // big black pupil
      g.set(22, 13, 'K');                        // glint
      g.line(16, 13, 24, 11, 'o', 1);           // heavy fierce brow
      g.set(24, 11, 'o');
    },
    back(g) {
      g.ball(28, 26, 16, 15, 'b', 'l', 'd');
      g.tri(20, 16, 4, 28, 18, 34, 'd');
      g.tri(36, 16, 52, 28, 38, 34, 'd');
      g.ellipse(28, 9, 4, 3, 'd');
      g.tri(22, 38, 28, 38, 24, 48, 'd');
      g.tri(28, 38, 34, 38, 31, 48, 'b');
      g.outline('o');
      g.seam(['d'], ['b', 'l'], 'o');
      g.line(10, 26, 18, 30, 'b', 1);
      g.line(38, 26, 46, 30, 'b', 1);
    }
  }
};
