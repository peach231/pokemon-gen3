# Pokéram starter redesign — shared design brief

You are redesigning ONE evolution line of starter creature sprites for a GBA-style
Pokémon-clone. The art is generated from hand-written **shape recipes** that a
rasterizer turns into clean pixel sprites. Your job: produce a recipe for your
assigned line that looks like a **real, professional Pokémon sprite** — a cohesive
single creature, not a pile of blobs.

The **panther** and **ram** starter lines in this game are already excellent and are
your QUALITY BAR. The **turtle** and **eagle** lines look fake and must be rebuilt.

---

## How the recipe system works

Each recipe is a plain object with a palette map and a `draw(g)` function (plus a
`back(g)` for the rear view). `g` is a drawing Grid. Default canvas is 48×48
(origin top-left, x→right, y→down). You may set `w`/`h` larger (e.g. 56×56) for a
big final-stage creature. **Draw the creature filling the canvas with its feet near
the bottom rows** (the game bottom-aligns sprites to a baseline).

### Drawing primitives (methods on `g`)

- `g.ellipse(cx, cy, rx, ry, ch)` — filled flat ellipse.
- `g.ball(cx, cy, rx, ry, base, lite, dark, opts?)` — **shaded sphere**, light from
  upper-left. `lite` = highlight char (or null), `dark` = shadow char (or null).
  This is your main tool for heads, bodies, shells. Gives instant volume.
- `g.tri(x0,y0,x1,y1,x2,y2,ch)` — filled triangle. ⚠️ **Thin/pointy triangles on
  the silhouette bake into UGLY SERRATED SPIKES** after outline+sel-out. Only use
  triangles with a WIDE base (≥6px wide) — e.g. a tail fan, a beak wedge, a big
  spread wing. NEVER use thin triangles for limbs, small spikes, or feather tips.
- `g.line(x0,y0,x1,y1,ch,thick)` — thick stroke. **This is the correct way to draw
  limbs, tails, stems** (use thick 3–4). Rounded and clean. Also used for interior
  feather SEAMS (thick 1).
- `g.rect(x0,y0,w,h,ch)` — filled rectangle (legs, feet, hooves).
- `g.ring(cx,cy,rx,ry,ch,thickness,fromDeg,toDeg)` — elliptical arc/ring (horns,
  collars, shell rims, curls). `thickness` 0–1 normalized.
- `g.outline('o')` — call ONCE, after ALL fills, before features. Adds the 1px ink
  silhouette outline.
- `g.seam(chA, chB, ch)` — 1px interior seam where region A touches region B (head
  over shell, chest over body). `chA`/`chB` may be arrays of chars. Call AFTER
  `outline`. Essential for making overlapping masses read as separate parts.
- Eyes — call AFTER outline, self-contained:
  - `g.eye(x,y,w,h)` — classic cute solid-dark eye + one glint. Keep SMALL (4×4 or
    5×5). **Big saucer eyes read as a cheap plush toy — keep them small.**
  - `g.eyeAlmond(x,y,w,h,pupil?)` — fierce predator eye with a flat brow on top.
    **Use this for raptors and cats.**
  - `g.eyeSclera(x,y,w,h,iris?)` — white eyeball + dark pupil.
  - `g.eyeDot(cx,cy,r)` / `g.eyeSleepy(x,y,w)`.
- `g.set(x,y,ch)` — single pixel (nostrils, mouth dots, claws, freckles).

Reserved chars: `o` = ink outline. `K` = eye glint (auto-white). `W` = sclera
(auto-white). Light is **always upper-left**.

### Sel-out shading (automatic at bake time)

Every fill pixel touching the outline on its **bottom or right** auto-darkens to a
darker shade. So: don't hand-shade lower/right rims — the `ball()` lite/dark handles
upper-left light, and sel-out handles the lower-right. Keep each palette to 8–12
colors. The preview renderer applies this exact pass, so what you see IS the result.

---

## HARD RULES (read twice)

1. **One creature = one dominant connected mass.** The head must sit DIRECTLY on the
   body — no stalk neck, and NEVER two equal-size blobs glued side-by-side. The
   single biggest failure of the current turtle is that its head and shell render as
   two separate balls. Heads emerge FROM the body/shell.
