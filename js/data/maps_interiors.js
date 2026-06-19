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
        '.E.....P.',
        '..CCCCC..',
        '.........',
        '.........',
        '.P.......',
        '.........',
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
        '.B.....B.',
        '..CCCCC..',
        '.........',
        '.........',
        '.......P.',
        '.........',
        '....m....'
      ], 9, 8),
      warps: [{ x: 4, y: 7, to: exit.map, tx: exit.x, ty: exit.y, dir: 'down' }],
      signs: [{ x: 1, y: 1, text: 'Shelves of travel gear, neatly stocked.' }],
      shopInventory: inventory,
      npcs: [
        { x: 3, y: 1, sprite: 'prof', dir: 'down', event: 'shopBuy' }
      ]
    };
  }
  shop('shop_cobblemarch', { map: 'cobblemarch', x: 19, y: 7 }, ['potion', 'tameorb', 'cureall', 'snackbar']);
  shop('shop_brinehollow', { map: 'brinehollow', x: 15, y: 5 }, ['potion', 'superpotion', 'tameorb', 'greatorb', 'cureall', 'repelmist', 'fishingrod', 'skates']);
  shop('shop_coilgate', { map: 'coilgate', x: 7, y: 13 }, ['superpotion', 'tameorb', 'greatorb', 'cureall', 'repelmist', 'revivedust']);
  shop('shop_aurelune', { map: 'aurelune', x: 6, y: 13 }, ['superpotion', 'hyperpotion', 'greatorb', 'cureall', 'repelmist', 'revivedust']);
  shop('shop_summit', { map: 'crownsummit', x: 15, y: 13 }, ['hyperpotion', 'greatorb', 'cureall', 'revivedust', 'repelmist']);
  shop('shop_petalburg', { map: 'petalburg', x: 4, y: 14 }, ['superpotion', 'hyperpotion', 'greatorb', 'cureall', 'revivedust', 'fishingrod', 'skates']);
  shop('shop_fortree', { map: 'fortree', x: 4, y: 14 }, ['hyperpotion', 'greatorb', 'cureall', 'revivedust', 'repelmist', 'fishingrod', 'skates']);
  shop('shop_mossdeep', { map: 'mossdeep', x: 4, y: 14 }, ['hyperpotion', 'greatorb', 'cureall', 'revivedust', 'fishingrod', 'skates']);
  shop('shop_sootopolis', { map: 'sootopolis', x: 4, y: 14 }, ['hyperpotion', 'greatorb', 'cureall', 'revivedust', 'fishingrod', 'skates']);

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
      ground: pad([
        'IIIIIIIIIII',
        'GGGGGGGGGGG',
        'GGGGGGGGGGG',
        'GGGGGGGGGGG',
        'GGGGGGGGGGG',
        'GGGGGGGGGGG',
        'GGGGGGGGGGG',
        'GGGGGGGGGGG',
        'GGGGGGGGGGG',
        'GUGGGGGGGUG',
        'GGGGGGGGGGG',
        'GGGGGmGGGGG'
      ], 11, 12, 'G'),
      warps: [{ x: 5, y: 11, to: exit.map, tx: exit.x, ty: exit.y, dir: 'down' }],
      signs: [
        { x: 1, y: 9, text: statueText },
        { x: 9, y: 9, text: 'CHALLENGERS: heal up before approaching the leader.' }
      ],
      npcs: [],
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
            items: items, x: 30, y: 14,
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


