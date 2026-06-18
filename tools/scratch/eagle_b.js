// EAGLE line — direction "eagle_b": TAILLOW/STARLY DYNAMIC RAPTOR
// aquilet -> streagle -> torrentalon
// Side 3/4 forward-leaning river eaglet. Navy/blue plumage, white throat/chest,
// ice accent, hooked orange beak, sharp brow over small fierce eye, folded wing
// with stepped primary SEAMS, layered tail, yellow talons.

module.exports = {
  // ===================================================== STAGE 1: AQUILET ===
  aquilet: {
    pal: {
      o: 'ink', b: 'blu1', d: 'blu0', l: 'blu2', h: 'blu3',
      w: 'white', p: 'pale', i: 'ice2', I: 'ice3',
      y: 'org2', Y: 'org3', t: 'yel1', K: 'white'
    },
    draw(g) {
      // --- TAIL: layered feathers (wide-based wedge), angled down-right and
      // set LOWER than the folded wing so the two masses read separately ---
      g.tri(29, 37, 41, 41, 30, 45, 'd');
      g.line(32, 39, 39, 42, 'l', 1);            // feather split seam (light divide)
      g.line(32, 42, 38, 44, 'l', 1);

      // --- BODY: single egg mass, slight forward lean toward the left ---
      g.ball(23, 31, 11, 11, 'b', 'l', 'd');

      // --- HEAD: sits directly ON the chest, leaning forward (left) ---
      g.ball(16, 15, 10, 9, 'b', 'l', 'd');
      // single swept-back crest: a rounded plume trailing up-right off the
      // crown (one shape, not two ear bumps)
      g.line(20, 8, 26, 6, 'd', 3);              // swept crest body
      g.set(27, 6, 'd'); g.set(28, 7, 'd');      // 2px taper tip
      g.line(20, 7, 25, 5, 'l', 1);              // crest top highlight

      // --- WHITE THROAT + CHEST: bib running down the front ---
      g.ellipse(15, 28, 6, 8, 'w');
      g.ellipse(13, 19, 4, 4, 'w');              // white throat under chin
      // notched feather bottom of the bib
      g.tri(11, 33, 15, 33, 12, 38, 'w');
      g.tri(16, 33, 20, 33, 17, 38, 'w');
      // ice accent dab on the chest
      g.set(15, 26, 'i'); g.set(16, 26, 'i'); g.set(15, 27, 'i');

      // --- FOLDED WING: distinct plate overlapping the body, with a clear
      // shoulder seam + stepped primaries below. ---
      g.ellipse(28, 28, 4, 7, 'd');              // whole folded wing (darker than body)
      g.ellipse(28, 25, 3, 3, 'b');              // shoulder/covert (body-blue) on top
      g.line(25, 23, 30, 22, 'l', 1);            // covert highlight on shoulder
      // 2 stepped primary feather tips: short angled strokes (overlap reads)
      g.line(25, 32, 31, 29, 'l', 1);            // feather edge 1 (angled down-left)
      g.line(26, 37, 31, 34, 'l', 1);            // feather edge 2
      g.set(30, 40, 'd'); g.set(29, 41, 'd');    // 2px tip taper

      // --- LEGS + TALONS: short thick legs into yellow feet ---
      g.line(14, 41, 14, 44, 'd', 3);            // L leg
      g.line(24, 42, 24, 45, 'd', 3);            // R leg
      g.rect(11, 44, 7, 2, 'y');                 // L foot
      g.rect(21, 45, 7, 2, 'y');                 // R foot
      g.set(11, 46, 'Y'); g.set(14, 46, 'Y'); g.set(17, 46, 'Y'); // L claws
      g.set(21, 47, 'Y'); g.set(24, 47, 'Y'); g.set(27, 47, 'Y'); // R claws

      // --- BEAK: hooked orange raptor wedge, curling down at the tip ---
      g.tri(4, 13, 12, 11, 12, 17, 'y');
      g.set(4, 15, 'Y'); g.set(5, 16, 'Y');      // hook curl down
      g.set(6, 16, 'y');

      g.outline('o');
      g.seam(['d'], ['b', 'l'], 'o');            // wing+tail read as own dark masses
      g.seam(['w'], ['b', 'l', 'd'], 'd');       // bib edge
      g.seam(['y', 'Y'], ['w', 'b', 'l'], 'o');  // beak edge

      // --- FIERCE EYE: small almond with brow, on the head ---
      g.eyeAlmond(9, 11, 5, 4);
      g.line(8, 10, 13, 9, 'o', 1);              // brow stroke
    },
    back(g) {
      // navy back, crown/nape fluff, folded wings, layered tail feathers
      g.ball(27, 24, 14, 14, 'b', 'l', 'd');
      g.ellipse(27, 9, 4, 3, 'd');               // nape fluff
      g.ellipse(25, 6, 2, 2, 'l');
      g.ellipse(15, 28, 5, 8, 'd');              // folded wing L
      g.ellipse(39, 28, 5, 8, 'd');              // folded wing R
      g.tri(22, 36, 28, 36, 24, 44, 'd');        // tail feathers
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
      y: 'org2', Y: 'org3', t: 'yel1', K: 'white'
    },
    draw(g) {
      // Bigger, fiercer, more upright raptor. Wing starting to lift slightly.
      // --- TAIL: layered fan set lower than the wing, angled down-right ---
      g.tri(31, 38, 45, 43, 32, 47, 'd');
      g.line(34, 40, 42, 44, 'l', 1);            // feather split (light divide)
      g.line(34, 43, 41, 46, 'l', 1);

      g.ball(24, 31, 13, 12, 'b', 'l', 'd');     // body

      g.ball(16, 14, 11, 10, 'b', 'l', 'd');     // head on chest
      // single swept-back crest plume (longer than stage 1)
      g.line(20, 6, 28, 3, 'd', 3);              // swept crest body
      g.set(29, 3, 'd'); g.set(30, 4, 'd');      // 2px taper tip
      g.line(20, 5, 27, 2, 'l', 1);              // crest top highlight

      // bigger white bib
      g.ellipse(15, 29, 7, 9, 'w');
      g.ellipse(12, 19, 4, 4, 'w');
      g.tri(9, 35, 14, 35, 11, 41, 'w');
      g.tri(15, 35, 20, 35, 17, 41, 'w');
      g.set(15, 26, 'i'); g.set(16, 26, 'i'); g.set(15, 27, 'i'); g.set(16, 27, 'i');

      // folded wing: distinct dark plate overlapping body, shoulder covert on
      // top, stepped primary feather divides below
      g.ellipse(30, 29, 5, 9, 'd');              // whole folded wing (darker)
      g.ellipse(30, 25, 4, 4, 'b');              // shoulder/covert (body-blue)
      g.line(26, 22, 33, 21, 'l', 1);            // covert highlight
      // 2 clean stepped primary feather tips: short angled strokes
      g.line(26, 32, 34, 29, 'l', 1);            // feather edge 1
      g.line(27, 37, 34, 34, 'l', 1);            // feather edge 2
      g.set(33, 41, 'd'); g.set(32, 42, 'd');    // 2px taper

      // hooked beak — bigger
      g.tri(3, 12, 12, 10, 12, 18, 'y');
      g.set(3, 15, 'Y'); g.set(4, 16, 'Y'); g.set(5, 17, 'Y');
      g.set(6, 16, 'y');

      // legs + talons
      g.line(14, 42, 14, 45, 'd', 3);
      g.line(25, 43, 25, 46, 'd', 3);
      g.rect(11, 45, 8, 2, 'y');
      g.rect(22, 46, 8, 2, 'y');
      g.set(11, 47, 'Y'); g.set(15, 47, 'Y'); g.set(18, 47, 'Y');
      g.set(22, 48, 'Y'); g.set(26, 48, 'Y'); g.set(29, 48, 'Y');

      g.outline('o');
      g.seam(['d'], ['b', 'l'], 'o');            // wing+tail read as own masses
      g.seam(['w'], ['b', 'l', 'd'], 'd');
      g.seam(['y', 'Y'], ['w', 'b', 'l'], 'o');

      g.eyeAlmond(8, 10, 5, 4);
      g.line(7, 9, 13, 8, 'o', 1);
    },
    back(g) {
      g.ball(28, 24, 16, 15, 'b', 'l', 'd');
      g.ellipse(28, 8, 4, 3, 'd');
      g.ellipse(26, 4, 2, 2, 'l');
      g.ellipse(14, 27, 5, 10, 'd');
      g.ellipse(42, 27, 5, 10, 'd');
      g.tri(22, 37, 28, 37, 24, 46, 'd');
      g.tri(28, 37, 34, 37, 31, 46, 'b');
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
      y: 'org2', Y: 'org3', t: 'yel1', K: 'white'
    },
    draw(g) {
      // FLYING stage: storm-blue, wings half-spread, swept UP and OUT in a
      // powerful deltoid pose. Each wing = a wide plate (light) over a
      // stepped primaries mass (dark), feather tips at the trailing edge.
      // left wing (our left) — angled up-left from the shoulder
      g.tri(22, 24, 3, 18, 7, 32, 'l');          // upper plate, leading edge up-left
      g.tri(7, 32, 22, 24, 22, 34, 'l');         // fill toward shoulder
      g.tri(3, 18, 7, 32, 14, 38, 'd');          // primaries mass (darker) trailing down
      g.tri(7, 32, 14, 38, 22, 34, 'd');
      g.line(8, 24, 20, 28, 'h', 1);             // covert divide (sky highlight)
      g.line(6, 30, 17, 33, 'h', 1);             // primary feather divide 1
      g.line(9, 34, 18, 36, 'h', 1);             // primary feather divide 2
      // right wing — mirror
      g.tri(34, 24, 53, 18, 49, 32, 'l');
      g.tri(49, 32, 34, 24, 34, 34, 'l');
      g.tri(53, 18, 49, 32, 42, 38, 'd');
      g.tri(49, 32, 42, 38, 34, 34, 'd');
      g.line(36, 28, 48, 24, 'h', 1);
      g.line(39, 33, 49, 30, 'h', 1);
      g.line(38, 36, 46, 34, 'h', 1);

      // --- TAIL: clean layered fan peeking below the body ---
      g.tri(22, 45, 34, 45, 28, 55, 'd');
      g.line(26, 47, 26, 53, 'b', 1);
      g.line(30, 47, 30, 53, 'b', 1);

      // --- BODY ---
      g.ball(28, 33, 12, 13, 'b', 'l', 'd');

      // --- HEAD on chest, fierce forward ---
      g.ball(28, 15, 11, 10, 'b', 'l', 'd');
      // single swept-back crest plume trailing up-right (matches earlier stages)
      g.line(32, 7, 39, 4, 'd', 3);              // swept crest body
      g.set(40, 4, 'd'); g.set(41, 5, 'd');      // 2px taper tip
      g.line(32, 6, 38, 3, 'l', 1);              // crest top highlight

      // --- WHITE CHEST bib ---
      g.ellipse(28, 33, 7, 10, 'w');
      g.ellipse(28, 22, 5, 4, 'w');
      g.tri(23, 41, 28, 41, 25, 47, 'w');
      g.tri(28, 41, 33, 41, 31, 47, 'w');
      g.set(27, 30, 'i'); g.set(28, 30, 'i'); g.set(29, 30, 'i'); g.set(28, 31, 'i');

      // --- HOOKED BEAK forward-left ---
      g.tri(18, 14, 27, 12, 27, 19, 'y');
      g.set(18, 16, 'Y'); g.set(19, 17, 'Y');
      g.set(20, 16, 'y');

      // --- LEGS + TALONS gripping ---
      g.line(24, 44, 24, 50, 'd', 4);
      g.line(33, 44, 33, 50, 'd', 4);
      g.rect(20, 50, 8, 2, 'y');
      g.rect(30, 50, 8, 2, 'y');
      g.set(20, 52, 'Y'); g.set(24, 52, 'Y'); g.set(27, 52, 'Y');
      g.set(30, 52, 'Y'); g.set(34, 52, 'Y'); g.set(37, 52, 'Y');

      g.outline('o');
      g.seam(['d'], ['l', 'b'], 'd');            // primaries vs upper plate
      g.seam(['l'], ['b'], 'd');                 // wings vs body
      g.seam(['w'], ['b', 'l', 'd'], 'd');
      g.seam(['y', 'Y'], ['w', 'b', 'l'], 'o');

      g.eyeAlmond(22, 11, 5, 4);
      g.line(21, 10, 27, 9, 'o', 1);
    },
    back(g) {
      g.ball(28, 26, 16, 15, 'b', 'l', 'd');
      g.tri(20, 16, 4, 28, 18, 34, 'd');         // spread wings from back
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