2. **Limbs are `g.line` (thick 3–4), never thin triangles.**
3. **Eyes small.** `eyeAlmond` for fierce, `eye` (4–5px) for cute.
4. **Wings/feathers: use interior SEAM lines** (`g.line(...,1)` inside a wing mass),
   not flat cardboard triangles sticking off the body.
5. Only 2px tip tapers on tails/leaves/crests.
6. Feet/talons must be readable: a small `rect` + claw `set` dots.
7. **Evolution cohesion:** the 3 stages must clearly be the same species growing up.
   Share silhouette DNA, palette, and signature features across stages.
8. **DO NOT edit `tools/recipes.js` and DO NOT run `tools/bake_mons.js`.** Those are
   shared files; other agents are working in parallel. You work ONLY in your own
   scratch file and preview with `render_one.js` (below).

---

## Master palette (use these names in your `pal` map)

Neutrals: `ink`#1a1c2c `dgry`#3a3a4a `gry`#6e6e84 `lgry`#a8a8bc `pale`#d8d8e4 `white`#f4f4f4
Foliage green: `grn0`#14402e `grn1`#1f6e44 `grn2`#3fa757 `grn3`#7ed27d
Grass green: `leaf0`#3c7e4c `leaf1`#58aa5c `leaf2`#7cc86c `leaf3`#a0e08c
Blue: `blu0`#1a3a6e `blu1`#2860c0 `blu2`#4a90e0 `blu3`#8cc8f0   Sky: `sky0`#6cb0e4 `sky1`#a8d8f8
Brown: `brn0`#3c2a20 `brn1`#6e4a30 `brn2`#9c6e48 `brn3`#c89868   Tan: `tan0`#e8c898 `tan1`#f4e0b8
Stone/steel: `stn0`#2e2e3e `stn1`#54546c `stn2`#8a8aa4 `stn3`#c2c2d6
Orange: `org0`#8e3a1a `org1`#d06028 `org2`#f09838 `org3`#f8cc70   Yellow: `yel0`#b08818 `yel1`#e8c038 `yel2`#f8e878
Red: `red0`#5a1a28 `red1`#9e2a3a `red2`#d04a48 `red3`#f08060
Skin: `skn0`#8a4a30 `skn1`#d08858 `skn2`#f0b888 `skn3`#fce0c0
Ice/cyan: `ice0`#2a6a8e `ice1`#5cb4cc `ice2`#a0e0e8 `ice3`#e0f8f8
(Purple `pur0-3`, pink `pnk0-2` also exist.)

---

## EXEMPLARS — the quality bar (study these; they read as real Pokémon)

