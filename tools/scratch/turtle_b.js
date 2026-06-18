// TURTLE line — direction "turtle_b": TURTWIG QUADRUPED.
// A low chunky four-legged tortoise in 3/4 view. Domed shell on the back
// fused seamlessly to the body; sturdy head emerging from the FRONT of the
// body; four short thick legs; short tail; grass cue = sprout/leaf crown.
// Stage 1 sproutle (cute), stage 2 verdoise (sturdier), stage 3 gaiadome
// (ground type — massive mossy/rocky domed tortoise, tree motif).

module.exports = {
  // ----------------------------------------------------------- SPROUTLE (1)
  sproutle: {
    pal: {
      o: 'ink',
      b: 'grn2', bl: 'grn3', bd: 'grn1',          // green skin/body/head
      s: 'brn2', sl: 'brn3', sd: 'brn1',          // brown shell dome
      r: 'tan1',                                   // cream shell rim
      p: 'tan1',                                   // plastron / belly
      t: 'brn1',                                   // sprout stem
      f: 'leaf2', fl: 'leaf3', fd: 'leaf1',        // leaves
      K: 'white',
    },
    draw(g) {
      // --- four short thick legs first (so body overlaps their tops) ---
      g.rect(13, 37, 5, 7, 'b');     // front-left leg
      g.rect(22, 38, 5, 6, 'b');     // front-right leg
      g.rect(33, 37, 5, 7, 'bd');    // back leg
      // feet/toe dots
      g.set(13, 43, 'o'); g.set(15, 43, 'o'); g.set(17, 43, 'o');
      g.set(22, 43, 'o'); g.set(24, 43, 'o'); g.set(26, 43, 'o');
      g.set(33, 43, 'o'); g.set(35, 43, 'o'); g.set(37, 43, 'o');
      // short stubby tail
      g.line(40, 33, 44, 34, 'b', 3);
      // --- ONE green body mass: low rounded ellipse ---
      g.ball(25, 32, 15, 9, 'b', 'bl', 'bd', { liteCut: 0.5, darkCut: 0.5 });
      // plastron (cream belly) — small contained patch low-front
      g.ellipse(19, 37, 6, 3, 'p');
      // --- domed BROWN shell capping the back (clean dome) ---
      g.ball(28, 25, 14, 10, 's', 'sl', 'sd', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(28, 33, 13, 2, 'r');      // cream shell rim band
      // --- head emerging from FRONT of the body (left) ---
      g.ball(11, 29, 9, 8, 'b', 'bl', 'bd', { liteCut: 0.45, darkCut: 0.5 });
      // --- sprout on top of the shell (grass cue) ---
      g.line(28, 19, 28, 12, 't', 2);
      g.ellipse(24, 10, 4, 3, 'f');
      g.ellipse(32, 10, 4, 3, 'f');
      g.ellipse(28, 7, 4, 3, 'fl');
      g.set(28, 8, 'fd');
      g.outline('o');
      // seams: shell over body, rim under shell, plastron over body
      g.seam(['s', 'sl', 'sd'], ['b', 'bl', 'bd'], 'o');
      g.seam(['r'], ['b', 'bl', 'bd'], 'o');
      g.seam(['s', 'sl', 'sd'], ['r'], 'o');
      g.seam(['p'], ['b', 'bl', 'bd'], 'o');
      // --- face: small cute eyes ---
      g.eye(6, 26, 4, 4);
      g.eye(13, 26, 4, 4);
      // nostril + small smile
      g.set(5, 31, 'o');
      g.line(6, 32, 9, 32, 'o', 1);
      // a couple of clean scute hints on the shell
      g.set(23, 24, 'sd'); g.set(33, 25, 'sd');
    },
    back(g) {
      // rear: big domed brown shell, head poking down-left, sprout on top
      g.ball(28, 25, 16, 11, 's', 'sl', 'sd', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(28, 34, 14, 2, 'r');
      g.ball(13, 31, 7, 6, 'b', 'bl', 'bd');
      g.line(28, 15, 28, 9, 't', 2);
      g.ellipse(24, 7, 4, 3, 'f'); g.ellipse(32, 7, 4, 3, 'f'); g.ellipse(28, 5, 3, 3, 'fl');
      g.rect(18, 37, 5, 7, 'b'); g.rect(35, 37, 5, 7, 'b');
      g.set(18, 43, 'o'); g.set(22, 43, 'o'); g.set(35, 43, 'o'); g.set(39, 43, 'o');
      g.outline('o');
      g.seam(['b', 'bl', 'bd'], ['s', 'sl', 'sd'], 'o');
      g.seam(['r'], ['s', 'sl', 'sd'], 'o');
      g.set(22, 22, 'sd'); g.set(34, 23, 'sd');
    },
  },

  // ----------------------------------------------------------- VERDOISE (2)
  verdoise: {
    pal: {
      o: 'ink',
      b: 'grn2', bl: 'grn3', bd: 'grn1',           // green skin
      s: 'brn1', sl: 'brn2', sd: 'brn0',           // darker mature bark shell
      r: 'tan0',                                    // shell rim
      p: 'tan0',                                    // plastron
      t: 'brn1',                                    // stem
      f: 'leaf2', fl: 'leaf3', fd: 'leaf1',         // bushier leaves
      m: 'grn1',                                    // moss patch on shell
      K: 'white',
    },
    draw(g) {
      // legs (thicker, sturdier)
      g.rect(13, 40, 6, 7, 'b');
      g.rect(23, 41, 6, 6, 'b');
      g.rect(35, 40, 6, 7, 'bd');
      g.set(13, 46, 'o'); g.set(15, 46, 'o'); g.set(18, 46, 'o');
      g.set(23, 46, 'o'); g.set(25, 46, 'o'); g.set(28, 46, 'o');
      g.set(35, 46, 'o'); g.set(37, 46, 'o'); g.set(40, 46, 'o');
      g.line(43, 35, 47, 36, 'b', 3); // tail
      // one green body mass
      g.ball(26, 35, 17, 10, 'b', 'bl', 'bd', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(20, 40, 7, 3, 'p');   // plastron
      // domed bark shell fused on top
      g.ball(30, 26, 16, 11, 's', 'sl', 'sd', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(30, 35, 15, 2, 'r');     // shell rim
      // head forward
      g.ball(11, 31, 10, 9, 'b', 'bl', 'bd', { liteCut: 0.45, darkCut: 0.5 });
      // bushy sprout/sapling on shell
      g.line(30, 19, 30, 11, 't', 3);
      g.ellipse(24, 10, 5, 3, 'f'); g.ellipse(36, 10, 5, 3, 'f');
      g.ellipse(30, 6, 5, 3, 'fl'); g.ellipse(30, 9, 6, 3, 'f');
      g.set(30, 7, 'fd');
      // moss patches on shell
      g.ellipse(24, 23, 4, 2, 'm'); g.ellipse(37, 25, 3, 2, 'm');
      g.outline('o');
      g.seam(['s', 'sl', 'sd'], ['b', 'bl', 'bd'], 'o');
      g.seam(['r'], ['b', 'bl', 'bd'], 'o');
      g.seam(['s', 'sl', 'sd'], ['r'], 'o');
      g.seam(['p'], ['b', 'bl', 'bd'], 'o');
      // sterner face
      g.line(4, 27, 9, 27, 'o', 1);   // brow
      g.line(11, 27, 16, 27, 'o', 1);
      g.eye(5, 28, 4, 4);
      g.eye(12, 28, 4, 4);
      g.set(4, 33, 'o');
      g.line(6, 34, 10, 34, 'o', 1);
      // clean scute hints
      g.set(25, 23, 'sd'); g.set(35, 24, 'sd');
    },
    back(g) {
      g.ball(29, 26, 17, 12, 's', 'sl', 'sd', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(29, 36, 15, 2, 'r');
      g.ball(14, 32, 8, 7, 'b', 'bl', 'bd');
      g.line(29, 16, 29, 9, 't', 3);
      g.ellipse(24, 7, 5, 3, 'f'); g.ellipse(34, 7, 5, 3, 'f'); g.ellipse(29, 5, 4, 3, 'fl');
      g.rect(18, 40, 6, 7, 'b'); g.rect(36, 40, 6, 7, 'b');
      g.set(18, 46, 'o'); g.set(23, 46, 'o'); g.set(36, 46, 'o'); g.set(41, 46, 'o');
      g.outline('o');
      g.seam(['b', 'bl', 'bd'], ['s', 'sl', 'sd'], 'o');
      g.seam(['r'], ['s', 'sl', 'sd'], 'o');
      g.set(23, 23, 'sd'); g.set(35, 24, 'sd');
    },
  },

  // ----------------------------------------------------------- GAIADOME (3)
  gaiadome: {
    w: 56, h: 56,
    pal: {
      o: 'ink',
      b: 'grn2', bl: 'grn3', bd: 'grn1',          // green skin
      s: 'brn1', sl: 'brn2', sd: 'brn0',          // earthen rocky shell
      r: 'brn0',                                    // dark earth rim
      m: 'grn1', ml: 'grn2', md: 'grn0',           // moss cap
      p: 'tan0',                                    // plastron
      t: 'brn1',                                    // trunk
      f: 'leaf2', fl: 'leaf3', fd: 'leaf1',         // tree foliage
      k: 'stn2', kd: 'stn1',                        // rock/boulder
      K: 'white',
    },
    draw(g) {
      // massive thick legs (rect pillars)
      g.rect(10, 46, 8, 8, 'b');
      g.rect(25, 47, 9, 7, 'b');
      g.rect(43, 46, 8, 8, 'bd');
      g.set(10, 53, 'o'); g.set(14, 53, 'o'); g.set(17, 53, 'o');
      g.set(25, 53, 'o'); g.set(29, 53, 'o'); g.set(33, 53, 'o');
      g.set(43, 53, 'o'); g.set(47, 53, 'o'); g.set(50, 53, 'o');
      g.line(49, 41, 54, 42, 'b', 4); // tail
      // one huge green body mass
      g.ball(31, 41, 22, 11, 'b', 'bl', 'bd', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(22, 46, 9, 4, 'p');   // plastron
      // earthen dome shell fused on top (big clean dome)
      g.ball(33, 29, 21, 15, 's', 'sl', 'sd', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(33, 41, 20, 2, 'r');   // earth rim band
      // broad mossy cap on the dome crown
      g.ball(33, 20, 17, 6, 'm', 'ml', 'md', { liteCut: 0.5, darkCut: 0.5 });
      // heavy head forward
      g.ball(13, 38, 12, 11, 'b', 'bl', 'bd', { liteCut: 0.45, darkCut: 0.5 });
      // tree growing from the dome (trunk + canopy)
      g.line(38, 14, 38, 7, 't', 3);
      g.ball(38, 6, 9, 5, 'f', 'fl', 'fd', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(31, 7, 4, 3, 'f'); g.ellipse(45, 7, 4, 3, 'f');
      // embedded boulder on the shell
      g.ball(48, 28, 5, 4, 'k', null, 'kd');
      g.outline('o');
      g.seam(['s', 'sl', 'sd'], ['b', 'bl', 'bd'], 'o');
      g.seam(['m', 'ml', 'md'], ['s', 'sl', 'sd'], 'o');
      g.seam(['r'], ['b', 'bl', 'bd'], 'o');
      g.seam(['p'], ['b', 'bl', 'bd'], 'o');
      g.seam(['k', 'kd'], ['s', 'sl', 'sd'], 'o');
      // heavy-lidded eyes, broad jaw
      g.line(5, 33, 11, 33, 'o', 1);   // brow
      g.line(13, 33, 19, 33, 'o', 1);
      g.eye(6, 34, 5, 5);
      g.eye(14, 34, 5, 5);
      g.set(5, 42, 'o');
      g.line(7, 43, 12, 43, 'o', 1);
      // moss speckles on the earthen shell
      g.set(28, 24, 'md'); g.set(41, 26, 'ml'); g.set(33, 31, 'md');
    },
    back(g) {
      g.ball(30, 29, 21, 15, 's', 'sl', 'sd', { liteCut: 0.5, darkCut: 0.5 });
      g.ball(30, 20, 18, 6, 'm', 'ml', 'md', { liteCut: 0.5, darkCut: 0.5 });
      g.ellipse(30, 41, 19, 2, 'r');
      g.ball(14, 36, 9, 8, 'b', 'bl', 'bd');
      g.line(34, 14, 34, 7, 't', 3); g.ball(34, 6, 7, 4, 'f', 'fl', 'fd');
      g.rect(16, 44, 8, 8, 'b'); g.rect(40, 44, 8, 8, 'b');
      g.set(16, 51, 'o'); g.set(20, 51, 'o'); g.set(40, 51, 'o'); g.set(44, 51, 'o');
      g.outline('o');
      g.seam(['s', 'sl', 'sd'], ['b', 'bl', 'bd'], 'o');
      g.seam(['m', 'ml', 'md'], ['s', 'sl', 'sd'], 'o');
      g.set(26, 25, 'md'); g.set(38, 27, 'ml');
    },
  },
};
