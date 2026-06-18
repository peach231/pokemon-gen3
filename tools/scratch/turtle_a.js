// TURTLE line — direction "turtle_a": SQUIRTLE BIPED grass-turtle.
// sproutle (stage1, cute) -> verdoise (stage2, taller/sturdier) ->
// gaiadome (stage3, GROUND type, heavy/earthen, rocky-mossy shell).
//
// Core silhouette DNA shared across all 3 stages:
//   - big ROUND head sitting STRAIGHT on a shell-torso (fused, no gap)
//   - cream plastron on the front framed by a brown shell rim
//   - two stubby green arms in FRONT of the shell
//   - two splayed feet at the bottom
//   - small curly tail peeking out at the side
//   - grass cue = a leaf on the head/crown
// Slight 3/4 front view.

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
      // shell rim arc (pale trim along the lower shell edge)
      g.ring(23, 35, 12, 10, 'w', 0.2, 16, 164);
      // cream plastron over the front of the shell
      g.ellipse(21, 36, 7, 7, 'w');
      g.line(17, 38, 26, 38, 'v', 1);            // plastron belly seam
      // --- big round head fused directly onto the shell (overlap so no gap) ---
      g.ball(19, 18, 11, 10, 'g', 'h', 'e');
      // cheek bulges so the head isn't a pure circle
      g.ellipse(9, 22, 3, 3, 'g');
      g.ellipse(28, 22, 3, 3, 'e');
      // --- stubby arms IN FRONT of the shell, thick rounded strokes ---
      g.line(15, 31, 11, 37, 'h', 4);            // near arm (lighter to pop)
      g.line(31, 32, 35, 36, 'e', 4);            // far arm (short stub)
      g.ellipse(35, 37, 2, 2, 'e');              // far hand
      // --- one leaf resting on the crown: short stem + rounded blade ---
      g.line(21, 11, 24, 7, 'e', 2);             // short green stem
      g.ellipse(27, 6, 5, 3, 'f');               // leaf blade (rounded oval)
      g.set(31, 4, 'f'); g.set(32, 4, 'F');      // pointed tip
      g.line(23, 7, 30, 5, 'F', 1);              // bright midrib vein
      g.outline('o');
      // seams so head/plastron/arms/leaf read as separate parts on the body
      g.seam(['w', 'v'], ['s', 't', 'u'], 'o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u', 'w'], 'o');
      g.seam(['h', 'e'], ['w', 'v'], 'o');       // arms over plastron
      g.seam(['f', 'F'], ['g', 'h', 'e'], 'o');
      // --- SMALL cute eyes, nostrils, grin ---
      g.eye(11, 14, 4, 4);
      g.eye(21, 14, 4, 4);
      g.set(15, 19, 'o'); g.set(17, 19, 'o');    // nostrils
      g.line(13, 22, 19, 22, 'o', 1);            // grin
      g.set(12, 21, 'o'); g.set(20, 21, 'o');    // upturned corners
    },
    back(g) {
      // rear: dominant shell dome with concentric plate rings, head peeking
      // over the top with the crown leaf, arm/foot stubs, curly tail
      g.ellipse(22, 38, 4, 3, 'g');              // feet
      g.ellipse(34, 38, 4, 3, 'g');
      g.line(40, 34, 45, 35, 'g', 3);            // curly tail
      g.line(45, 35, 47, 31, 'g', 2);
      g.set(47, 30, 'h');
      g.ball(28, 27, 14, 12, 's', 'u', 't');     // big shell dome
      g.ring(28, 28, 11, 9, 't', 0.18);          // outer plate ring
      g.ring(28, 28, 6, 5, 't', 0.3);            // inner plate ring
      g.ellipse(13, 28, 3, 4, 'g');              // arm stubs at sides
      g.ellipse(43, 28, 3, 4, 'e');
      g.ball(28, 13, 11, 9, 'g', 'h', 'e');      // head over the top
      g.line(26, 7, 29, 3, 'e', 2);              // leaf stem
      g.ellipse(32, 2, 5, 3, 'f');               // crown leaf
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
      // taller, sturdier: bigger shell, broader shoulders, double crown leaf
      // --- feet (wider stance) ---
      g.ellipse(14, 44, 5, 3, 'g');
      g.ellipse(33, 44, 5, 3, 'g');
      g.set(10, 45, 'd'); g.set(11, 45, 'd'); g.set(12, 45, 'd');
      g.set(36, 45, 'd'); g.set(37, 45, 'd'); g.set(38, 45, 'd');
      // --- curly tail: rooted inside the shell, tight chunky curl ---
      g.line(34, 42, 41, 43, 'g', 4);            // base inside body
      g.line(41, 43, 45, 40, 'g', 3);            // tight curl up
      g.set(45, 38, 'h'); g.set(44, 37, 'h');    // chunky tip
      // --- big shell torso ---
      g.ball(24, 35, 14, 12, 's', 'u', 't');
      g.ring(24, 35, 14, 12, 'w', 0.18, 14, 166);  // rim trim
      g.ellipse(22, 37, 8, 8, 'w');               // plastron
      g.line(16, 40, 27, 40, 'v', 1);             // belly plate seams
      g.line(17, 43, 26, 43, 'v', 1);
      // --- bigger head fused on shell (lower overlap so no neck gap) ---
      g.ball(20, 18, 12, 11, 'g', 'h', 'e');
      g.ellipse(9, 22, 3, 4, 'g');                // cheeks
      g.ellipse(30, 22, 3, 4, 'e');
      // --- sturdier arms with little claws, in front of plastron ---
      g.line(14, 31, 9, 38, 'h', 4);              // near arm (lighter to pop)
      g.line(33, 32, 38, 37, 'e', 4);             // far arm (short stub)
      g.ellipse(38, 38, 2, 2, 'e');               // far hand
      g.set(8, 39, 'o'); g.set(9, 39, 'o');       // claw hints near hand
      // --- double crown leaf: short stem + two rounded blades ---
      g.line(20, 12, 23, 8, 'e', 2);              // stem
      g.ellipse(26, 6, 5, 3, 'f');                // main leaf blade
      g.set(30, 4, 'f'); g.set(31, 4, 'F');       // tip
      g.ellipse(30, 9, 4, 2, 'f');                // second smaller leaf
      g.set(33, 8, 'F');
      g.line(22, 7, 29, 5, 'L', 1);               // midrib vein
      g.outline('o');
      g.seam(['w', 'v'], ['s', 't', 'u'], 'o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u', 'w'], 'o');
      g.seam(['h', 'e'], ['w', 'v'], 'o');        // arms over plastron
      g.seam(['f', 'F', 'L'], ['g', 'h', 'e'], 'o');
      // --- small determined eyes (slight brow) ---
      g.eye(11, 14, 4, 5);
      g.eye(22, 14, 4, 5);
      g.line(10, 13, 14, 12, 'o', 1);             // brow strokes
      g.line(21, 12, 25, 13, 'o', 1);
      g.set(16, 20, 'o'); g.set(18, 20, 'o');     // nostrils
      g.line(14, 23, 20, 23, 'o', 1);             // mouth
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
  gaiadome: {
    w: 56, h: 56,
    pal: {
      o: 'ink',
      g: 'leaf0', h: 'leaf1', e: 'grn0', d: 'grn0',   // deep mossy greens
      s: 'brn0', u: 'brn1', t: 'brn0',                 // earthen shell
      w: 'tan0', v: 'brn2',                            // plastron
      m: 'grn1', M: 'grn2',                            // moss patches
      k: 'stn1', K2: 'stn2', kd: 'stn0',               // rocks
      f: 'grn1', F: 'grn2', L: 'grn3',                 // leaf crown
      K: 'white'
    },
    draw(g) {
      // heavy, imposing, earthen. Wide low stance. The shell-torso is the
      // dominant mass; its upper/back portion is a rocky-mossy dome that
      // rises BEHIND the shoulders, head fused onto the shell front.
      // --- thick splayed feet ---
      g.ellipse(16, 51, 6, 4, 'g');
      g.ellipse(40, 51, 6, 4, 'g');
      g.set(10, 53, 'o'); g.set(12, 53, 'o'); g.set(14, 53, 'o'); // toe claws
      g.set(42, 53, 'o'); g.set(44, 53, 'o'); g.set(46, 53, 'o');
      // --- heavy curly tail: rooted inside the shell, tight chunky curl ---
      g.line(41, 47, 49, 48, 'g', 5);            // thick base inside body
      g.line(49, 48, 53, 44, 'g', 4);            // tight curl up
      g.set(53, 42, 'h'); g.set(52, 41, 'h');    // chunky tip
      // --- ONE massive shell-torso: tall brown dome (the carapace) ---
      g.ball(28, 34, 18, 17, 's', 'u', 't');
      // rocky plates embedded across the UPPER shell (the dome back) — muted
      // stone, no stark highlight (use base+dark only so it reads as earth)
      g.ball(28, 25, 16, 8, 'k', null, 'kd');       // rock cap on shell top
      g.ellipse(18, 27, 4, 3, 'kd'); g.ellipse(38, 27, 4, 3, 'kd'); // side plates
      g.set(22, 24, 'K2'); g.set(34, 23, 'K2');     // tiny stone glints only
      // moss BLANKETING most of the rock cap (so it reads mossy, not bald)
      g.ellipse(28, 22, 8, 3, 'm');                 // big moss band on crown
      g.ellipse(20, 24, 5, 2, 'M'); g.ellipse(36, 24, 5, 2, 'M');
      g.ellipse(28, 26, 6, 2, 'm'); g.ellipse(13, 27, 3, 2, 'm');
      g.ellipse(43, 27, 3, 2, 'm'); g.set(24, 20, 'M'); g.set(33, 20, 'M');
      // --- shell rim + cream plastron on the lower front ---
      g.ring(28, 40, 18, 13, 'w', 0.16, 18, 162);   // rim trim (lower arc)
      g.ellipse(27, 42, 9, 8, 'w');                 // plastron
      g.line(20, 45, 34, 45, 'v', 1);               // belly plates
      g.line(21, 49, 33, 49, 'v', 1);
      // --- big head fused onto the shell front (overlaps the carapace) ---
      g.ball(23, 22, 13, 12, 'g', 'h', 'e');
      g.ellipse(11, 26, 4, 4, 'g'); g.ellipse(35, 26, 4, 4, 'e'); // jowls
      // --- heavy arms with claws, in front of the plastron ---
      g.line(15, 36, 9, 44, 'h', 5);                // near arm (lighter)
      g.line(40, 37, 46, 43, 'e', 5);               // far arm (short stub)
      g.ellipse(46, 44, 3, 2, 'e');                 // far hand
      g.set(8, 45, 'o'); g.set(9, 46, 'o'); g.set(10, 46, 'o'); // claws
      g.set(47, 44, 'o'); g.set(48, 45, 'o');
      // small craggy brow bumps over the eyes (ground cue, NOT black eyes)
      g.ellipse(15, 16, 2, 1, 'k'); g.ellipse(30, 16, 2, 1, 'k');
      // --- lush crown leaf cluster: stem + three rounded blades ---
      g.line(22, 13, 25, 9, 'e', 2);                // stem rooting into head
      g.ellipse(28, 7, 6, 3, 'f');                  // big main leaf blade
      g.set(33, 5, 'f'); g.set(34, 5, 'F');         // tip
      g.ellipse(20, 9, 4, 2, 'f');                  // left leaf
      g.set(16, 8, 'F');
      g.ellipse(27, 11, 4, 2, 'f');                 // lower fan leaf
      g.set(31, 12, 'F');
      g.line(23, 8, 32, 6, 'L', 1);                 // midrib vein
      g.outline('o');
      g.seam(['w', 'v'], ['s', 't', 'u'], 'o');
      g.seam(['k', 'kd', 'K2'], ['s', 't', 'u'], 'o'); // rocks read on the shell
      g.seam(['m', 'M'], ['k', 'kd', 'K2', 's', 't', 'u'], 'o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u', 'w', 'k', 'kd', 'K2'], 'o');
      g.seam(['h', 'e'], ['w', 'v'], 'o');          // arms over plastron
      g.seam(['f', 'F', 'L'], ['g', 'h', 'e', 'k', 'kd', 'K2'], 'o');
      // --- small fierce eyes under rocky brow ---
      g.eye(13, 20, 5, 4);
      g.eye(27, 20, 5, 4);
      g.line(12, 19, 17, 18, 'o', 1);
      g.line(26, 18, 31, 19, 'o', 1);
      g.set(20, 26, 'o'); g.set(22, 26, 'o');       // nostrils
      g.line(17, 29, 26, 29, 'o', 1);               // strong mouth
    },
    back(g) {
      g.ball(28, 30, 19, 15, 's', 'u', 't');
      g.ring(28, 30, 13, 11, 't', 0.3);
      g.ball(30, 18, 13, 8, 'k', 'K2', 'k');        // rocky dome
      g.ellipse(22, 17, 4, 3, 'M'); g.ellipse(38, 18, 4, 3, 'm');
      g.ball(28, 14, 13, 10, 'g', 'h', 'e');        // head
      g.ellipse(26, 5, 6, 3, 'f'); g.ellipse(32, 7, 4, 2, 'F');
      g.ellipse(11, 33, 4, 5, 'g'); g.ellipse(45, 33, 4, 5, 'g');
      g.ellipse(18, 46, 6, 4, 'g'); g.ellipse(38, 46, 6, 4, 'g');
      g.line(46, 38, 51, 33, 'g', 4);
      g.outline('o');
      g.seam(['k', 'K2', 'm', 'M'], ['s', 't', 'u', 'g', 'h', 'e'], 'o');
      g.seam(['g', 'h', 'e'], ['s', 't', 'u'], 'o');
      g.seam(['f', 'F'], ['g', 'h', 'e', 'k', 'K2'], 'o');
    }
  }
};
