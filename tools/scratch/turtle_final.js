// TURTLE line — direction "turtle_a" (CHOSEN): SQUIRTLE BIPED grass-turtle.
// sproutle (stage1) -> verdoise (stage2) -> gaiadome (stage3, GROUND type).
// gaiadome rebuilt SAFE: a clean, sturdy scaled-up Verdoise — round head above a
// single clean domed shell, lush leaf crown, a couple of clean rock studs.

module.exports = {
  // ============================================================ SPROUTLE ===
  sproutle: {
    pal: {
      o: 'ink',
      g: 'leaf2', h: 'leaf3', e: 'leaf1', d: 'leaf0', // skin greens
      s: 'brn2', u: 'brn3', t: 'brn1',                // shell browns
      w: 'tan1', v: 'tan0',                           // plastron cream
      f: 'grn2', F: 'grn3',                           // crown leaf
      K: 'white'
    },
    draw(g) {
      // --- splayed feet (drawn first, sit under the shell) ---
      g.ellipse(16, 43, 4, 3, 'g');
      g.ellipse(30, 43, 4, 3, 'g');
      g.set(13, 44, 'd'); g.set(14, 44, 'd');   // toe shadow hints
      g.set(33, 44, 'd'); g.set(34, 44, 'd');
      // --- curly tail: rooted inside the shell, tight chunky curl ---
      g.line(32, 40, 38, 41, 'g', 4);            // base inside body
      g.line(38, 41, 41, 38, 'g', 3);            // tight curl up
      g.set(41, 36, 'h'); g.set(40, 35, 'h');    // chunky 2px tip
      // --- shell torso: one solid brown mass; head fuses on top of it ---
      g.ball(23, 35, 12, 10, 's', 'u', 't');
      g.ring(23, 35, 12, 10, 'w', 0.2, 16, 164);
      g.ellipse(21, 36, 7, 7, 'w');
      g.line(17, 38, 26, 38, 'v', 1);            // plastron belly seam
      // --- big round head fused directly onto the shell (overlap so no gap) ---
      g.ball(19, 18, 11, 10, 'g', 'h', 'e');
      g.ellipse(9, 22, 3, 3, 'g');
      g.ellipse(28, 22, 3, 3, 'e');
      // --- stubby arms IN FRONT of the shell, thick rounded strokes ---
      g.line(15, 31, 11, 37, 'h', 4);            // near arm (lighter to pop)
      g.line(31, 32, 35, 36, 'e', 4);            // far arm (short stub)
      g.ellipse(35, 37, 2, 2, 'e');              // far hand
      // --- one leaf resting on the crown: short stem + rounded blade ---
      g.line(21, 11, 24, 7, 'e', 2);
      g.ellipse(27, 6, 5, 3, 'f');
      g.set(31, 4, 'f'); g.set(32, 4, 'F');
      g.line(23, 7, 30, 5, 'F', 1);
      g.outline('o');
      g.seam(['w', 'v'], ['s', 't', 'u'], 'o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u', 'w'], 'o');
      g.seam(['h', 'e'], ['w', 'v'], 'o');
      g.seam(['f', 'F'], ['g', 'h', 'e'], 'o');
      // --- SMALL cute eyes, nostrils, grin ---
      g.eye(11, 14, 4, 4);
      g.eye(21, 14, 4, 4);
      g.set(15, 19, 'o'); g.set(17, 19, 'o');
      g.line(13, 22, 19, 22, 'o', 1);
      g.set(12, 21, 'o'); g.set(20, 21, 'o');
    },
    back(g) {
      g.ellipse(22, 38, 4, 3, 'g');
      g.ellipse(34, 38, 4, 3, 'g');
      g.line(40, 34, 45, 35, 'g', 3);
      g.line(45, 35, 47, 31, 'g', 2);
      g.set(47, 30, 'h');
      g.ball(28, 27, 14, 12, 's', 'u', 't');
      g.ring(28, 28, 11, 9, 't', 0.18);
      g.ring(28, 28, 6, 5, 't', 0.3);
      g.ellipse(13, 28, 3, 4, 'g');
      g.ellipse(43, 28, 3, 4, 'e');
      g.ball(28, 13, 11, 9, 'g', 'h', 'e');
      g.line(26, 7, 29, 3, 'e', 2);
      g.ellipse(32, 2, 5, 3, 'f');
      g.set(36, 1, 'F');
      g.outline('o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u'], 'o');
      g.seam(['f', 'F'], ['g', 'h', 'e'], 'o');
    }
  },

  // ============================================================ VERDOISE ===
  verdoise: {
    pal: {
      o: 'ink',
      g: 'leaf1', h: 'leaf2', e: 'leaf0', d: 'grn0', // deeper greens
      s: 'brn1', u: 'brn2', t: 'brn0',                // darker shell
      w: 'tan0', v: 'brn3',                           // plastron
      f: 'grn1', F: 'grn2', L: 'grn3',                // leaf crown
      K: 'white'
    },
    draw(g) {
      g.ellipse(14, 44, 5, 3, 'g');
      g.ellipse(33, 44, 5, 3, 'g');
      g.set(10, 45, 'd'); g.set(11, 45, 'd'); g.set(12, 45, 'd');
      g.set(36, 45, 'd'); g.set(37, 45, 'd'); g.set(38, 45, 'd');
      g.line(34, 42, 41, 43, 'g', 4);
      g.line(41, 43, 45, 40, 'g', 3);
      g.set(45, 38, 'h'); g.set(44, 37, 'h');
      g.ball(24, 35, 14, 12, 's', 'u', 't');
      g.ring(24, 35, 14, 12, 'w', 0.18, 14, 166);
      g.ellipse(22, 37, 8, 8, 'w');
      g.line(16, 40, 27, 40, 'v', 1);
      g.line(17, 43, 26, 43, 'v', 1);
      g.ball(20, 18, 12, 11, 'g', 'h', 'e');
      g.ellipse(9, 22, 3, 4, 'g');
      g.ellipse(30, 22, 3, 4, 'e');
      g.line(14, 31, 9, 38, 'h', 4);
      g.line(33, 32, 38, 37, 'e', 4);
      g.ellipse(38, 38, 2, 2, 'e');
      g.set(8, 39, 'o'); g.set(9, 39, 'o');
      g.line(20, 12, 23, 8, 'e', 2);
      g.ellipse(26, 6, 5, 3, 'f');
      g.set(30, 4, 'f'); g.set(31, 4, 'F');
      g.ellipse(30, 9, 4, 2, 'f');
      g.set(33, 8, 'F');
      g.line(22, 7, 29, 5, 'L', 1);
      g.outline('o');
      g.seam(['w', 'v'], ['s', 't', 'u'], 'o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u', 'w'], 'o');
      g.seam(['h', 'e'], ['w', 'v'], 'o');
      g.seam(['f', 'F', 'L'], ['g', 'h', 'e'], 'o');
      g.eye(11, 14, 4, 5);
      g.eye(22, 14, 4, 5);
      g.line(10, 13, 14, 12, 'o', 1);
      g.line(21, 12, 25, 13, 'o', 1);
      g.set(16, 20, 'o'); g.set(18, 20, 'o');
      g.line(14, 23, 20, 23, 'o', 1);
    },
    back(g) {
      g.ball(28, 28, 16, 13, 's', 'u', 't');
      g.ring(28, 28, 11, 9, 't', 0.3);
      g.ball(28, 13, 12, 10, 'g', 'h', 'e');
      g.ellipse(26, 4, 5, 3, 'f'); g.ellipse(32, 6, 4, 2, 'F');
      g.ellipse(13, 31, 3, 4, 'g'); g.ellipse(43, 31, 3, 4, 'g');
      g.ellipse(18, 42, 5, 3, 'g'); g.ellipse(38, 42, 5, 3, 'g');
      g.line(44, 35, 48, 31, 'g', 3);
      g.outline('o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u'], 'o');
      g.seam(['f', 'F'], ['g', 'h', 'e'], 'o');
    }
  },

  // ============================================================ GAIADOME ===
  // VERDOISE's exact model (the approved one), aged into the final form: a
  // SCARIER tusked grimace and EARTH worked into both the shell and the face.
  gaiadome: {
    pal: {
      o: 'ink',
      g: 'leaf1', h: 'leaf2', e: 'leaf0', d: 'grn0', // greens (= Verdoise)
      s: 'brn1', u: 'brn2', t: 'brn0',                // shell
      w: 'tan0', v: 'brn3',                           // plastron
      k: 'stn1', z: 'stn0',                           // earth / rock
      f: 'grn1', F: 'grn2', L: 'grn3',                // leaf crown
      K: 'white'
    },
    draw(g) {
      // --- Verdoise build: feet, tail, shell, plastron, head, arms, crown ---
      g.ellipse(14, 44, 5, 3, 'g');
      g.ellipse(33, 44, 5, 3, 'g');
      g.set(10, 45, 'd'); g.set(11, 45, 'd'); g.set(12, 45, 'd');
      g.set(36, 45, 'd'); g.set(37, 45, 'd'); g.set(38, 45, 'd');
      g.line(34, 42, 41, 43, 'g', 4);
      g.line(41, 43, 45, 40, 'g', 3);
      g.set(45, 38, 'h'); g.set(44, 37, 'h');
      g.ball(24, 35, 14, 12, 's', 'u', 't');
      g.ring(24, 35, 14, 12, 'w', 0.18, 14, 166);
      g.ellipse(22, 37, 8, 8, 'w');
      g.line(16, 40, 27, 40, 'v', 1);
      g.line(17, 43, 26, 43, 'v', 1);
      // EARTH on the shell: rock studs embedded in the carapace
      g.ball(31, 30, 3, 2, 'k', null, 'z');
      g.ball(19, 31, 2, 2, 'k', null, 'z');
      g.ball(34, 39, 2, 2, 'k', null, 'z');
      g.ball(27, 41, 2, 2, 'k', null, 'z');
      // head
      g.ball(20, 18, 12, 11, 'g', 'h', 'e');
      g.ellipse(9, 22, 3, 4, 'g');
      g.ellipse(30, 22, 3, 4, 'e');
      // EARTH on the face: craggy rock brow ridges + a jaw stone
      g.ellipse(10, 12, 3, 2, 'k');
      g.ellipse(25, 12, 3, 2, 'k');
      g.ball(29, 22, 2, 2, 'k', null, 'z');
      // arms
      g.line(14, 31, 9, 38, 'h', 4);
      g.line(33, 32, 38, 37, 'e', 4);
      g.ellipse(38, 38, 2, 2, 'e');
      g.set(8, 39, 'o'); g.set(9, 39, 'o');
      // leaf crown (double leaf, as Verdoise)
      g.line(20, 12, 23, 8, 'e', 2);
      g.ellipse(26, 6, 5, 3, 'f');
      g.set(30, 4, 'f'); g.set(31, 4, 'F');
      g.ellipse(30, 9, 4, 2, 'f');
      g.set(33, 8, 'F');
      g.line(22, 7, 29, 5, 'L', 1);
      g.outline('o');
      g.seam(['w', 'v'], ['s', 't', 'u'], 'o');
      g.seam(['k', 'z'], ['s', 't', 'u'], 'o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u', 'w', 'k', 'z'], 'o');
      g.seam(['k', 'z'], ['g', 'h', 'e'], 'o');     // face rocks read
      g.seam(['h', 'e'], ['w', 'v'], 'o');
      g.seam(['f', 'F', 'L'], ['g', 'h', 'e'], 'o');
      // --- SCARIER face: angry V brows, hard eyes, wide tusked grimace ---
      g.eye(11, 15, 4, 4);
      g.eye(22, 15, 4, 4);
      g.line(8, 13, 14, 15, 'o', 1);                // left brow down to center
      g.line(19, 15, 25, 13, 'o', 1);               // right brow down to center
      g.set(16, 20, 'o'); g.set(18, 20, 'o');       // nostrils
      g.line(13, 24, 21, 24, 'o', 1);               // wide grimace
      g.set(12, 23, 'o'); g.set(22, 23, 'o');       // raised snarl corners
      g.set(15, 25, 'w'); g.set(19, 25, 'w');       // small tusks
    },
    back(g) {
      g.ball(28, 28, 16, 13, 's', 'u', 't');
      g.ring(28, 28, 11, 9, 't', 0.3);
      g.ball(31, 22, 3, 2, 'k', null, 'z');         // rock stud
      g.ball(24, 24, 2, 2, 'k', null, 'z');
      g.ball(28, 13, 12, 10, 'g', 'h', 'e');
      g.ellipse(26, 4, 5, 3, 'f'); g.ellipse(32, 6, 4, 2, 'F');
      g.ellipse(13, 31, 3, 4, 'g'); g.ellipse(43, 31, 3, 4, 'g');
      g.ellipse(18, 42, 5, 3, 'g'); g.ellipse(38, 42, 5, 3, 'g');
      g.line(44, 35, 48, 31, 'g', 3);
      g.outline('o');
      g.seam(['k', 'z'], ['s', 't', 'u'], 'o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u'], 'o');
      g.seam(['f', 'F'], ['g', 'h', 'e'], 'o');
    }
  }
};
