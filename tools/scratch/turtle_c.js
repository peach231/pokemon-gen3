// TURTLE line — direction "turtle_c": BULBASAUR-STYLE SQUAT SAURIAN-TORTOISE.
// A rounded four-legged body with a domed shell/plant-bud on the back, a broad
// friendly head low and forward and FULLY FUSED to the body, sturdy stubby legs.
// Grass identity = leafy bud/shell. Single connected mass, head is part of body.
// sproutle (cute small) -> verdoise (sturdier) -> gaiadome (ground type, mossy, imposing).

module.exports = {
  // ============================================================ SPROUTLE =====
  // Stage 1: small chunky grass-saurian. Low body, broad head fused forward,
  // four stubby legs, a single leaf-bud sprout on the back.
  sproutle: {
    pal: {
      o: 'ink',
      b: 'leaf1', l: 'leaf2', d: 'leaf0',     // body (grass green)
      s: 'grn1', p: 'grn2', q: 'grn0',        // back bud / shell (darker green dome)
      f: 'leaf3', F: 'grn3',                   // sprout leaf highlight
      w: 'tan1', v: 'tan0',                    // belly / chin cream
      K: 'white',
    },
    draw(g) {
      // four stubby legs first (under the body), thick rounded strokes — feet.
      // Near pair (front) chunkier & lower; far pair (back) thinner & darker.
      g.line(28, 38, 28, 42, 'd', 4);      // back-right leg (far, behind)
      g.line(35, 38, 35, 42, 'd', 4);      // back leg far
      g.line(15, 39, 15, 43, 'b', 5);      // front-left leg (near, chunky)
      g.line(23, 39, 23, 43, 'b', 5);      // front-right leg (near)
      // rounded feet pads on the near legs
      g.ellipse(15, 43, 3, 2, 'b'); g.ellipse(23, 43, 3, 2, 'b');
      g.set(13, 44, 'o'); g.set(17, 44, 'o');
      g.set(21, 44, 'o'); g.set(25, 44, 'o');
      g.set(27, 42, 'o'); g.set(36, 42, 'o');  // toe ticks on far feet
      // main body mass — wide, low, the dominant connected mass, rounded
      g.ball(23, 32, 17, 11, 'b', 'l', 'd');
      // domed back bud / shell — LOW, seated INTO the back so its lower half
      // disappears into the body; only the top crest rises above the back line.
      g.ball(31, 28, 11, 8, 's', 'p', 'q');
      // broad head fused to the front-left of the body, low and forward; the
      // head crest is the HIGH point so the back reads head->shell, one back.
      g.ball(13, 24, 12, 11, 'b', 'l', 'd');
      // cheek bulge breaks the head circle (chunky friendly look)
      g.ellipse(6, 28, 3, 3, 'b');
      // cream belly / chin — connects up under the chin to read as one plastron
      g.ellipse(14, 36, 8, 5, 'w');
      g.ellipse(13, 34, 3, 2, 'w');         // chin bridge, kept below the mouth
      // sprout leaf rising from the back bud
      g.line(32, 21, 31, 11, 's', 2);      // stem
      g.ellipse(28, 10, 4, 3, 'f');        // left leaf
      g.ellipse(35, 10, 4, 3, 'F');        // right leaf
      g.set(25, 9, 'f'); g.set(38, 9, 'F'); // 2px tips
      g.outline('o');
      g.seam(['s', 'p', 'q'], ['b', 'l', 'd'], 'o');  // bud reads as its own mass on the back
      g.seam(['w'], ['b', 'l', 'd'], 'o');             // belly seam
      g.seam(['f', 'F'], ['s', 'p', 'q'], 'o');
      // small cute eyes on the head
      g.eye(8, 22, 4, 4);
      g.eye(14, 22, 4, 4);
      // nostrils + small upturned mouth
      g.set(5, 27, 'o'); g.set(6, 28, 'o');
      g.line(6, 31, 10, 31, 'o', 1);
      g.set(5, 30, 'o'); g.set(11, 30, 'o');   // upturned mouth corners
    },
    back(g) {
      // rear (56x40): big domed bud/shell dominant, body flanks + legs below,
      // sprout rising from the dome with leaves meeting the stem top.
      g.line(18, 30, 18, 37, 'd', 5); g.line(38, 30, 38, 37, 'd', 5);   // legs
      g.set(16, 38, 'o'); g.set(20, 38, 'o'); g.set(36, 38, 'o'); g.set(40, 38, 'o');
      g.ball(28, 27, 17, 12, 'b', 'l', 'd');     // body flanks
      g.ball(28, 19, 13, 11, 's', 'p', 'q');     // back bud dome (dominant)
      g.line(28, 13, 28, 7, 's', 2);             // stem
      g.ellipse(24, 6, 4, 3, 'f'); g.ellipse(32, 6, 4, 3, 'F'); // leaves meet stem
      g.set(21, 5, 'f'); g.set(35, 5, 'F');
      g.outline('o');
      g.seam(['s', 'p', 'q'], ['b', 'l', 'd'], 'o');
      g.seam(['f', 'F'], ['s', 'p', 'q'], 'o');
    }
  },

  // ============================================================ VERDOISE =====
  // Stage 2: sturdier, the back bud has opened into a layered leafy dome,
  // body heavier, head broader, legs thicker.
  verdoise: {
    pal: {
      o: 'ink',
      b: 'leaf1', l: 'leaf2', d: 'leaf0',
      s: 'grn1', p: 'grn2', q: 'grn0',
      f: 'leaf3', F: 'grn3', g: 'grn2',
      w: 'tan1', v: 'tan0',
      K: 'white',
    },
    draw(g) {
      // far (back) legs thinner/darker behind, near (front) legs chunky
      g.line(31, 39, 31, 44, 'd', 5); g.line(40, 39, 40, 44, 'd', 5);
      g.line(15, 40, 15, 45, 'b', 6); g.line(25, 40, 25, 45, 'b', 6);
      g.ellipse(15, 45, 4, 2, 'b'); g.ellipse(25, 45, 4, 2, 'b');
      g.set(12, 46, 'o'); g.set(18, 46, 'o'); g.set(22, 46, 'o'); g.set(28, 46, 'o');
      g.set(30, 44, 'o'); g.set(41, 44, 'o');
      g.ball(26, 32, 19, 12, 'b', 'l', 'd');        // heavier body
      g.ball(35, 27, 13, 10, 's', 'p', 'q');        // back dome nested low
      g.ball(13, 23, 13, 12, 'b', 'l', 'd');        // broader head, high crest
      g.ellipse(5, 28, 3, 4, 'b');                  // cheek bulge
      g.ellipse(14, 36, 9, 6, 'w');
      g.ellipse(10, 31, 3, 3, 'w');                 // chin bridge to belly
      // layered leaf crown rising from the dome
      g.line(35, 19, 34, 6, 's', 2);
      g.ellipse(29, 7, 5, 3, 'f'); g.ellipse(41, 8, 5, 3, 'F');
      g.ellipse(35, 4, 4, 3, 'g');
      g.set(25, 6, 'f'); g.set(45, 7, 'F');
      g.outline('o');
      g.seam(['s', 'p', 'q'], ['b', 'l', 'd'], 'o');
      g.seam(['w'], ['b', 'l', 'd'], 'o');
      g.seam(['f', 'F', 'g'], ['s', 'p', 'q'], 'o');
      g.eye(7, 21, 5, 4); g.eye(14, 21, 5, 4);
      g.set(4, 27, 'o'); g.set(5, 27, 'o');
      g.line(5, 31, 11, 31, 'o', 1);
      g.set(4, 30, 'o'); g.set(12, 30, 'o');
    },
    back(g) {
      // rear (56x40): bigger dome, fuller crown meeting the stem
      g.line(17, 30, 17, 38, 'd', 5); g.line(40, 30, 40, 38, 'd', 5);
      g.set(15, 38, 'o'); g.set(19, 38, 'o'); g.set(38, 38, 'o'); g.set(42, 38, 'o');
      g.ball(29, 27, 19, 12, 'b', 'l', 'd');
      g.ball(29, 18, 15, 12, 's', 'p', 'q');
      g.line(29, 11, 29, 5, 's', 2);
      g.ellipse(23, 5, 5, 3, 'f'); g.ellipse(35, 5, 5, 3, 'F');
      g.ellipse(29, 3, 4, 3, 'g');
      g.set(19, 4, 'f'); g.set(39, 4, 'F');
      g.outline('o');
      g.seam(['s', 'p', 'q'], ['b', 'l', 'd'], 'o');
      g.seam(['f', 'F', 'g'], ['s', 'p', 'q'], 'o');
    }
  },

  // ============================================================ GAIADOME =====
  // Stage 3 (GROUND type): bigger, earthier, mossy rocky dome, imposing.
  gaiadome: {
    w: 56, h: 56, backW: 56, backH: 48,
    pal: {
      o: 'ink',
      b: 'leaf0', l: 'leaf1', d: 'grn0',          // darker earthy body
      s: 'brn1', p: 'brn2', q: 'brn0',            // rocky earthen dome
      m: 'grn1', M: 'grn2',                        // moss on the dome
      f: 'leaf2', F: 'leaf3', g: 'grn2',          // leaf crown
      w: 'tan0', v: 'brn3',                        // belly
      K: 'white',
    },
    draw(g) {
      // thick sturdy legs + feet — far pair behind, near pair chunky in front
      g.line(38, 46, 38, 52, 'd', 6); g.line(49, 46, 49, 52, 'd', 6);
      g.line(19, 47, 19, 53, 'b', 8); g.line(31, 47, 31, 53, 'b', 8);
      g.ellipse(19, 53, 5, 2, 'b'); g.ellipse(31, 53, 5, 2, 'b');
      g.set(15, 53, 'o'); g.set(23, 53, 'o'); g.set(27, 53, 'o'); g.set(35, 53, 'o');
      g.set(37, 52, 'o'); g.set(50, 52, 'o');
      g.set(17, 52, 'o'); g.set(21, 52, 'o'); g.set(29, 52, 'o'); g.set(33, 52, 'o'); // claws
      // massive body
      g.ball(31, 37, 23, 15, 'b', 'l', 'd');
      // big rocky earthen dome, nested low onto the back
      g.ball(40, 30, 17, 13, 's', 'p', 'q');
      // moss patches on the dome — organic clumps (flat ellipse + lite speckle)
      g.ellipse(33, 23, 6, 4, 'm'); g.ellipse(33, 22, 3, 2, 'M'); g.set(36, 24, 'M');
      g.ellipse(48, 29, 5, 4, 'm'); g.ellipse(48, 28, 2, 2, 'M');
      g.ellipse(42, 37, 5, 3, 'm'); g.set(41, 36, 'M');
      // broad imposing head fused forward, high crest
      g.ball(15, 30, 15, 14, 'b', 'l', 'd');
      g.ellipse(6, 35, 4, 4, 'b');          // jowl
      g.ellipse(17, 43, 10, 6, 'w');
      g.ellipse(11, 37, 4, 4, 'w');         // chin bridge to belly
      // big leaf crown
      g.line(40, 21, 39, 4, 's', 2);
      g.ellipse(31, 6, 6, 3, 'f'); g.ellipse(47, 7, 6, 3, 'F');
      g.ellipse(39, 3, 5, 3, 'g');
      g.set(25, 5, 'f'); g.set(53, 6, 'F');
      g.outline('o');
      g.seam(['s', 'p', 'q'], ['b', 'l', 'd'], 'o');
      g.seam(['m', 'M'], ['s', 'p', 'q'], 'o');
      g.seam(['w'], ['b', 'l', 'd'], 'o');
      g.seam(['f', 'F', 'g'], ['s', 'p', 'q', 'm', 'M'], 'o');
      g.eye(8, 26, 5, 5); g.eye(18, 26, 5, 5);
      g.set(4, 34, 'o'); g.set(5, 34, 'o');
      g.line(5, 39, 13, 39, 'o', 1);
      g.set(4, 38, 'o'); g.set(14, 38, 'o');
    },
    back(g) {
      // rear (56x48): imposing earthen mossy dome dominant, sturdy legs below
      g.line(18, 38, 18, 46, 'd', 6); g.line(48, 38, 48, 46, 'd', 6);
      g.set(15, 46, 'o'); g.set(21, 46, 'o'); g.set(45, 46, 'o'); g.set(51, 46, 'o');
      g.ball(33, 34, 23, 13, 'b', 'l', 'd');     // body flanks
      g.ball(33, 23, 19, 15, 's', 'p', 'q');     // earthen dome dominant
      g.ellipse(26, 18, 5, 3, 'm'); g.ellipse(26, 17, 2, 2, 'M');
      g.ellipse(40, 21, 5, 3, 'm'); g.ellipse(40, 20, 2, 2, 'M');
      g.ellipse(33, 29, 5, 3, 'm'); g.set(32, 28, 'M');
      g.line(33, 11, 33, 4, 's', 2);
      g.ellipse(26, 5, 6, 3, 'f'); g.ellipse(40, 5, 6, 3, 'F');
      g.ellipse(33, 2, 5, 3, 'g');
      g.outline('o');
      g.seam(['s', 'p', 'q'], ['b', 'l', 'd'], 'o');
      g.seam(['m', 'M'], ['s', 'p', 'q'], 'o');
      g.seam(['f', 'F', 'g'], ['s', 'p', 'q', 'm', 'M'], 'o');
    }
  },
};
