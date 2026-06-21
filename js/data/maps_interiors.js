// Pokéram — maps_interiors.js
// Building interiors: player home, lab, heal centers + shops (stamped from
// factories per town), the four gyms, the champion hall, flavor houses —
// plus every story event (starter pick, rivals, leaders, legendaries).

(function () {
  G.MAPS = G.MAPS || {};
  G.EVENTS = G.EVENTS || {};
  var pad = G.padRows;
  function blankDeco(w, h) { return G.padRows([], w, h); }

  // ------------------------------------------------------------------------
  // PLAYER HOME
  // ------------------------------------------------------------------------
  G.MAPS.playerhome = {
    id: 'playerhome', name: 'Your House', w: 9, h: 8,
    music: 'town', battleBg: 'indoor', base: 'ifloor',
    legend: G.LEG_INT,
    ground: pad([
      'IIIIIIIII',
      '......BB.',
      '.(.......',
      '.)..TT...',
      '.........',
      '....o....',
      '.P.......',
      '....m....'
    ], 9, 8),
    warps: [{ x: 4, y: 7, to: 'hearthvale', tx: 5, ty: 6, dir: 'down' }],
    signs: [
      { x: 1, y: 2, text: 'A neatly made bed. The blanket still smells like sunshine.' },
      { x: 6, y: 1, text: 'Field guides to the Solyn region. Well-thumbed.' },
      { x: 4, y: 3, text: 'The kitchen table. Breakfast was hours ago.' }
    ],
    npcs: []
  };

  // ------------------------------------------------------------------------
  // PROF. MAPLE'S LAB
  // ------------------------------------------------------------------------
  G.MAPS.lab = {
    id: 'lab', name: "Birch's Lab", w: 12, h: 10,
    music: 'town', battleBg: 'indoor', base: 'ifloor',
    legend: G.LEG_INT,
    ground: pad([
      'IIIIIIIIIIII',
      '.HH..BB..HH.',
      '............',
      '..TTTT......',
      '............',
      '............',
      '.P........P.',
      '............',
      '............',
      '.....mm.....'
    ], 12, 10),
    warps: [
      { x: 5, y: 9, to: 'hearthvale', tx: 10, ty: 15, dir: 'down' },
      { x: 6, y: 9, to: 'hearthvale', tx: 11, ty: 15, dir: 'down' }
    ],
    signs: [
      { x: 1, y: 1, text: 'A creature-storage machine hums softly.' },
      { x: 10, y: 1, text: 'Incubation pods. Warm to the touch.' },
      { x: 5, y: 1, text: "Research notes: 'Rarity tiers of Solyn — Common to Legendary...'" }
    ],
    npcs: [
      { x: 8, y: 3, sprite: 'prof', dir: 'down', dialog: ['Welcome! I am Prof. Birch.', 'Those three Poké Balls on the bench each hold a young Pokémon.', 'Go on — pick the partner that calls to you!'] },
      { x: 3, y: 3, sprite: 'orb_stand', obj: true, event: 'pick_sproutle' },
      { x: 4, y: 3, sprite: 'orb_stand', obj: true, event: 'pick_emberynx' },
      { x: 5, y: 3, sprite: 'orb_stand', obj: true, event: 'pick_aquilet' }
    ]
  };

  // ------------------------------------------------------------------------
  // HEAL CENTERS + SHOPS — stamped per town.
  // ------------------------------------------------------------------------
  function healCenter(id, town, exit) {
    G.MAPS[id] = {
      id: id, name: 'Heal House', w: 9, h: 8,
      music: 'town', battleBg: 'indoor', base: 'ifloor',
      legend: G.LEG_INT,
      ground: pad([
        'IIIIIIIII',
        '.E.....H.',
        '.CCCCCCC.',
        '.........',
        '.P.....P.',
        '.........',
        '.o.....o.',
        '....m....'
      ], 9, 8),
      warps: [{ x: 4, y: 7, to: exit.map, tx: exit.x, ty: exit.y, dir: 'down' }],
      signs: [
        { x: 1, y: 1, text: 'The heal machine chimes a soft, ready note.' },
        { x: 6, y: 1, text: "BIRCH'S LAB PC — store and retrieve your Pokémon." }
      ],
      respawnPoint: { mapId: id, x: 4, y: 5 },
      npcs: [
        { x: 3, y: 1, sprite: 'mom', dir: 'down', event: 'nurseHeal' },
        { x: 5, y: 1, sprite: 'egglady', dir: 'down', event: 'nursery' },
        { x: 6, y: 1, sprite: 'prof', dir: 'down', event: 'birchPC' }
      ]
    };
  }
  healCenter('heal_cobblemarch', 'Cobblemarch', { map: 'cobblemarch', x: 14, y: 7 });
  healCenter('heal_brinehollow', 'Brinehollow', { map: 'brinehollow', x: 10, y: 5 });
  healCenter('heal_coilgate', 'Coilgate', { map: 'coilgate', x: 19, y: 6 });
  healCenter('heal_aurelune', 'Aurelune', { map: 'aurelune', x: 6, y: 6 });
  healCenter('heal_summit', 'Crown Summit', { map: 'crownsummit', x: 5, y: 13 });
  healCenter('heal_petalburg', 'Petalburg', { map: 'petalburg', x: 14, y: 6 });
  healCenter('heal_fortree', 'Fortree', { map: 'fortree', x: 14, y: 6 });
  healCenter('heal_mossdeep', 'Mossdeep', { map: 'mossdeep', x: 14, y: 6 });
  healCenter('heal_sootopolis', 'Sootopolis', { map: 'sootopolis', x: 14, y: 6 });

  function shop(id, exit, inventory) {
    G.MAPS[id] = {
      id: id, name: 'Goods Shop', w: 9, h: 8,
      music: 'town', battleBg: 'indoor', base: 'ifloor',
      legend: G.LEG_INT,
      ground: pad([
        'IIIIIIIII',
        '.B.....P.',
        '..CCCCC..',
        '.........',
        'TT.....TT',
        'TT.....TT',
        '...P.....',
        '....m....'
      ], 9, 8),
      warps: [{ x: 4, y: 7, to: exit.map, tx: exit.x, ty: exit.y, dir: 'down' }],
      signs: [
        { x: 1, y: 1, text: 'Travel gear, neatly stocked behind the clerk.' },
        { x: 0, y: 4, text: 'Shelves of Potions and Poké Balls.' },
        { x: 8, y: 4, text: 'Shelves of candies and field gear.' }
      ],
      shopInventory: inventory,
      npcs: [
        { x: 3, y: 1, sprite: 'prof', dir: 'down', event: 'shopBuy' },
        { x: 5, y: 1, sprite: 'boy', dir: 'down', event: 'moveTutor' }
      ]
    };
  }
  shop('shop_cobblemarch', { map: 'cobblemarch', x: 19, y: 7 }, ['potion', 'tameorb', 'cureall', 'snackbar', 'candyxs']);
  shop('shop_brinehollow', { map: 'brinehollow', x: 15, y: 5 }, ['potion', 'superpotion', 'tameorb', 'greatorb', 'netorb', 'cureall', 'repelmist', 'candyxs', 'candys', 'fishingrod', 'skates']);
  shop('shop_coilgate', { map: 'coilgate', x: 7, y: 13 }, ['superpotion', 'tameorb', 'greatorb', 'nestorb', 'timerorb', 'cureall', 'repelmist', 'revivedust', 'candys']);
  shop('shop_aurelune', { map: 'aurelune', x: 6, y: 13 }, ['superpotion', 'hyperpotion', 'greatorb', 'ultraorb', 'cureall', 'repelmist', 'revivedust', 'candys', 'candym']);
  shop('shop_summit', { map: 'crownsummit', x: 15, y: 13 }, ['hyperpotion', 'greatorb', 'ultraorb', 'cureall', 'revivedust', 'repelmist', 'candym', 'candyl']);
  shop('shop_petalburg', { map: 'petalburg', x: 4, y: 14 }, ['superpotion', 'hyperpotion', 'greatorb', 'ultraorb', 'timerorb', 'cureall', 'revivedust', 'candym', 'fishingrod', 'skates']);
  shop('shop_fortree', { map: 'fortree', x: 4, y: 14 }, ['hyperpotion', 'greatorb', 'ultraorb', 'nestorb', 'cureall', 'revivedust', 'repelmist', 'candym', 'fishingrod', 'skates']);
  shop('shop_mossdeep', { map: 'mossdeep', x: 4, y: 14 }, ['hyperpotion', 'greatorb', 'ultraorb', 'timerorb', 'diveorb', 'cureall', 'revivedust', 'candym', 'candyl', 'fishingrod', 'skates']);
  shop('shop_sootopolis', { map: 'sootopolis', x: 4, y: 14 }, ['hyperpotion', 'greatorb', 'ultraorb', 'diveorb', 'netorb', 'cureall', 'revivedust', 'candyl', 'fishingrod', 'skates']);

  // ------------------------------------------------------------------------
  // GYMS — one leader each, waiting at the far end of the hall.
  // ------------------------------------------------------------------------
  function gym(id, exit, leaderId, leaderSprite, statueText, type) {
    G.MAPS[id] = {
      id: id, name: 'Gym', w: 11, h: 12,
      music: 'gym', battleBg: 'indoor', base: 'gfloor',
      legend: G.LEG_INT,
      gymTint: type ? G.TYPE_COLORS[type] : null,         // type-colored floor
      gymEmblem: type ? { x: 5, y: 6, type: type, big: true } : null,
      // a carpet runway leads from the door up to the leader, statues flanking
      ground: pad([
        'IIIIIIIIIII',
        'GGGGGGGGGGG',
        'GGGGGRGGGGG',
        'GGGGGRGGGGG',
        'GUGGGRGGGUG',
        'GGGGGRGGGGG',
        'GGGGGRGGGGG',
        'GGGGGRGGGGG',
        'GUGGGRGGGUG',
        'GGGGGRGGGGG',
        'GGGGGRGGGGG',
        'GGGGGmGGGGG'
      ], 11, 12, 'G'),
      warps: [{ x: 5, y: 11, to: exit.map, tx: exit.x, ty: exit.y, dir: 'down' }],
      signs: [
        { x: 1, y: 4, text: statueText },
        { x: 9, y: 8, text: 'CHALLENGERS: heal up before approaching the Leader.' }
      ],
      npcs: [
        { x: 7, y: 10, sprite: 'boy', dir: 'left', dialog: [
          'Welcome to the ' + (type ? type.charAt(0).toUpperCase() + type.slice(1) : '') + ' Gym!',
          'The Leader fields only ' + (type ? type.toUpperCase() : '') + '-types. Bring moves that counter them!'
        ] }
      ],
      trainers: [
        { id: leaderId, trainer: leaderId, x: 5, y: 2, sprite: leaderSprite, dir: 'down', sight: 6, after: 'Go on — the region is waiting for you.' }
      ]
    };
  }
  gym('gym1', { map: 'cobblemarch', x: 5, y: 6 }, 'gym1_bram', 'prof', 'STONE BADGE — Roxanne, the Rock-type Leader.', 'rock');
  gym('gym2', { map: 'brinehollow', x: 5, y: 12 }, 'gym2_maris', 'mom', 'KNUCKLE BADGE — Brawly, the Fighting-type Leader.', 'fighting');
  gym('gym3', { map: 'coilgate', x: 5, y: 6 }, 'gym3_tess', 'boy', 'DYNAMO BADGE — Wattson, the Electric-type Leader.', 'electric');
  gym('gym4', { map: 'aurelune', x: 14, y: 6 }, 'gym4_vesper', 'mom', 'HEAT BADGE — Flannery, the Fire-type Leader.', 'fire');
  gym('gym5', { map: 'petalburg', x: 5, y: 6 }, 'gym5_norman', 'prof', 'STAMINA BADGE — Norman, the Normal-type Leader.', 'normal');
  gym('gym6', { map: 'fortree', x: 5, y: 6 }, 'gym6_winona', 'mom', 'FEATHER BADGE — Winona, the Flying-type Leader.', 'flying');
  gym('gym7', { map: 'mossdeep', x: 5, y: 6 }, 'gym7_tate', 'boy', 'MIND BADGE — Tate & Liza, the Psychic-type Leaders.', 'psychic');
  gym('gym8', { map: 'sootopolis', x: 5, y: 6 }, 'gym8_wallace', 'prof', 'RAIN BADGE — Wallace, the Water-type Leader.', 'water');

  // ------------------------------------------------------------------------
  // CHAMPION HALL
  // ------------------------------------------------------------------------
  G.MAPS.championhall = {
    id: 'championhall', name: 'Champion Hall', w: 10, h: 14,
    music: 'champion', battleBg: 'indoor', base: 'gfloor',
    legend: G.LEG_INT,
    ground: pad([
      'IIIIIIIIII',
      'GGGGRRGGGG',
      'GGGGRRGGGG',
      'GUGGRRGGUG',
      'GGGGRRGGGG',
      'GGGGRRGGGG',
      'GUGGRRGGUG',
      'GGGGRRGGGG',
      'GGGGRRGGGG',
      'GUGGRRGGUG',
      'GGGGRRGGGG',
      'GGGGRRGGGG',
      'GGGGmmGGGG',
      'GGGGGGGGGG'
    ], 10, 14, 'G'),
    warps: [
      { x: 4, y: 12, to: 'crownsummit', tx: 9, ty: 7, dir: 'down' },
      { x: 5, y: 12, to: 'crownsummit', tx: 10, ty: 7, dir: 'down' }
    ],
    signs: [
      { x: 1, y: 3, text: 'Statues of every champion Solyn has ever crowned.' },
      { x: 8, y: 3, text: 'The newest pedestal stands empty. Waiting.' }
    ],
    npcs: [],
    trainers: [
      { id: 'champion', trainer: 'champion', x: 4, y: 2, sprite: 'prof', dir: 'down', sight: 8, after: 'The pedestal is yours now. Wear it well.' }
    ]
  };

  // ------------------------------------------------------------------------
  // FLAVOR HOUSES
  // ------------------------------------------------------------------------
  function house(id, exit, npcSprite, lines) {
    G.MAPS[id] = {
      id: id, name: 'House', w: 9, h: 8,
      music: 'town', battleBg: 'indoor', base: 'ifloor',
      legend: G.LEG_INT,
      ground: pad([
        'IIIIIIIII',
        '.B....BB.',
        '.(.......',
        '.)..TT...',
        '.........',
        '.P....o..',
        '.........',
        '....m....'
      ], 9, 8),
      warps: [{ x: 4, y: 7, to: exit.map, tx: exit.x, ty: exit.y, dir: 'down' }],
      signs: [],
      npcs: [{ x: 6, y: 3, sprite: npcSprite, dir: 'down', dialog: lines }]
    };
  }
  house('house_cobble', { map: 'cobblemarch', x: 7, y: 13 }, 'mom',
    ['Bram polishes that gym floor himself, you know.', 'Grass and Water moves crack rock right open. You didn\'t hear it from me.']);
  house('house_brine', { map: 'brinehollow', x: 17, y: 14 }, 'boy',
    ['A sleeping Slumbear blocks the old coast shortcut sometimes.', 'Poke it. What\'s the worst that could happen?']);
  house('house_coil', { map: 'coilgate', x: 18, y: 13 }, 'prof',
    ['Hollowdeep\'s lower level glitters with crystal creatures.', 'And something older sleeps down there. Bring strong orbs.']);
  house('house_aure', { map: 'aurelune', x: 16, y: 13 }, 'mom',
    ['Vesper dreamed the champion\'s hall would crown someone new this season.', 'Her dreams have a habit of being right.']);

  // ==========================================================================
  // EVENTS
  // ==========================================================================
  function starterEvent(key, blurb) {
    return function* () {
      if (G.flags.starter) {
        yield { t: 'text', s: "Prof. Maple: Ah-ah! One partner per trainer. Yours is waiting on you!" };
        return;
      }
      yield { t: 'text', s: blurb };
      var answer = { v: 1 };
      yield {
        t: 'custom',
        run: function (done) {
          G.pushScene(G.StarterPreviewScene(key, function (takeIt) {
            answer.v = takeIt ? 0 : 1;
            done();
          }));
        }
      };
      if (answer.v === 0) {
        var mon = G.makeMon(key, 5);
        G.flags.starter = key;
        G.player.party.push(mon);
        G.player.dexSeen[key] = 1;
        G.player.dexCaught[key] = 1;
        yield { t: 'sfx', id: 'catchClick' };
        yield { t: 'text', s: 'You received ' + G.SPECIES[key].name + '!' };
        yield { t: 'text', s: 'Prof. Birch: A splendid match! Raise it well — and take this Pokédex. Go see all of Hoenn!' };
        yield { t: 'text', s: '(Wild creatures lurk in tall grass. Tame Orbs are in your bag — catch a team!)' };
      } else {
        yield { t: 'text', s: 'You set the orb back down gently.' };
      }
    };
  }
  G.EVENTS.pick_sproutle = starterEvent('treecko', 'The ball holds TREECKO, the wood gecko. Cool-headed and quick on its feet.');
  G.EVENTS.pick_aquilet = starterEvent('mudkip', 'The ball holds MUDKIP, the mud fish. Sturdy, loyal, surprisingly strong.');
  G.EVENTS.pick_emberynx = starterEvent('torchic', 'The ball holds TORCHIC, the chick. A warm little furnace with a fighting heart.');

  G.EVENTS.momHeal = function* () {
    yield { t: 'text', s: 'Mom: Off on an adventure already? Let me patch your team up first.' };
    yield {
      t: 'fn',
      fn: function () {
        for (var i = 0; i < G.player.party.length; i++) G.healMon(G.player.party[i]);
        G.player.respawn = { mapId: 'hearthvale', x: 4, y: 6 };
        G.audio.sfx('heal');
      }
    };
    yield { t: 'text', s: 'Everyone is rested and ready. Do be careful in the tall grass, dear.' };
  };

  // generic heal-center nurse: full heal + set respawn to this center
  G.EVENTS.nurseHeal = function* () {
    yield { t: 'text', s: 'Nurse: Welcome! Shall I restore your creatures to full health?' };
    yield {
      t: 'fn',
      fn: function () {
        for (var i = 0; i < G.player.party.length; i++) G.healMon(G.player.party[i]);
        if (G.world.map.respawnPoint) G.player.respawn = G.world.map.respawnPoint;
        G.audio.playJingle('jingle_heal');
      }
    };
    yield { t: 'wait', frames: 30 };
    yield { t: 'text', s: 'All patched up! We hope to see you again. Wait — no. You know what I mean.' };
  };

  // Nursery helper in each heal center: gives eggs, and can incubate one you
  // leave with her (it hatches after you've walked a while; come back for it).
  G.EVENTS.nursery = function* () {
    // a deposited egg has finished -> hand over the hatchling
    if (G.player.daycare && G.player.daycare.hatch <= 0) {
      var dc = G.player.daycare;
      if (G.player.party.length >= 6) {
        yield { t: 'text', s: 'Nursery Helper: Your Egg hatched! But your team is full — make room and come back, dear.' };
        return;
      }
      yield { t: 'text', s: 'Nursery Helper: Wonderful news — your Egg hatched while you were away!' };
      yield { t: 'fn', fn: function () {
        var mon = G.makeMon(dc.sp, G.eggHatchLevel ? G.eggHatchLevel() : 5); G.healMon(mon);
        G.player.party.push(mon);
        G.player.dexSeen[dc.sp] = 1; G.player.dexCaught[dc.sp] = 1;
        G.player.daycare = null;
        if (G.audio.playJingle) G.audio.playJingle('jingle_heal');
      } };
      yield { t: 'text', s: 'It hatched into ' + G.SPECIES[dc.sp].name + '! Take good care of it.' };
      return;
    }
    if (G.player.daycare) {
      yield { t: 'text', s: 'Nursery Helper: Your Egg is still warming up — about ' + G.player.daycare.hatch + ' steps to go. Walk around and check back!' };
      return;
    }
    // Only a couple of (spread-out) nurseries hand out Eggs, so getting one
    // stays special; every other nursery just incubates an Egg you bring.
    var GIVERS = { heal_cobblemarch: 1, heal_mossdeep: 1 };
    var isGiver = !!GIVERS[(G.world && G.world.mapId)];
    yield { t: 'text', s: isGiver
      ? 'Nursery Helper: Welcome! Would you like an Egg of your own, or shall I hatch one for you?'
      : 'Nursery Helper: I hatch Eggs for travelers here. Leave one with me and it will warm as you walk!' };
    var done = { v: false };
    while (!done.v) {
      yield { t: 'custom', run: function (resume) {
        var items = isGiver ? ['Receive an Egg', 'Leave an Egg', 'Done'] : ['Leave an Egg', 'Done'];
        G.pushScene(G.Chooser({
          items: items, x: 24, y: 10, cancelIndex: items.length - 1,
          onPick: function (i) {
            var label = items[i];
            if (label === 'Done') { done.v = true; resume(); return; }
            if (label === 'Receive an Egg') {
              if (G.player.party.some(function (m) { return m.egg; })) { G.pushScene(G.Textbox('You already have an Egg to care for!', { onDone: resume })); return; }
              if (G.player.daycare) { G.pushScene(G.Textbox("Let's hatch the Egg you already left first!", { onDone: resume })); return; }
              if (G.player.party.length >= 6) { G.pushScene(G.Textbox('Your team is full — no room for an Egg.', { onDone: resume })); return; }
              G.player.party.push(G.makeEgg());
              G.audio.sfx('money');
              G.pushScene(G.Textbox(['You received an EGG!', 'Keep it in your team and it will hatch as you walk.'], { onDone: resume }));
              return;
            }
            // Leave an Egg to incubate
            var idx = -1;
            for (var k = 0; k < G.player.party.length; k++) if (G.player.party[k].egg) { idx = k; break; }
            if (idx < 0) { G.pushScene(G.Textbox(isGiver ? 'You have no Egg to leave with me.' : 'You have no Egg yet — the Nurseries in Cobblemarch and Mossdeep hand them out!', { onDone: resume })); return; }
            var egg = G.player.party[idx];
            G.player.daycare = { sp: egg.sp, hatch: egg.hatch, total: egg.hatchTotal || egg.hatch };
            G.player.party.splice(idx, 1);
            G.pushScene(G.Textbox(['I will keep your Egg warm.', 'Walk around for a while, then come back — it should have hatched!'], { onDone: resume }));
          }
        }));
      } };
    }
    yield { t: 'text', s: 'Nursery Helper: Eggs love a good long walk. Off you go!' };
  };

  // Board a docked boat and set sail onto the adjacent water (cross + fish).
  G.EVENTS.boardBoat = function* () {
    yield { t: 'text', s: 'A small boat bobs at the dock. Climb aboard and set sail?' };
    yield { t: 'fn', fn: function () {
      var w = G.world, p = w.player, dirs = ['down', 'up', 'left', 'right'];
      for (var i = 0; i < dirs.length; i++) {
        var dd = G.DIRS[dirs[i]], tx = p.x + dd.dx, ty = p.y + dd.dy, td = w.tileDefAt(tx, ty);
        if (td && td.water && !w.npcAt(tx, ty)) {
          p.vehicle = 'boat'; p.dir = dirs[i];
          p.fromX = p.x; p.fromY = p.y; p.x = tx; p.y = ty; p.moving = true; p.step = 0;
          G.audio.sfx('confirm');
          return;
        }
      }
      G.pushScene(G.Textbox('There’s no open water to launch into from here.'));
    } };
  };

  // A friendly local who gifts a candy once, to introduce the mechanic.
  G.EVENTS.giftCandy = function* () {
    if (G.flags.ev_giftcandy) {
      yield { t: 'text', s: 'Those Exp Candies really pack on the levels, huh? Save the big ones for a worthy teammate.' };
      return;
    }
    yield { t: 'text', s: "New to training? Here — feed this to a teammate and watch it shoot up a level or two." };
    yield { t: 'fn', fn: function () {
      G.player.bag.candys = (G.player.bag.candys || 0) + 1;
      G.flags.ev_giftcandy = 1;
      G.audio.sfx('money');
    } };
    yield { t: 'text', s: 'You got an S Exp Candy! Open the BAG, pick it, and choose a creature to give it the EXP.' };
  };

  // Birch's Lab storage PC: deposit/withdraw between party and the Lab box
  G.EVENTS.birchPC = function* () {
    yield { t: 'text', s: "Aide: This terminal links to Prof. Birch's Lab. Store or withdraw your Pokémon here." };
    yield { t: 'fn', fn: function () { if (G.PCScene) G.pushScene(G.PCScene()); } };
  };

  // generic shop clerk: buy from map.shopInventory
  G.EVENTS.shopBuy = function* () {
    var inv = G.world.map.shopInventory || [];
    var done = { v: false };
    yield { t: 'text', s: 'Clerk: Welcome in! Take a look.' };
    while (!done.v) {
      yield {
        t: 'custom',
        run: function (resume) {
          var items = inv.map(function (id) {
            return G.ITEMS[id].name + '  $' + G.ITEMS[id].price;
          });
          items.push('Done');
          G.pushScene(G.Chooser({
            items: items, cols: 2, x: 8, y: 12,
            cancelIndex: items.length - 1,
            onPick: function (i) {
              if (i >= inv.length) { done.v = true; resume(); return; }
              var it = G.ITEMS[inv[i]];
              if (G.player.money < it.price) {
                G.pushScene(G.Textbox("You can't afford that.", { onDone: resume }));
                return;
              }
              G.player.money -= it.price;
              G.player.bag[it.id] = (G.player.bag[it.id] || 0) + 1;
              G.audio.sfx('money');
              G.pushScene(G.Textbox('Bought a ' + it.name + '! ($' + G.player.money + ' left)', { onDone: resume }));
            }
          }));
        }
      };
    }
    yield { t: 'text', s: 'Clerk: Safe routes out there!' };
  };

  // Move Tutor / Reminder: teach a teammate any move from its species' level-up
  // list that it qualifies for. Rescues late evolutions stuck on a weak moveset.
  G.EVENTS.moveTutor = function* () {
    yield { t: 'text', s: 'Move Tutor: I can remind one of your team of a move it could learn. Who needs it?' };
    var st = { mon: null };
    yield { t: 'custom', run: function (resume) {
      G.pushScene(G.PartyScene({ pickMode: true, prompt: 'Teach which creature?', onPick: function (idx) {
        if (idx >= 0) st.mon = G.player.party[idx];
        resume();
      } }));
    } };
    if (!st.mon) return;
    if (st.mon.egg) { yield { t: 'text', s: "An EGG can't learn moves yet!" }; return; }
    var moves = G.teachableMoves(st.mon);
    if (!moves.length) { yield { t: 'text', s: G.monName(st.mon) + ' already knows every move it can learn right now.' }; return; }
    var done = { v: false };
    while (!done.v) {
      yield { t: 'custom', run: function (resume) {
        var items = moves.map(function (id) { return G.MOVES[id].name; });
        items.push('Cancel');
        G.pushScene(G.Chooser({ items: items, cols: 2, x: 8, y: 12, cancelIndex: items.length - 1, onPick: function (i) {
          if (i >= moves.length) { done.v = true; resume(); return; }
          var mid = moves[i];
          if (st.mon.moves.length < 4) {
            st.mon.moves.push({ id: mid, pp: G.MOVES[mid].pp, maxPp: G.MOVES[mid].pp });
            G.audio.sfx('heal'); done.v = true;
            G.pushScene(G.Textbox(G.monName(st.mon) + ' learned ' + G.MOVES[mid].name + '!', { onDone: resume }));
            return;
          }
          var fItems = st.mon.moves.map(function (ms) { return G.MOVES[ms.id].name; });
          fItems.push('Keep all moves');
          G.pushScene(G.Chooser({ items: fItems, cancelIndex: fItems.length - 1, onPick: function (j) {
            if (j >= st.mon.moves.length) { resume(); return; } // back to the move list
            var forgot = G.MOVES[st.mon.moves[j].id].name;
            st.mon.moves[j] = { id: mid, pp: G.MOVES[mid].pp, maxPp: G.MOVES[mid].pp };
            G.audio.sfx('heal'); done.v = true;
            G.pushScene(G.Textbox(G.monName(st.mon) + ' forgot ' + forgot + ' and learned ' + G.MOVES[mid].name + '!', { onDone: resume }));
          } }));
        } }));
      } };
    }
    yield { t: 'text', s: 'Move Tutor: Come back whenever a teammate needs reminding!' };
  };

  // rival battles (map script triggers)
  function rivalEvent(trainerId, flag, preText, postText) {
    return function* () {
      yield { t: 'sfx', id: 'confirm' };
      yield { t: 'text', s: preText };
      var result = { v: null };
      yield {
        t: 'custom',
        run: function (done) {
          G.startTrainerBattle(trainerId, { onEnd: function (r) { result.v = r; done(); } });
        }
      };
      G.flags[flag] = 1;
      if (result.v === 'win') yield { t: 'text', s: postText };
    };
  }
  G.EVENTS.rival1 = rivalEvent('rival1', 'ev_rival1',
    'Kai: There you are! Maple gave me a creature too — the one that beats yours, obviously.',
    'Kai: Beginner luck has a smell, you know. See you in Cobblemarch!');
  G.EVENTS.rival2 = rivalEvent('rival2', 'ev_rival2',
    'Kai: The port is THAT way. The loss you are about to take is THIS way.',
    'Kai: Whatever. The sea air will wash this memory right out.');
  G.EVENTS.rival3 = rivalEvent('rival3', 'ev_rival3',
    'Kai: Coilgate is electric, and so am I. Two badges says I win this time.',
    'Kai: ...Three badges next time. Count on it.');
  G.EVENTS.rival4 = rivalEvent('rival4', 'ev_rival4',
    'Kai: Stop. The summit is mine. It was ALWAYS mine. Prove me wrong one more time.',
    'Kai: ...Go. Aldric is waiting. Tell him the second-best trainer in Solyn sent you.');

  // Slumbear set-piece on Route 3
  G.EVENTS.wakeSlumbear = function* () {
    yield { t: 'text', s: 'A SLUMBEAR is snoring in the middle of the road. The ground trembles gently.' };
    var answer = { v: 1 };
    yield {
      t: 'custom',
      run: function (done) {
        G.pushScene(G.Chooser({ items: ['Wake it', 'Leave it'], onPick: function (i) { answer.v = i; done(); } }));
      }
    };
    if (answer.v !== 0) {
      yield { t: 'text', s: 'Wise. You tiptoe around the mountain of fur.' };
      return;
    }
    yield { t: 'sfx', id: 'faint' };
    yield { t: 'text', s: 'SLUMBEAR woke up VERY cranky!' };
    yield {
      t: 'fn',
      fn: function () {
        G.flags.ev_slumbear = 1;
        G.player.dexSeen.slumbear = 1;
        var wild = G.makeMon('slumbear', 18);
        G.startBattle(
          { party: G.player.party, foes: [wild], wild: true },
          { bg: 'water', onEnd: function (r, b) { G.afterBattle(r, b); G.world.loadMap(G.world.mapId, G.world.player.x, G.world.player.y, G.world.player.dir); } }
        );
      }
    };
  };

  // legendary encounters (deep/post-champion). Optional level (default 50).
  function legendEvent(key, flag, introLines, level) {
    return function* () {
      if (G.flags[flag]) {
        yield { t: 'text', s: 'The air still hums where ' + G.SPECIES[key].name + ' appeared.' };
        return;
      }
      for (var i = 0; i < introLines.length; i++) yield { t: 'text', s: introLines[i] };
      yield { t: 'sfx', id: 'superEff' };
      yield {
        t: 'fn',
        fn: function () {
          G.flags[flag] = 1;
          G.player.dexSeen[key] = 1;
          var wild = G.makeMon(key, level || 50);
          G.startBattle(
            { party: G.player.party, foes: [wild], wild: true },
            { bg: 'cave', music: 'champion', onEnd: function (r, b) { G.afterBattle(r, b); G.world.loadMap(G.world.mapId, G.world.player.x, G.world.player.y, G.world.player.dir); } }
          );
        }
      };
    };
  }
  G.EVENTS.meetAstradrax = legendEvent('rayquaza', 'ev_astradrax', [
    'The clouds tear open above the peak. A long green serpent descends, trailing the sky behind it.',
    'RAYQUAZA, the sky high dragon, regards the new Champion.'
  ]);
  G.EVENTS.meetLumifae = legendEvent('jirachi', 'ev_lumifae', [
    'The glade brightens, gently, like a wish coming true out of turn.',
    'JIRACHI, the wish maker, has been waiting for you.'
  ]);
  // box legendaries — only appear once all 8 badges are in hand (gated on the map)
  G.EVENTS.meetKyogre = legendEvent('kyogre', 'ev_kyogre', [
    'The crater sea heaves and a downpour begins from a clear sky.',
    'A vast blue leviathan surfaces — KYOGRE, the sea basin Pokémon.'
  ], 60);
  G.EVENTS.meetGroudon = legendEvent('groudon', 'ev_groudon', [
    'The ground splits and glows with deep magma light.',
    'A continent-shaped colossus rises — GROUDON, the land it stands on trembling.'
  ], 60);
})();


