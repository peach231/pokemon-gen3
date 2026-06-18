// EAGLE line — direction "eagle_c": ROWLET-STYLE ROUND RAPTOR
// aquilet (stage1) -> streagle (stage2) -> torrentalon (stage3, gains FLYING)
// Round owl-ish compact eaglet, front-facing, but unmistakably a bird of PREY.
// Blue + white + orange beak/talons + ice/cyan water accent.

module.exports = {
  // ---------------------------------------------------------------------------
  // STAGE 1 — AQUILET : small round raptor chick. One round body, head fused,
  // hooked orange beak, fierce brow, folded wings as side masses, yellow talons.
  // ---------------------------------------------------------------------------
  aquilet: {
    pal: {
      o: 'ink', b: 'blu1', l: 'blu2', d: 'blu0',   // body blue ramp
      w: 'white', g: 'lgry',                         // belly white + grey seam
      k: 'org1', y: 'org2', j: 'org0',               // beak orange (mid, lit, dark hook)
      t: 'yel1', z: 'yel0',                          // talons yellow
      c: 'ice2', K: 'white'                          // ice accent + glint
    },
    draw(g) {
      // talons first (behind body bottom)
      g.line(18, 41, 18, 44, 'z', 3); g.line(28, 41, 28, 44, 'z', 3);
      // round body (single dominant mass), feet near bottom
      g.ball(23, 28, 13, 14, 'b', 'l', 'd');
      // white belly oval cut into the front-lower body
      g.ball(23, 33, 8, 8, 'w', null, 'g');
      // folded wings: side masses hugging the body (NOT triangles)
      g.ellipse(11, 28, 5, 9, 'd'); g.ellipse(35, 28, 5, 9, 'd');
      // brow ridge / head crown blends into top of body (no neck)
      g.ball(23, 17, 11, 9, 'b', 'l', 'd');
      // HOOKED raptor beak: SOLID wedge curving to a down-hook point
      g.set(21, 21, 'y'); g.set(22, 21, 'y'); g.set(23, 21, 'y'); g.set(24, 21, 'y');
      g.set(21, 22, 'y'); g.set(22, 22, 'k'); g.set(23, 22, 'k'); g.set(24, 22, 'k');
      g.set(22, 23, 'k'); g.set(23, 23, 'k'); g.set(24, 23, 'j');
      g.set(23, 24, 'j');
      g.outline('o');
      // chest feather rows — scalloped concentric seams (raptor breast layering)
      g.seam(['w'], ['b', 'l', 'd'], 'g');
      // row 1 (scallop): dip at center
      g.set(18, 30, 'g'); g.set(19, 30, 'g'); g.set(20, 31, 'g'); g.set(21, 31, 'g');
      g.set(25, 31, 'g'); g.set(26, 31, 'g'); g.set(27, 30, 'g'); g.set(28, 30, 'g');
      // row 2
      g.set(19, 34, 'g'); g.set(20, 34, 'g'); g.set(21, 35, 'g'); g.set(22, 35, 'g');
      g.set(24, 35, 'g'); g.set(25, 35, 'g'); g.set(26, 34, 'g'); g.set(27, 34, 'g');
      // wing feather seams — short staggered overlapping-feather marks
      g.line(8, 25, 13, 24, 'l', 1); g.line(9, 30, 14, 29, 'l', 1); g.line(9, 35, 13, 34, 'l', 1);
      g.line(33, 24, 38, 25, 'l', 1); g.line(32, 29, 37, 30, 'l', 1); g.line(33, 34, 37, 35, 'l', 1);
      g.seam(['d'], ['b', 'l'], 'o');
      // fierce almond eyes under brow, angled slightly inward (raptor frown)
      g.eyeAlmond(15, 13, 6, 4); g.eyeAlmond(25, 13, 6, 4);
      g.set(20, 13, 'o'); g.set(27, 13, 'o'); // brow corners pulled in
      // nostril dot on cere (top of upper mandible)
      g.set(22, 21, 'k');
      // feet: small foot mass + claw dots
      g.rect(16, 44, 5, 2, 'z'); g.rect(26, 44, 5, 2, 'z');
      g.set(16, 46, 'o'); g.set(18, 46, 'o'); g.set(20, 46, 'o');
      g.set(26, 46, 'o'); g.set(28, 46, 'o'); g.set(30, 46, 'o');
      // ice/cyan throat marking under the beak (water-type cue)
      g.set(22, 25, 'c'); g.set(23, 25, 'c'); g.set(24, 25, 'c'); g.set(23, 26, 'c');
    },
    back(g) {
      g.ball(28, 24, 14, 15, 'b', 'l', 'd');
      g.ellipse(15, 24, 5, 10, 'd'); g.ellipse(41, 24, 5, 10, 'd');
      g.outline('o');
      // back feather rows
      g.line(20, 18, 36, 18, 'd', 1); g.line(20, 24, 36, 24, 'd', 1); g.line(20, 30, 36, 30, 'd', 1);
      g.line(13, 20, 17, 22, 'l', 1); g.line(13, 25, 17, 27, 'l', 1);
      g.line(39, 20, 43, 22, 'l', 1); g.line(39, 25, 43, 27, 'l', 1);
      g.line(24, 39, 24, 44, 'z', 3); g.line(32, 39, 32, 44, 'z', 3);
    }
  },

  // ---------------------------------------------------------------------------
  // STAGE 2 — STREAGLE : sturdier, taller, sharper brow, more feather rows,
  // bigger folded wings with crisper stepped primaries. Same round DNA.
  // ---------------------------------------------------------------------------
  streagle: {
    pal: {
      o: 'ink', b: 'blu1', l: 'blu2', d: 'blu0',
      w: 'white', g: 'lgry',
      k: 'org1', y: 'org2', j: 'org0',
      t: 'yel1', z: 'yel0',
      c: 'ice2', K: 'white'
    },
    draw(g) {
      g.line(17, 40, 17, 44, 'z', 4); g.line(29, 40, 29, 44, 'z', 4);
      // taller body
      g.ball(23, 27, 14, 16, 'b', 'l', 'd');
      g.ball(23, 33, 9, 9, 'w', null, 'g');
      // folded wings — bigger side masses
      g.ellipse(9, 27, 6, 11, 'd'); g.ellipse(37, 27, 6, 11, 'd');
      // head fused, slight crest
      g.ball(23, 15, 12, 10, 'b', 'l', 'd');
      g.tri(20, 11, 26, 11, 23, 6, 'd');  // small crest tuft (wide base)
      // HOOKED raptor beak (bigger than stage 1) — SOLID hooked form
      g.set(20, 18, 'y'); g.set(21, 18, 'y'); g.set(22, 18, 'y'); g.set(23, 18, 'y'); g.set(24, 18, 'y'); g.set(25, 18, 'y');
      g.set(20, 19, 'y'); g.set(21, 19, 'k'); g.set(22, 19, 'k'); g.set(23, 19, 'k'); g.set(24, 19, 'k'); g.set(25, 19, 'k');
      g.set(21, 20, 'k'); g.set(22, 20, 'k'); g.set(23, 20, 'k'); g.set(24, 20, 'k'); g.set(25, 20, 'j');
      g.set(22, 21, 'k'); g.set(23, 21, 'k'); g.set(24, 21, 'j');
      g.set(23, 22, 'j'); g.set(24, 22, 'j');
      g.outline('o');
      g.seam(['w'], ['b', 'l', 'd'], 'g');
      // scalloped breast feather rows
      g.set(16, 30, 'g'); g.set(17, 30, 'g'); g.set(18, 31, 'g'); g.set(19, 31, 'g');
      g.set(27, 31, 'g'); g.set(28, 31, 'g'); g.set(29, 30, 'g'); g.set(30, 30, 'g');
      g.set(17, 34, 'g'); g.set(18, 34, 'g'); g.set(19, 35, 'g'); g.set(20, 35, 'g');
      g.set(26, 35, 'g'); g.set(27, 35, 'g'); g.set(28, 34, 'g'); g.set(29, 34, 'g');
      g.set(18, 38, 'g'); g.set(19, 38, 'g'); g.set(20, 39, 'g'); g.set(21, 39, 'g');
      g.set(25, 39, 'g'); g.set(26, 39, 'g'); g.set(27, 38, 'g'); g.set(28, 38, 'g');
      // wing feather seams — short staggered overlapping-feather marks
      g.line(5, 23, 11, 22, 'l', 1); g.line(6, 28, 12, 27, 'l', 1); g.line(6, 33, 11, 32, 'l', 1);
      g.line(35, 22, 41, 23, 'l', 1); g.line(34, 27, 40, 28, 'l', 1); g.line(35, 32, 40, 33, 'l', 1);
      g.seam(['d'], ['b', 'l'], 'o');
      g.eyeAlmond(14, 11, 7, 4); g.eyeAlmond(25, 11, 7, 4);
      g.set(19, 11, 'o'); g.set(27, 11, 'o'); // brow corners
      // nostril on cere
      g.set(21, 18, 'k');
      // feet
      g.rect(14, 44, 6, 2, 'z'); g.rect(26, 44, 6, 2, 'z');
      g.set(14, 46, 'o'); g.set(17, 46, 'o'); g.set(20, 46, 'o');
      g.set(26, 46, 'o'); g.set(29, 46, 'o'); g.set(32, 46, 'o');
      // ice/cyan throat marking under the beak (water-type cue)
      g.set(21, 23, 'c'); g.set(22, 23, 'c'); g.set(23, 23, 'c'); g.set(24, 23, 'c'); g.set(25, 23, 'c');
      g.set(22, 24, 'c'); g.set(23, 24, 'c'); g.set(24, 24, 'c');
    },
    back(g) {
      g.ball(28, 23, 16, 17, 'b', 'l', 'd');
      g.ellipse(13, 23, 6, 12, 'd'); g.ellipse(43, 23, 6, 12, 'd');
      g.outline('o');
      g.line(18, 16, 38, 16, 'd', 1); g.line(18, 22, 38, 22, 'd', 1); g.line(18, 28, 38, 28, 'd', 1);
      g.line(11, 19, 16, 21, 'l', 1); g.line(11, 25, 16, 27, 'l', 1);
      g.line(40, 19, 45, 21, 'l', 1); g.line(40, 25, 45, 27, 'l', 1);
      g.line(24, 39, 24, 44, 'z', 4); g.line(32, 39, 32, 44, 'z', 4);
    }
  },

  // ---------------------------------------------------------------------------
  // STAGE 3 — TORRENTALON : larger, wings OPENING, more feather detail, still
  // round-rooted. Gains FLYING. 56x56 canvas.
  // ---------------------------------------------------------------------------
  torrentalon: {
    w: 56, h: 56,
    pal: {
      o: 'ink', b: 'blu1', l: 'blu2', d: 'blu0',
      w: 'white', g: 'lgry',
      k: 'org1', y: 'org2', j: 'org0',
      t: 'yel1', z: 'yel0',
      c: 'ice2', i: 'ice1', K: 'white'
    },
    draw(g) {
      // talons
      g.line(22, 48, 22, 54, 'z', 4); g.line(34, 48, 34, 54, 'z', 4);
      // big round body
      g.ball(28, 33, 16, 18, 'b', 'l', 'd');
      g.ball(28, 40, 11, 11, 'w', null, 'g');
      // OPENING wings — spread from shoulders, wide masses with seams
      // left wing
      g.ellipse(10, 30, 8, 14, 'd');
      g.tri(3, 20, 18, 30, 7, 44, 'd');
      // right wing
      g.ellipse(46, 30, 8, 14, 'd');
      g.tri(53, 20, 38, 30, 49, 44, 'd');
      // head fused, crest
      g.ball(28, 19, 13, 11, 'b', 'l', 'd');
      g.tri(24, 13, 32, 13, 28, 6, 'd');
      // HOOKED raptor beak (largest) — SOLID hooked form
      g.set(24, 24, 'y'); g.set(25, 24, 'y'); g.set(26, 24, 'y'); g.set(27, 24, 'y'); g.set(28, 24, 'y'); g.set(29, 24, 'y'); g.set(30, 24, 'y');
      g.set(24, 25, 'y'); g.set(25, 25, 'k'); g.set(26, 25, 'k'); g.set(27, 25, 'k'); g.set(28, 25, 'k'); g.set(29, 25, 'k'); g.set(30, 25, 'k');
      g.set(25, 26, 'k'); g.set(26, 26, 'k'); g.set(27, 26, 'k'); g.set(28, 26, 'k'); g.set(29, 26, 'k'); g.set(30, 26, 'j');
      g.set(26, 27, 'k'); g.set(27, 27, 'k'); g.set(28, 27, 'k'); g.set(29, 27, 'j');
      g.set(27, 28, 'k'); g.set(28, 28, 'j'); g.set(29, 28, 'j');
      g.set(28, 29, 'j');
      g.outline('o');
      g.seam(['w'], ['b', 'l', 'd'], 'g');
      // scalloped breast feather rows
      g.set(20, 36, 'g'); g.set(21, 36, 'g'); g.set(22, 37, 'g'); g.set(23, 37, 'g');
      g.set(33, 37, 'g'); g.set(34, 37, 'g'); g.set(35, 36, 'g'); g.set(36, 36, 'g');
      g.set(21, 41, 'g'); g.set(22, 41, 'g'); g.set(23, 42, 'g'); g.set(24, 42, 'g');
      g.set(32, 42, 'g'); g.set(33, 42, 'g'); g.set(34, 41, 'g'); g.set(35, 41, 'g');
      g.set(22, 46, 'g'); g.set(23, 46, 'g'); g.set(24, 47, 'g'); g.set(25, 47, 'g');
      g.set(31, 47, 'g'); g.set(32, 47, 'g'); g.set(33, 46, 'g'); g.set(34, 46, 'g');
      // wing primary feather seams — short staggered overlapping-feather marks
      // left wing: marks follow the wing's downward sweep, suggesting layered primaries
      g.line(6, 26, 12, 25, 'l', 1); g.set(5, 27, 'l');
      g.line(7, 31, 13, 30, 'l', 1); g.set(6, 32, 'l');
      g.line(8, 36, 14, 35, 'l', 1); g.set(7, 37, 'l');
      // right wing (mirror)
      g.line(44, 25, 50, 26, 'l', 1); g.set(51, 27, 'l');
      g.line(43, 30, 49, 31, 'l', 1); g.set(50, 32, 'l');
      g.line(42, 35, 48, 36, 'l', 1); g.set(49, 37, 'l');
      g.seam(['d'], ['b', 'l'], 'o');
      g.eyeAlmond(18, 15, 8, 4); g.eyeAlmond(30, 15, 8, 4);
      g.set(24, 15, 'o'); g.set(33, 15, 'o'); // brow corners
      // nostril on cere
      g.set(25, 24, 'k');
      // feet
      g.rect(20, 53, 6, 2, 'z'); g.rect(32, 53, 6, 2, 'z');
      g.set(20, 55, 'o'); g.set(23, 55, 'o'); g.set(26, 55, 'o');
      g.set(32, 55, 'o'); g.set(35, 55, 'o'); g.set(38, 55, 'o');
      // ice/cyan accents — cyan crest tip + throat marking under beak
      g.set(28, 7, 'c'); g.set(28, 8, 'i');
      g.set(26, 30, 'c'); g.set(27, 30, 'c'); g.set(28, 30, 'c'); g.set(29, 30, 'c'); g.set(30, 30, 'c');
      g.set(27, 31, 'c'); g.set(28, 31, 'c'); g.set(29, 31, 'i');
    },
    back(g) {
      g.ball(32, 28, 18, 19, 'b', 'l', 'd');
      g.tri(4, 14, 22, 30, 8, 46, 'd');
      g.tri(60, 14, 42, 30, 56, 46, 'd');
      g.outline('o');
      g.line(20, 20, 44, 20, 'd', 1); g.line(20, 27, 44, 27, 'd', 1); g.line(20, 34, 44, 34, 'd', 1);
      g.line(28, 48, 28, 54, 'z', 4); g.line(36, 48, 36, 54, 'z', 4);
    }
  }
};
