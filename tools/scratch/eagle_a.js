// EAGLE line — direction "eagle_a": RUFFLET front-facing water eaglet.
// aquilet (s1) -> streagle (s2) -> torrentalon (s3, gains FLYING).
// Front-facing baby eagle: hooked orange beak, fierce eyeAlmond eyes under a
// brow, white notched chest with feather seams, two folded navy wings with
// stepped interior feather seams, yellow taloned feet, ice/cyan water accent.

module.exports = {
  // ----------------------------------------------------------------- STAGE 1
  aquilet: {
    pal: {
      o: 'ink', b: 'blu1', l: 'blu3', d: 'blu0', // body blue / hi / shadow
      v: 'blu2',                                  // wing feather edge (lighter than d)
      w: 'white', g: 'lgry',                       // chest white + shade
      k: 'org1', y: 'org2', t: 'yel1', n: 'org0', // beak orange, talons yel, hook shadow
      i: 'ice2', c: 'ice1', K: 'white',           // ice accent
    },
    draw(g) {
      // legs (thick) descending from under the belly, then splayed talons
      g.line(20, 38, 19, 43, 'y', 3); g.line(28, 38, 29, 43, 'y', 3);
      // three forward claws per foot (clear gap between feet, no crossing)
      g.line(19, 43, 16, 46, 'y', 2); g.line(19, 43, 19, 47, 'y', 2); g.line(19, 43, 22, 46, 'y', 2);
      g.line(29, 43, 26, 46, 'y', 2); g.line(29, 43, 29, 47, 'y', 2); g.line(29, 43, 32, 46, 'y', 2);
      g.set(16, 47, 'o'); g.set(19, 48, 'o'); g.set(22, 47, 'o');
      g.set(26, 47, 'o'); g.set(29, 48, 'o'); g.set(32, 47, 'o');
      // folded wings (navy masses at sides) BEFORE body so body overlaps them
      g.ball(12, 30, 6, 9, 'd', 'v', 'd');
      g.ball(36, 30, 6, 9, 'd', 'v', 'd');
      // body — single egg mass, head fused on top
      g.ball(24, 31, 11, 12, 'b', 'l', 'd');
      // head merges into top of body (same mass, slightly smaller)
      g.ball(24, 18, 10, 9, 'b', 'l', 'd');
      // white feathered chest — narrower at throat, widening down (teardrop)
      g.tri(20, 27, 28, 27, 24, 33, 'w');
      g.ball(24, 35, 7, 7, 'w', null, 'g');
      // hooked raptor beak: SHORT broad upper mandible + a stubby down hook
      g.tri(20, 22, 28, 22, 24, 25, 'k');   // short upper mandible wedge
      g.set(22, 25, 'k'); g.set(23, 25, 'k'); g.set(24, 25, 'k'); g.set(25, 25, 'k'); g.set(26, 25, 'k');
      g.set(23, 26, 'k'); g.set(24, 26, 'n');                      // hook curl under
      g.set(22, 23, 'y'); g.set(25, 23, 'y');                      // upper highlight
      g.set(24, 23, 'n');                                          // nostril (inside beak)
      g.outline('o');
      // wing interior feather seams (stepped): light edge + ink seam below
      g.line(9, 25, 14, 26, 'v', 1); g.line(9, 26, 14, 27, 'o', 1);
      g.line(9, 30, 14, 31, 'v', 1); g.line(9, 31, 14, 32, 'o', 1);
      g.line(9, 35, 13, 36, 'o', 1);
      g.line(34, 26, 39, 25, 'v', 1); g.line(34, 27, 39, 26, 'o', 1);
      g.line(34, 31, 39, 30, 'v', 1); g.line(34, 32, 39, 31, 'o', 1);
      g.line(35, 36, 39, 35, 'o', 1);
      // chest separation + chevron feather notches (not a smile)
      g.seam(['w'], ['b', 'l', 'd'], 'o');
      g.set(22, 33, 'g'); g.set(23, 34, 'g'); g.set(25, 34, 'g'); g.set(26, 33, 'g');
      g.set(21, 37, 'g'); g.set(22, 38, 'g'); g.set(26, 38, 'g'); g.set(27, 37, 'g');
      // ice accent: small cyan crest nub (foreshadows the s2/s3 crest)
      g.set(24, 10, 'i'); g.set(23, 11, 'c'); g.set(24, 11, 'i'); g.set(25, 11, 'c');
      // eyes — fierce almond under brow, angled toward the beak
      g.eyeAlmond(17, 15, 5, 4); g.eyeAlmond(26, 15, 5, 4);
    },
    back(g) {
      // legs/talons peeking below the body
      g.line(20, 38, 19, 42, 'y', 3); g.line(28, 38, 29, 42, 'y', 3);
      g.line(19, 42, 17, 44, 'y', 2); g.line(19, 42, 21, 44, 'y', 2);
      g.line(29, 42, 27, 44, 'y', 2); g.line(29, 42, 31, 44, 'y', 2);
      // folded wings at sides
      g.ball(13, 28, 6, 9, 'd', 'v', 'd'); g.ball(35, 28, 6, 9, 'd', 'v', 'd');
      // back of body + nape (single mass)
      g.ball(24, 28, 12, 13, 'b', 'l', 'd');
      g.ball(24, 16, 9, 8, 'b', 'l', 'd');
      // crest nub
      g.set(24, 9, 'i'); g.set(23, 10, 'c'); g.set(25, 10, 'c');
      g.outline('o');
      // wing feather seams (light edge + ink)
      g.line(10, 25, 16, 26, 'v', 1); g.line(10, 26, 16, 27, 'o', 1);
      g.line(10, 30, 16, 31, 'v', 1); g.line(10, 31, 16, 32, 'o', 1);
      g.line(32, 26, 38, 25, 'v', 1); g.line(32, 27, 38, 26, 'o', 1);
      g.line(32, 31, 38, 30, 'v', 1); g.line(32, 32, 38, 31, 'o', 1);
      // nape/back feather seams
      g.line(20, 23, 28, 23, 'd', 1); g.line(19, 28, 29, 28, 'd', 1); g.line(20, 33, 28, 33, 'd', 1);
    }
  },

  // ----------------------------------------------------------------- STAGE 2
  streagle: {
    pal: {
      o: 'ink', b: 'blu1', l: 'blu3', d: 'blu0',
      v: 'blu2',
      w: 'white', g: 'lgry',
      k: 'org1', y: 'org2', t: 'yel1', n: 'org0',
      i: 'ice2', c: 'ice1', K: 'white',
    },
    draw(g) {
      // legs (thicker) + splayed 3-claw talons, clear center gap
      g.line(19, 39, 18, 45, 'y', 4); g.line(29, 39, 30, 45, 'y', 4);
      g.line(18, 45, 14, 48, 'y', 2); g.line(18, 45, 18, 49, 'y', 2); g.line(18, 45, 22, 48, 'y', 2);
      g.line(30, 45, 26, 48, 'y', 2); g.line(30, 45, 30, 49, 'y', 2); g.line(30, 45, 34, 48, 'y', 2);
      g.set(14, 49, 'o'); g.set(18, 50, 'o'); g.set(22, 49, 'o');
      g.set(26, 49, 'o'); g.set(30, 50, 'o'); g.set(34, 49, 'o');
      // bigger folded wings
      g.ball(11, 29, 7, 11, 'd', 'v', 'd');
      g.ball(37, 29, 7, 11, 'd', 'v', 'd');
      g.ball(24, 31, 12, 13, 'b', 'l', 'd');
      g.ball(24, 17, 10, 9, 'b', 'l', 'd');
      // white teardrop chest
      g.tri(19, 27, 29, 27, 24, 34, 'w');
      g.ball(24, 36, 8, 8, 'w', null, 'g');
      // ice head crest (water/ice tuft) — sharper than stage 1
      g.line(24, 8, 20, 3, 'c', 2); g.line(24, 8, 28, 3, 'c', 2); g.line(24, 8, 24, 2, 'i', 2);
      // hooked raptor beak (short + stout, bigger than s1)
      g.tri(19, 21, 29, 21, 24, 25, 'k');
      g.set(21, 25, 'k'); g.set(22, 25, 'k'); g.set(23, 25, 'k'); g.set(24, 25, 'k'); g.set(25, 25, 'k'); g.set(26, 25, 'k'); g.set(27, 25, 'k');
      g.set(23, 26, 'k'); g.set(24, 26, 'k'); g.set(25, 26, 'k');
      g.set(24, 27, 'n'); g.set(23, 27, 'n');
      g.set(21, 23, 'y'); g.set(27, 23, 'y'); g.set(24, 23, 'n');
      g.outline('o');
      g.line(7, 23, 14, 24, 'v', 1); g.line(7, 24, 14, 25, 'o', 1);
      g.line(7, 29, 14, 30, 'v', 1); g.line(7, 30, 14, 31, 'o', 1);
      g.line(8, 35, 13, 35, 'o', 1);
      g.line(34, 24, 41, 23, 'v', 1); g.line(34, 25, 41, 24, 'o', 1);
      g.line(34, 30, 41, 29, 'v', 1); g.line(34, 31, 41, 30, 'o', 1);
      g.line(35, 35, 40, 35, 'o', 1);
      g.seam(['w'], ['b', 'l', 'd'], 'o');
      g.set(21, 34, 'g'); g.set(22, 35, 'g'); g.set(26, 35, 'g'); g.set(27, 34, 'g');
      g.set(20, 39, 'g'); g.set(21, 40, 'g'); g.set(27, 40, 'g'); g.set(28, 39, 'g');
      g.eyeAlmond(16, 14, 6, 4); g.eyeAlmond(26, 14, 6, 4);
    },
    back(g) {
      // legs/talons peeking below
      g.line(19, 38, 18, 43, 'y', 4); g.line(29, 38, 30, 43, 'y', 4);
      g.line(18, 43, 16, 45, 'y', 2); g.line(18, 43, 20, 45, 'y', 2);
      g.line(30, 43, 28, 45, 'y', 2); g.line(30, 43, 32, 45, 'y', 2);
      g.ball(12, 28, 6, 10, 'd', 'v', 'd'); g.ball(36, 28, 6, 10, 'd', 'v', 'd');
      g.ball(24, 28, 13, 14, 'b', 'l', 'd');
      g.ball(24, 15, 9, 8, 'b', 'l', 'd');
      // crest nub
      g.set(24, 7, 'i'); g.set(23, 8, 'c'); g.set(25, 8, 'c');
      g.outline('o');
      g.line(9, 24, 16, 25, 'v', 1); g.line(9, 25, 16, 26, 'o', 1);
      g.line(9, 30, 16, 31, 'v', 1); g.line(9, 31, 16, 32, 'o', 1);
      g.line(32, 25, 39, 24, 'v', 1); g.line(32, 26, 39, 25, 'o', 1);
      g.line(32, 31, 39, 30, 'v', 1); g.line(32, 32, 39, 31, 'o', 1);
      g.line(20, 22, 28, 22, 'd', 1); g.line(19, 28, 29, 28, 'd', 1); g.line(20, 34, 28, 34, 'd', 1);
    }
  },

  // ----------------------------------------------------------------- STAGE 3
  torrentalon: {
    w: 56, h: 56,
    pal: {
      o: 'ink', b: 'blu1', l: 'blu3', d: 'blu0',
      v: 'blu2',
      w: 'white', g: 'lgry',
      k: 'org1', y: 'org2', t: 'yel1', n: 'org0',
      i: 'ice2', c: 'ice1', K: 'white',
    },
    draw(g) {
      // legs + big splayed 3-claw talons, clear center gap
      g.line(22, 45, 21, 52, 'y', 4); g.line(34, 45, 35, 52, 'y', 4);
      g.line(21, 52, 16, 55, 'y', 3); g.line(21, 52, 21, 55, 'y', 3); g.line(21, 52, 26, 55, 'y', 3);
      g.line(35, 52, 30, 55, 'y', 3); g.line(35, 52, 35, 55, 'y', 3); g.line(35, 52, 40, 55, 'y', 3);
      g.set(16, 55, 'o'); g.set(21, 55, 'o'); g.set(26, 55, 'o');
      g.set(30, 55, 'o'); g.set(35, 55, 'o'); g.set(40, 55, 'o');
      // BIG spread wings
      g.ball(10, 26, 9, 15, 'd', 'v', 'd');
      g.ball(46, 26, 9, 15, 'd', 'v', 'd');
      g.ball(28, 35, 14, 15, 'b', 'l', 'd');
      g.ball(28, 19, 11, 10, 'b', 'l', 'd');
      // white teardrop chest
      g.tri(22, 29, 34, 29, 28, 37, 'w');
      g.ball(28, 40, 9, 9, 'w', null, 'g');
      // ice crest
      g.line(28, 8, 23, 2, 'c', 2); g.line(28, 8, 33, 2, 'c', 2); g.line(28, 8, 28, 1, 'i', 2);
      // hooked raptor beak (largest, short + stout)
      g.tri(22, 23, 34, 23, 28, 28, 'k');
      g.set(24, 28, 'k'); g.set(25, 28, 'k'); g.set(26, 28, 'k'); g.set(27, 28, 'k'); g.set(28, 28, 'k'); g.set(29, 28, 'k'); g.set(30, 28, 'k'); g.set(31, 28, 'k'); g.set(32, 28, 'k');
      g.set(27, 29, 'k'); g.set(28, 29, 'k'); g.set(29, 29, 'k');
      g.set(28, 30, 'n'); g.set(27, 30, 'n');
      g.set(25, 25, 'y'); g.set(31, 25, 'y'); g.set(28, 25, 'n');
      g.outline('o');
      // spread wing feather seams (stepped primaries): light edge + ink seam
      g.line(3, 19, 14, 21, 'v', 1); g.line(3, 20, 14, 22, 'o', 1);
      g.line(3, 26, 14, 27, 'v', 1); g.line(3, 27, 14, 28, 'o', 1);
      g.line(4, 33, 14, 34, 'v', 1); g.line(4, 34, 14, 35, 'o', 1);
      g.line(6, 39, 14, 39, 'o', 1);
      g.line(42, 21, 53, 19, 'v', 1); g.line(42, 22, 53, 20, 'o', 1);
      g.line(42, 27, 53, 26, 'v', 1); g.line(42, 28, 53, 27, 'o', 1);
      g.line(42, 34, 52, 33, 'v', 1); g.line(42, 35, 52, 34, 'o', 1);
      g.line(42, 39, 50, 39, 'o', 1);
      g.seam(['w'], ['b', 'l', 'd'], 'o');
      g.set(25, 38, 'g'); g.set(26, 39, 'g'); g.set(30, 39, 'g'); g.set(31, 38, 'g');
      g.set(24, 43, 'g'); g.set(25, 44, 'g'); g.set(31, 44, 'g'); g.set(32, 43, 'g');
      g.eyeAlmond(19, 15, 6, 5); g.eyeAlmond(31, 15, 6, 5);
    },
    back(g) {
      g.ball(28, 30, 16, 16, 'b', 'l', 'd');
      g.ball(28, 16, 10, 9, 'b', 'l', 'd');
      g.ball(11, 28, 8, 12, 'd', 'v', 'd'); g.ball(45, 28, 8, 12, 'd', 'v', 'd');
      g.line(22, 42, 22, 47, 'y', 4); g.line(34, 42, 34, 47, 'y', 4);
      g.outline('o');
      g.line(5, 22, 15, 24, 'o', 1); g.line(5, 28, 15, 29, 'o', 1); g.line(5, 34, 15, 34, 'o', 1);
      g.line(41, 24, 51, 22, 'o', 1); g.line(41, 29, 51, 28, 'o', 1); g.line(41, 34, 51, 34, 'o', 1);
      g.line(22, 24, 34, 24, 'd', 1); g.line(23, 32, 33, 32, 'd', 1);
    }
  },
};