```js
// EMBERPAW — fire panther cub. Sleek SINGLE body mass, head merges into body,
// amber almond eyes, flame tail, ember chest patch. Clean silhouette.
R.emberynx = {
  pal: { o: 'ink', b: 'dgry', l: 'gry', s: 'stn0', e: 'org2', f: 'yel2', m: 'stn2', K: 'yel2' },
  draw(g) {
    g.line(35, 34, 42, 27, 'b', 2); g.line(42, 27, 40, 21, 'b', 2);   // tail
    g.ellipse(40, 17, 3, 4, 'f'); g.set(40, 18, 'e'); g.set(39, 19, 'e'); // ember tip
    g.ball(26, 33, 11, 10, 'b', 'l', 's');                            // body
    g.ellipse(11, 9, 4, 4, 'b'); g.ellipse(25, 8, 4, 4, 'b');         // ears
    g.set(11, 9, 'e'); g.set(12, 9, 'e'); g.set(25, 8, 'e'); g.set(26, 8, 'e');
    g.ball(17, 17, 10, 9, 'b', 'l', 's');                            // head ON body
    g.ellipse(13, 22, 5, 4, 'm');                                     // muzzle
    g.ellipse(21, 30, 3, 3, 'e'); g.set(21, 29, 'f');                 // chest patch
    g.line(17, 36, 17, 42, 'b', 3); g.line(23, 37, 23, 43, 'b', 3);  // forepaws
    g.set(16, 43, 'e'); g.set(17, 43, 'e'); g.set(22, 44, 'e'); g.set(23, 44, 'e');
    g.outline('o');
    g.seam(['m'], ['b', 'l', 's'], 's');
    g.eyeAlmond(10, 14, 6, 4); g.eyeAlmond(19, 14, 6, 4);            // amber eyes
    g.set(12, 21, 'o'); g.set(13, 21, 'o'); g.line(12, 24, 15, 25, 'o', 1);
  },
  back(g) { /* dark haunches, round ears, ember tail tip — keep simple but coherent */
    g.line(44, 24, 48, 14, 'b', 2); g.ellipse(48, 10, 3, 4, 'f');
    g.ball(28, 28, 15, 12, 'b', 'l', 's');
    g.ellipse(18, 8, 4, 4, 'b'); g.ellipse(34, 7, 4, 4, 'b');
    g.set(18, 8, 'e'); g.set(34, 7, 'e');
    g.ball(27, 16, 12, 10, 'b', 'l', 's');
    g.outline('o');
    g.line(24, 30, 29, 30, 's', 1); g.line(26, 34, 30, 34, 's', 1);
  }
};

// PEBBLAMB — rock lamb. Fluffy wool CLOUD as one mass with scallop bumps, a face
// window cut into it, horn nubs, sturdy legs, embedded pebbles. Cohesive + cute.
R.pebblamb = {
  pal: { o: 'ink', w: 'pale', l: 'lgry', s: 'skn2', t: 'skn1', n: 'brn2', p: 'stn2', K: 'white' },
  draw(g) {
    g.rect(14, 35, 5, 9, 'n'); g.rect(21, 36, 5, 9, 'n');            // legs first
    g.rect(29, 36, 5, 9, 'n'); g.rect(35, 35, 5, 8, 'n');
    g.ball(25, 24, 15, 13, 'w', null, 'l');                          // wool mass
    g.ellipse(12, 17, 5, 5, 'w'); g.ellipse(22, 12, 6, 5, 'w');      // scallop bumps
    g.ellipse(33, 14, 5, 5, 'w'); g.ellipse(39, 23, 4, 5, 'w');
    g.ellipse(37, 33, 5, 4, 'l'); g.ellipse(13, 33, 5, 4, 'l');
    g.ellipse(10, 16, 3, 3, 'n'); g.ellipse(24, 10, 3, 3, 'n');      // horn nubs
    g.ball(16, 24, 7, 6, 's', null, 't');                           // face window
    g.outline('o');
    g.seam(['s', 't'], ['w', 'l'], 'o'); g.seam(['n'], ['w', 'l'], 'o');
    g.line(11, 23, 14, 23, 'o', 1); g.line(18, 23, 21, 23, 'o', 1);  // sleepy eyes
    g.set(11, 22, 'o'); g.set(14, 22, 'o'); g.set(18, 22, 'o'); g.set(21, 22, 'o');
    g.line(14, 27, 16, 28, 'o', 1);
    g.rect(30, 19, 2, 2, 'p'); g.rect(20, 15, 2, 2, 'p'); g.rect(34, 27, 2, 2, 'p');
  },
  back(g) {
    g.rect(16, 30, 5, 9, 'n'); g.rect(35, 30, 5, 9, 'n');
    g.ball(28, 20, 17, 14, 'w', null, 'l');
    g.ellipse(15, 10, 5, 4, 'w'); g.ellipse(28, 7, 6, 4, 'w'); g.ellipse(41, 10, 5, 4, 'w');
    g.ellipse(18, 6, 3, 3, 'n'); g.ellipse(38, 5, 3, 3, 'n');
    g.outline('o'); g.seam(['n'], ['w', 'l'], 'o');
    g.rect(24, 16, 2, 2, 'p'); g.rect(33, 24, 2, 2, 'p');
  }
};
```

---

## The two lines being redesigned (current = BAD, to be replaced)

