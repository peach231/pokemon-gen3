// pokemon-gen3 — maps_endgame.js
// Post-game questline: beat the Champion -> Hall of Fame induction -> the Titan
// Crossroads forks to two themed legend lairs (Kyogre / Groudon). Catch ONE and
// the other seals; the Sky Pillar then opens for Rayquaza (gated to a strong
// team). After Rayquaza, home for a word from Mom, then the Hall of Fame Arena
// against past champions (one wields the titan you didn't take).

(function () {
  G.MAPS = G.MAPS || {};
  G.EVENTS = G.EVENTS || {};
  var pad = G.padRows;

  // ---- custom legends (compose from existing tiles) ----------------------
  var FORK  = { '.': 'cavefloor', '#': 'cavewall', '*': 'rock', 'c': 'crystal', '~': 'water', 'Z': 'deco_cinder' };
  var SEA   = { '.': 'cavefloor', '#': 'cavewall', '~': 'deepwater', '*': 'rock', 'c': 'crystal' };
  var MAGMA = { '.': 'cavefloor', '#': 'cavewall', 'L': 'lava', 'Z': 'deco_cinder', '*': 'rock', 'c': 'crystal' };

  // ===== Titan Crossroads (post-HoF hub) =================================
  G.MAPS.legendfork = {
    id: 'legendfork', name: 'Titan Crossroads', w: 15, h: 11,
    music: 'champion', battleBg: 'cave', base: 'cavefloor', legend: FORK,
    ground: pad([
      '###.###.###.###',
      '#.....c.c.....#',
      '#.............#',
      '#..*.......*..#',
      '#.............#',
      '#.....Z.Z.....#',
      '#.............#',
      '#.....*.*.....#',
      '######...######',
      '######...######',
      '###############'
    ], 15, 11, '#'),
    warps: [
      { x: 3, y: 0, to: 'seapath', tx: 7, ty: 13, dir: 'up' },
      { x: 7, y: 0, to: 'skypillar', tx: 7, ty: 15, dir: 'up' },
      { x: 11, y: 0, to: 'magmapath', tx: 7, ty: 13, dir: 'up' },
      { x: 7, y: 9, to: 'crownsummit', tx: 10, ty: 9, dir: 'down' }
    ],
    signs: [
      { x: 3, y: 1, text: 'WEST — the roar of the deep sea. KYOGRE slumbers below.' },
      { x: 7, y: 1, text: 'NORTH — a pillar to the sky. Sealed until a titan kneels to you.' },
      { x: 11, y: 1, text: 'EAST — the breath of magma. GROUDON slumbers below.' }
    ],
    npcs: [
      // the unchosen lair seals once you claim a titan; the Sky Pillar opens
      { id: 'seal_sea', x: 3, y: 0, sprite: 'prof', dir: 'down', ifFlag: 'ev_groudon', dialog: ['The sea has gone still. You chose the land — KYOGRE will not stir for you now.'] },
      { id: 'seal_mag', x: 11, y: 0, sprite: 'prof', dir: 'down', ifFlag: 'ev_kyogre', dialog: ['The magma has cooled. You chose the sea — GROUDON will not stir for you now.'] },
      { id: 'seal_sky', x: 7, y: 0, sprite: 'prof', dir: 'down', unlessFlag: 'primal', dialog: ['The way to the Sky Pillar is sealed. Tame a titan of sea or land first.'] }
    ],
    scripts: []
  };

  // ===== shared boss helper: catch sets the flag ONLY on success (retry-safe)
  function bossEvent(key, flag, intro, level, opts) {
    opts = opts || {};
    return function* () {
      if (G.flags[flag]) { yield { t: 'text', s: opts.after || ('Where ' + G.SPECIES[key].name + ' stood, the air still trembles.') }; return; }
      if (opts.gate) { var msg = opts.gate(); if (msg) { yield { t: 'text', s: msg }; return; } }
      for (var i = 0; i < intro.length; i++) yield { t: 'text', s: intro[i] };
      yield { t: 'sfx', id: 'superEff' };
      yield { t: 'fn', fn: function () {
        G.player.dexSeen[key] = 1;
        var wild = G.makeMon(key, level);
        G.startBattle(
          { party: G.player.party, foes: [wild], wild: true },
          { bg: opts.bg || 'cave', music: 'champion', onEnd: function (r, b) {
            G.afterBattle(r, b);
            if (r === 'caught') {
              G.flags[flag] = 1;
              if (opts.primal) G.flags.primal = 1;
              if (opts.onCatch) opts.onCatch();
              else G.world.loadMap(G.world.mapId, G.world.player.x, G.world.player.y, G.world.player.dir);
            } else if (r !== 'lose') {
              // won-without-catching or fled: stay in the lair to try again
              // (a loss whites you out to the last center via afterBattle)
              G.world.loadMap(G.world.mapId, G.world.player.x, G.world.player.y, G.world.player.dir);
            }
          } }
        );
      } };
    };
  }

  G.EVENTS.kyogreBoss = bossEvent('kyogre', 'ev_kyogre', [
    'The flooded cavern heaves. Rain falls from solid stone.',
    'KYOGRE, the sea basin titan, rises to test the new Champion!'
  ], 63, { bg: 'water', primal: true });

  G.EVENTS.groudonBoss = bossEvent('groudon', 'ev_groudon', [
    'The chamber splits and glows with deep magma light.',
    'GROUDON, the continent titan, hauls itself up to test you!'
  ], 63, { bg: 'cave', primal: true });

  G.EVENTS.rayquazaBoss = bossEvent('rayquaza', 'ev_rayquaza', [
    'The sky tears open atop the Pillar. A vast green serpent uncoils.',
    'RAYQUAZA, lord of the sky, descends to judge you!'
  ], 60, {
    bg: 'water',
    onCatch: function () {
      G.world.warpTo({ to: 'playerhome', tx: 5, ty: 4, dir: 'left' });
    }
  });

  // teleport pad back to the Crossroads (active once a titan is caught)
  G.EVENTS.teleFork = function* () {
    yield { t: 'sfx', id: 'doorOpen' };
    yield { t: 'fn', fn: function () { G.world.warpTo({ to: 'legendfork', tx: 7, ty: 8, dir: 'down' }); } };
  };

  // ===== Marine Cavern (Kyogre) =========================================
  G.MAPS.seapath = {
    id: 'seapath', name: 'Marine Cavern', w: 15, h: 15,
    music: 'cave', battleBg: 'water', base: 'cavefloor', legend: SEA,
    // a flooded serpentine trench — water walls you must wind between (dive deep
    // and snake your way up to the sea titan).
    ground: pad([
      '###############',
      '#.............#',
      '#~~~~~~~~~~~~.#',
      '#.............#',
      '#.~~~~~~~~~~~~#',
      '#.............#',
      '#~~~~~~~~~~~~.#',
      '#.............#',
      '#.~~~~~~~~~~~~#',
      '#.............#',
      '#~~~~~~~~~~~~.#',
      '#.............#',
      '#.~~~~~~~~~~~~#',
      '#.............#',
      '###############'
    ], 15, 15, '#'),
    warps: [],
    signs: [{ x: 1, y: 13, text: 'A drowned trench. The water remembers an ancient rage. Wind your way down.' }],
    npcs: [
      { x: 7, y: 1, sprite: 'mon_kyogre', obj: true, unlessFlag: 'ev_kyogre', event: 'kyogreBoss' }
    ],
    scripts: [
      { x: 7, y: 1, ifFlag: 'ev_kyogre', run: 'teleFork' }
    ],
    encounters: { rate: 0.14, table: [
      { sp: 'tentacruel', min: 52, max: 56 }, { sp: 'sharpedo', min: 52, max: 56 },
      { sp: 'gyarados', min: 53, max: 57 }, { sp: 'wailord', min: 54, max: 58 },
      { sp: 'kingdra', min: 54, max: 58 }, { sp: 'lanturn', min: 52, max: 56 },
      { sp: 'starmie', min: 53, max: 57 }, { sp: 'walrein', min: 53, max: 57 },
      { sp: 'crawdaunt', min: 52, max: 56 }, { sp: 'relicanth', min: 53, max: 57 },
      { sp: 'milotic', min: 55, max: 58, w: 8 }
    ] }
  };

  // ===== Magma Chamber (Groudon) ========================================
  G.MAPS.magmapath = {
    id: 'magmapath', name: 'Magma Chamber', w: 15, h: 15,
    music: 'cave', battleBg: 'cave', base: 'cavefloor', legend: MAGMA,
    // a raised rock causeway across a sea of molten lava — the lava is lower and
    // impassable; pick your way up the narrow ledges to the land titan.
    ground: pad([
      'LLLLLLLLLLLLLLL',
      'L.............L',
      'LLLLLLLLLLLLL.L',
      'L.............L',
      'L.LLLLLLLLLLLLL',
      'L.............L',
      'LLLLLLLLLLLLL.L',
      'L.............L',
      'L.LLLLLLLLLLLLL',
      'L.............L',
      'LLLLLLLLLLLLL.L',
      'L.............L',
      'L.LLLLLLLLLLLLL',
      'L.............L',
      'LLLLLLLLLLLLLLL'
    ], 15, 15, 'L'),
    warps: [],
    signs: [{ x: 1, y: 13, text: 'A molten forge. Only the raised ledges are safe — the rest is living fire.' }],
    npcs: [
      { x: 7, y: 1, sprite: 'mon_groudon', obj: true, unlessFlag: 'ev_groudon', event: 'groudonBoss' }
    ],
    scripts: [
      { x: 7, y: 1, ifFlag: 'ev_groudon', run: 'teleFork' }
    ],
    encounters: { rate: 0.14, table: [
      { sp: 'camerupt', min: 52, max: 56 }, { sp: 'magcargo', min: 52, max: 56 },
      { sp: 'torkoal', min: 52, max: 56 }, { sp: 'golem', min: 53, max: 57 },
      { sp: 'aggron', min: 54, max: 58 }, { sp: 'claydol', min: 53, max: 57 },
      { sp: 'donphan', min: 53, max: 57 }, { sp: 'rhydon', min: 54, max: 58 },
      { sp: 'sandslash', min: 52, max: 56 }, { sp: 'weezing', min: 52, max: 56 },
      { sp: 'flygon', min: 55, max: 58, w: 8 }
    ] }
  };

  // ===== Sky Pillar (Rayquaza) ==========================================
  G.MAPS.skypillar = {
    id: 'skypillar', name: 'Sky Pillar', w: 15, h: 16,
    music: 'champion', battleBg: 'water', base: 'water', legend: G.LEG_EXT,
    ground: pad([
      '~~~~~~~~~~~~~~~',
      '~~~~~~123~~~~~~',
      '~~~~~~456~~~~~~',
      '~~~~~~WNW~~~~~~',
      '~~~%%%%%%%%%~~~',
      '~~%%%%%%%%%%%~~',
      '~~%%g%%%%%g%%~~',
      '~~%%%%%%%%%%%~~',
      '~~%%g%%*%%g%%~~',
      '~~~%%%%%%%%%~~~',
      '~~~~%%%%%%%~~~~',
      '~~~~~%%%%%~~~~~',
      '~~~~~~%g%~~~~~~',
      '~~~~~~%%%~~~~~~',
      '~~~~~~%%%~~~~~~',
      '~~~~~~%%%~~~~~~'
    ], 15, 16, '~'),
    warps: [],
    signs: [{ x: 8, y: 3, text: 'SKY PILLAR — the sky dragon coils at its peak. Bring a seasoned team (around Lv50+) for the fight of your life.' }],
    npcs: [
      { x: 7, y: 4, sprite: 'mon_rayquaza', obj: true, unlessFlag: 'ev_rayquaza', event: 'rayquazaBoss' }
    ],
    scripts: [],
    encounters: { rate: 0.13, table: [
      { sp: 'altaria', min: 55, max: 60 }, { sp: 'crobat', min: 55, max: 60 },
      { sp: 'swellow', min: 55, max: 59 }, { sp: 'claydol', min: 56, max: 60 },
      { sp: 'golbat', min: 54, max: 58 }, { sp: 'tropius', min: 55, max: 59 },
      { sp: 'aggron', min: 56, max: 61 }, { sp: 'flygon', min: 57, max: 62, w: 10 },
      { sp: 'salamence', min: 58, max: 62, w: 6 }
    ] }
  };

  // ===== Hall of Fame Arena (past champions) ============================
  G.MAPS.hoffarena = {
    id: 'hoffarena', name: 'Hall of Fame Arena', w: 11, h: 16,
    music: 'champion', battleBg: 'indoor', base: 'gfloor', legend: G.LEG_INT,
    ground: pad([
      'IIIIIIIIIII',
      'GGGGGRGGGGG',
      'GGGGGRGGGGG',
      'GUGGGRGGGUG',
      'GGGGGRGGGGG',
      'GGGGGRGGGGG',
      'GUGGGRGGGUG',
      'GGGGGRGGGGG',
      'GGGGGRGGGGG',
      'GUGGGRGGGUG',
      'GGGGGRGGGGG',
      'GGGGGRGGGGG',
      'GUGGGRGGGUG',
      'GGGGGRGGGGG',
      'GGGGGRGGGGG',
      'GGGGGmGGGGG'
    ], 11, 16, 'G'),
    warps: [{ x: 5, y: 15, to: 'hearthvale', tx: 5, ty: 6, dir: 'down' }],
    signs: [{ x: 1, y: 3, text: 'HALL OF FAME ARENA — the champions of ages past await, teams stacked with legend.' }],
    npcs: [],
    trainers: [
      { id: 'arena1', trainer: 'arena1', x: 5, y: 10, sprite: 'trainer_aldric', dir: 'down', sight: 6, after: 'Hah! The Regis answer to you now too. Climb on.' },
      { id: 'arena2', trainer: 'arena2', x: 5, y: 5, sprite: 'trainer_maris', dir: 'down', sight: 6, after: 'The Eon dragons chose well. One more remains above.' },
      { id: 'arena3', trainer: 'arena3', x: 5, y: 1, sprite: 'trainer_vesper', dir: 'down', sight: 6, after: 'You hold the sky AND a titan. You are the finest this hall has seen.' }
    ],
    scripts: []
  };

  // ===== Champion victory -> Hall of Fame induction -> the Crossroads ====
  G.EVENTS.hallOfFame = function* () {
    yield { t: 'text', s: 'The Champion falls. The far doors open in a wash of golden light...' };
    yield { t: 'custom', run: function (resume) { G.pushScene(G.HallOfFameScene(resume)); } };
    yield { t: 'fn', fn: function () {
      G.flags.hofDone = 1;
      G.world.warpTo({ to: 'legendfork', tx: 7, ty: 8, dir: 'up' });
    } };
  };

  // ===== home: Mom's post-game word + the road to the Arena =============
  G.EVENTS.momPostgame = function* () {
    yield { t: 'text', s: 'Mom: Oh! You glow like the sky itself. Sit, tell me everything.' };
    yield { t: 'text', s: "Mom: I always knew the day you walked out that door, you'd come back something special." };
    yield { t: 'text', s: 'Mom: ...But you ARE still my kid. Eat something, rest — and stay just as kind as you left.' };
    yield { t: 'fn', fn: function () { for (var i = 0; i < G.player.party.length; i++) G.healMon(G.player.party[i]); G.audio.playJingle && G.audio.playJingle('jingle_heal'); } };
    yield { t: 'text', s: 'Mom: One more thing — the old champions have opened the Hall of Fame Arena for you. A portal waits in town. Go show them.' };
    yield { t: 'fn', fn: function () { G.flags.arenaOpen = 1; } };
  };
  G.MAPS.playerhome.npcs.push({ x: 2, y: 4, sprite: 'mom', dir: 'right', event: 'momPostgameTalk' });
  G.EVENTS.momPostgameTalk = function* () {
    if (G.flags.ev_rayquaza) { yield* G.EVENTS.momPostgame(); }
    else { yield { t: 'text', s: 'Mom: Be careful out there, dear. And call if you need anything!' }; }
  };
  // auto-play Mom's word the moment you teleport home with Rayquaza in tow
  G.MAPS.playerhome.scripts = (G.MAPS.playerhome.scripts || []).concat([
    { x: [2, 5], y: 4, ifFlag: 'ev_rayquaza', once: 'momWordDone', run: 'momPostgame' }
  ]);

  // ===== Arena portal in the start town (opens after Rayquaza) ==========
  G.EVENTS.enterArena = function* () {
    yield { t: 'text', s: 'A doorway of light hums before you — the Hall of Fame Arena.' };
    yield { t: 'fn', fn: function () { G.world.warpTo({ to: 'hoffarena', tx: 5, ty: 15, dir: 'up' }); } };
  };
  G.MAPS.hearthvale.npcs.push({ x: 18, y: 11, sprite: 'orb_stand', obj: true, ifFlag: 'arenaOpen', event: 'enterArena' });

  // reward for clearing all three Hall of Fame Arena champions (Orin, last)
  G.EVENTS.arenaReward = function* () {
    if (G.flags.arenaCleared) { yield { t: 'text', s: 'Orin: The hall is yours, champion of champions.' }; return; }
    yield { t: 'text', s: 'Orin: You have bested every champion of old. Sea, land and sky all bow to you.' };
    yield { t: 'text', s: 'Orin: The hall keeps one last gift for its finest — a wish made real. Take it.' };
    yield { t: 'sfx', id: 'superEff' };
    yield { t: 'fn', fn: function () {
      G.flags.arenaCleared = 1;
      var mon = G.makeMon('jirachi', 50);
      G.player.dexSeen.jirachi = 1; G.player.dexCaught.jirachi = 1;
      if (G.player.party.length < 6) G.player.party.push(mon); else G.player.box.push(mon);
      if (G.audio.playJingle) G.audio.playJingle('jingle_catch');
    } };
    yield { t: 'text', s: "You received JIRACHI, the Wish Pokemon! (Joined your party, or sent to Birch's Lab if it was full.)" };
  };

  // a rift in the League town: re-enter the Crossroads after you've left, and
  // the catch-up entry for anyone who beat the Champion before the questline
  // existed (no hofDone yet) — it plays the induction the first time through.
  G.EVENTS.enterFork = function* () {
    if (!G.flags.hofDone) {
      yield { t: 'text', s: 'The light of the Hall of Fame finds you at last — your legend is recorded.' };
      yield { t: 'custom', run: function (resume) { G.pushScene(G.HallOfFameScene(resume)); } };
      yield { t: 'fn', fn: function () { G.flags.hofDone = 1; G.world.warpTo({ to: 'legendfork', tx: 7, ty: 8, dir: 'up' }); } };
      return;
    }
    yield { t: 'text', s: 'A rift shimmers with sea, land and sky — the Titan Crossroads. Step through?' };
    yield { t: 'fn', fn: function () { G.world.warpTo({ to: 'legendfork', tx: 7, ty: 8, dir: 'up' }); } };
  };
  // visible to anyone who has beaten the Champion (flag 'champion'), so players
  // already past the League can reach the new endgame.
  G.MAPS.crownsummit.npcs.push({ x: 13, y: 9, sprite: 'orb_stand', obj: true, ifFlag: 'champion', event: 'enterFork' });
})();