**TURTLE line (grass):** keys `sproutle` (stage1) → `verdoise` (stage2) → `gaiadome`
(stage3, gains GROUND type). Current failure: the head and shell render as two
SEPARATE balls glued side-by-side — a green ball next to a brown ball. Reads as a
green-headed potato/acorn, not a turtle. Limbs are tiny disconnected nubs.

**EAGLE line (water):** keys `aquilet` (stage1) → `streagle` (stage2) →
`torrentalon` (stage3, gains FLYING type). It is a *river eaglet that fishes from
rocks before it can fly.* Current failure: featureless blue egg body; flat triangle
"cardboard cutout" wings; reads as a generic bluebird/penguin, not an eaglet. No
layered feathers, no raptor presence, awkward stance.

### TURTLE target
A real grass-turtle starter. Models: **Squirtle** (upright biped — big round head
emerging from a shell-wrapped torso, cream plastron framed by a shell rim, stubby
arms in front, splayed feet, curly tail) and **Turtwig** (low chunky quadruped
tortoise — domed shell on the back, sturdy head forward, four legs, a sprout/leaf as
the grass cue). The shell + body + head must read as ONE animal. Stage 1 cute &
small, stage 2 sturdier, stage 3 imposing/earthen (ground type — heavier, mossy,
rocky shell).

### EAGLE target
A real water-type EAGLET. Models: **Rufflet/Braviary** (baby eagle — fierce brow,
hooked beak, feathered chest, taloned feet), **Rowlet** (compact round body with
crisp feather layering), **Taillow/Starly** (dynamic raptor posture with stepped
wing primaries). Give it: a HOOKED orange raptor beak, fierce eyes (`eyeAlmond`)
under a brow, a folded wing with visible stepped feather SEAMS (interior seam lines,
NOT flat triangles), a feathered/notched chest, yellow TALONS with claw dots. Blue
plumage + white belly + orange beak/talons + small ice/cyan water accent. Stage 3
gains flying — bigger spread wings, but still clean (wide wing masses with seam
feathers, not thin spikes).

---

## Your workflow (DO THIS)

1. Read this brief. Read `tools/spritegen.js` if you want the exact primitive math.
2. Create your scratch recipe file at the path given in your task (e.g.
   `tools/scratch/turtle_a.js`). It must `module.exports` an object keyed by the 3
   stage keys for your line, each `{ pal, w?, h?, draw(g){...}, back(g){...} }`.
   Skeleton:
   ```js
   module.exports = {
     sproutle: { pal: { o:'ink', /* ... */ }, draw(g){ /* ... */ }, back(g){ /* ... */ } },
     verdoise: { pal: { /* ... */ }, draw(g){ /* ... */ }, back(g){ /* ... */ } },
     gaiadome: { w:56, h:56, pal: { /* ... */ }, draw(g){ /* ... */ }, back(g){ /* ... */ } },
   };
   ```
3. Render a preview (run from the pokeram root):
   ```
   node tools/render_one.js tools/scratch/<id>.js <key1,key2,key3> tools/scratch/<id>_preview.png 8 front
   ```
   (Use the actual keys for your line, comma-separated, stage order.)
4. **READ the preview PNG with the Read tool.** Look hard. Write yourself 2–3
   SPECIFIC critiques (e.g. "head is too small vs shell", "wing reads as a spike",
   "eyes too big", "legs detached"). Fix them in the scratch file. Re-render.
5. **Repeat step 3–4 at least 5 times.** Do not stop at the first render. Your final
   render must genuinely look like a real Pokémon sprite that fits beside the panther
   and ram exemplars. Stages must look like one evolving species.
6. When satisfied, render `both` (front+back) once to sanity-check the backs:
   ```
   node tools/render_one.js tools/scratch/<id>.js <keys> tools/scratch/<id>_both.png 8 both
   ```
7. Return your result via the structured schema: the line, your id, the final
   `_preview.png` path, the number of iteration rounds you did, the FULL recipe code
   (ready to paste — `R.key = {...}` for all three stages), and an honest
   self-assessment of what's strong and what could still improve.

Remember: cohesive single creature, small eyes, no triangle limbs/spikes, layered
feather seams, integrated head-on-body. Make it look REAL.
