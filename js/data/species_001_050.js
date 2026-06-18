// pokemon-gen3 — species_001_050.js  (roster slots 1-50; the Gen 3 / Hoenn set)
// Defines the G.defSpecies factory used by all three species files.
//   defSpecies(natDexId, key, name, types, rarity, [hp,atk,def,spa,spd,spe],
//              evolvesTo, evolveLevel, learnset, dexBlurb, opts)
//   opts: { mid, final, stage, catchRate, expYield, growth }
//   `id` is the NATIONAL dex number (the sprite loader keys on it).
//   `growth` is one of G.EXP_GROUPS; learnset move ids must exist in moves.js.
// Base stats/types/evolutions are functional game data; blurbs are original.

(function () {
  G.SPECIES = G.SPECIES || {};
  G.DEX_ORDER = G.DEX_ORDER || [];

  var CATCH = { starter: 45, common: 190, uncommon: 120, rare: 60, elusive: 25, legendary: 3 };

  G.defSpecies = function (id, key, name, types, rarity, base, evolvesTo, evolveLevel, learnset, dex, opts) {
    opts = opts || {};
    var b = { hp: base[0], atk: base[1], def: base[2], spa: base[3], spd: base[4], spe: base[5] };
    var bst = base[0] + base[1] + base[2] + base[3] + base[4] + base[5];
    var stage = opts.stage || (evolvesTo ? (opts.mid ? 2 : 1) : (opts.final ? 3 : 0));
    var yieldMul = stage === 1 ? 0.22 : stage === 2 ? 0.32 : stage === 3 ? 0.42 : 0.35;
    if (rarity === 'legendary') yieldMul = 0.45;
    G.SPECIES[key] = {
      id: id, key: key, name: name, types: types, rarity: rarity,
      base: b,
      catchRate: opts.catchRate != null ? opts.catchRate : CATCH[rarity],
      expYield: opts.expYield != null ? opts.expYield : Math.round(bst * yieldMul),
      evolvesTo: evolvesTo || null, evolveLevel: evolveLevel || 0,
      learnset: learnset, dex: dex,
      growth: opts.growth || 'mediumFast'
    };
    G.DEX_ORDER.push(key);
  };
  var sp = G.defSpecies;
  var MS = 'mediumSlow', MF = 'mediumFast', SL = 'slow', FL = 'fluctuating', FA = 'fast', ER = 'erratic';

  // ===== starters ==========================================================
  sp(252, 'treecko', 'Treecko', ['grass'], 'starter', [40, 45, 35, 65, 55, 70], 'grovyle', 16,
    [[1, 'pound'], [1, 'leer'], [6, 'absorb'], [11, 'quickattack'], [16, 'furycutter'], [21, 'megadrain'], [26, 'screech']],
    'A nimble wood gecko that scales sheer walls with tiny hooked toes.', { catchRate: 45, growth: MS });
  sp(253, 'grovyle', 'Grovyle', ['grass'], 'starter', [50, 65, 45, 85, 65, 95], 'sceptile', 36,
    [[1, 'pound'], [1, 'leer'], [1, 'absorb'], [16, 'furycutter'], [21, 'megadrain'], [29, 'leafblade'], [35, 'screech']],
    'It bounds between branches, the leaves on its arms slicing the air.', { mid: true, catchRate: 45, growth: MS });
  sp(254, 'sceptile', 'Sceptile', ['grass'], 'starter', [70, 85, 65, 105, 85, 120], null, 0,
    [[1, 'pound'], [1, 'absorb'], [1, 'leafblade'], [21, 'megadrain'], [29, 'leafblade'], [38, 'gigadrain'], [50, 'solarbeam']],
    'Razor leaves crown its arms. Few rivals can match its forest speed.', { final: true, catchRate: 45, growth: MS });

  sp(255, 'torchic', 'Torchic', ['fire'], 'starter', [45, 60, 40, 70, 50, 45], 'combusken', 16,
    [[1, 'scratch'], [1, 'growl'], [7, 'ember'], [13, 'sandattack'], [19, 'flamewheel'], [25, 'quickattack']],
    'A downy chick that stores flame in its belly and sneezes sparks.', { catchRate: 45, growth: MS });
  sp(256, 'combusken', 'Combusken', ['fire', 'fighting'], 'starter', [60, 85, 60, 85, 60, 55], 'blaziken', 36,
    [[1, 'scratch'], [1, 'ember'], [16, 'karatechop'], [19, 'flamewheel'], [25, 'quickattack'], [32, 'brickbreak'], [39, 'firepunch']],
    'It lashes out with blistering kicks while crying out fiercely.', { mid: true, catchRate: 45, growth: MS });
  sp(257, 'blaziken', 'Blaziken', ['fire', 'fighting'], 'starter', [80, 120, 70, 110, 70, 80], null, 0,
    [[1, 'scratch'], [1, 'ember'], [1, 'brickbreak'], [25, 'quickattack'], [36, 'firepunch'], [42, 'flamethrower'], [49, 'crosschop']],
    'Flames jet from its wrists as it leaps. A blazing martial brawler.', { final: true, catchRate: 45, growth: MS });

  sp(258, 'mudkip', 'Mudkip', ['water'], 'starter', [50, 70, 50, 50, 50, 40], 'marshtomp', 16,
    [[1, 'tackle'], [1, 'growl'], [6, 'watergun'], [10, 'mudslap'], [15, 'bubblebeam'], [21, 'bite']],
    'The fin on its head reads water currents and faint air movements.', { catchRate: 45, growth: MS });
  sp(259, 'marshtomp', 'Marshtomp', ['water', 'ground'], 'starter', [70, 85, 70, 60, 70, 50], 'swampert', 36,
    [[1, 'tackle'], [1, 'watergun'], [15, 'bubblebeam'], [21, 'bite'], [28, 'mudslap'], [34, 'dig'], [42, 'earthquake']],
    'It slips across mudflats faster than it ever could on dry land.', { mid: true, catchRate: 45, growth: MS });
  sp(260, 'swampert', 'Swampert', ['water', 'ground'], 'starter', [100, 110, 90, 85, 90, 60], null, 0,
    [[1, 'tackle'], [1, 'watergun'], [1, 'mudslap'], [28, 'surf'], [34, 'dig'], [42, 'earthquake'], [50, 'hydropump']],
    'Strong enough to haul a boulder, it shrugs off raging floods.', { final: true, catchRate: 45, growth: MS });

  // ===== early routes ======================================================
  sp(261, 'poochyena', 'Poochyena', ['dark'], 'common', [35, 55, 35, 30, 30, 35], 'mightyena', 18,
    [[1, 'tackle'], [1, 'leer'], [5, 'bite'], [9, 'sandattack'], [13, 'pursuit'], [17, 'crunch']],
    'A bold pup that latches on and refuses to let go of any quarry.', { catchRate: 255, growth: MF });
  sp(262, 'mightyena', 'Mightyena', ['dark'], 'common', [70, 90, 70, 60, 60, 70], null, 0,
    [[1, 'tackle'], [1, 'bite'], [17, 'crunch'], [22, 'swordsdance'], [30, 'takedown'], [37, 'faintattack']],
    'It hunts in packs, obeying its leader with disciplined ferocity.', { final: true, catchRate: 127, growth: MF });

  sp(263, 'zigzagoon', 'Zigzagoon', ['normal'], 'common', [38, 30, 41, 30, 41, 60], 'linoone', 20,
    [[1, 'tackle'], [1, 'growl'], [5, 'tailwhip'], [9, 'headbutt'], [13, 'sandattack'], [17, 'pursuit']],
    'It wanders in restless zigzags, nose down for anything shiny.', { catchRate: 255, growth: MF });
  sp(264, 'linoone', 'Linoone', ['normal'], 'common', [78, 70, 61, 50, 61, 100], null, 0,
    [[1, 'tackle'], [1, 'headbutt'], [21, 'slash'], [27, 'pursuit'], [34, 'takedown'], [41, 'doubleedge']],
    'It charges in dead-straight lines at blistering speed, but cannot turn.', { final: true, catchRate: 90, growth: MF });

  sp(265, 'wurmple', 'Wurmple', ['bug'], 'common', [45, 45, 35, 20, 30, 20], 'silcoon', 7,
    [[1, 'tackle'], [1, 'poisonsting']],
    'A tiny larva that fends off birds with the spike on its rear.', { catchRate: 255, growth: MF });
  sp(266, 'silcoon', 'Silcoon', ['bug'], 'common', [50, 35, 55, 25, 25, 15], 'beautifly', 10,
    [[1, 'harden']],
    'It anchors to a branch by silk and watches the world through a gap.', { mid: true, catchRate: 120, growth: MF });
  sp(267, 'beautifly', 'Beautifly', ['bug', 'flying'], 'uncommon', [60, 70, 50, 100, 50, 65], null, 0,
    [[1, 'absorb'], [13, 'gust'], [20, 'silverwind'], [28, 'megadrain'], [36, 'aerialace'], [45, 'gigadrain']],
    'Its bright wings carry it flower to flower in search of nectar.', { final: true, catchRate: 45, growth: MF });
  sp(268, 'cascoon', 'Cascoon', ['bug'], 'common', [50, 35, 55, 25, 25, 15], 'dustox', 10,
    [[1, 'harden']],
    'It endures the cold within its shell, never forgetting a threat.', { mid: true, catchRate: 120, growth: MF });
  sp(269, 'dustox', 'Dustox', ['bug', 'poison'], 'uncommon', [60, 50, 70, 50, 90, 65], null, 0,
    [[1, 'tackle'], [13, 'gust'], [20, 'silverwind'], [28, 'poisonpowder'], [36, 'psybeam'], [45, 'sludgebomb']],
    'Drawn to light at night, it scatters toxic dust from its wings.', { final: true, catchRate: 45, growth: MF });

  sp(270, 'lotad', 'Lotad', ['water', 'grass'], 'common', [40, 30, 30, 40, 50, 30], 'lombre', 14,
    [[1, 'absorb'], [3, 'growl'], [7, 'watergun'], [13, 'megadrain'], [21, 'bubblebeam']],
    'It ferries small creatures across ponds on the leaf on its back.', { catchRate: 255, growth: MS });
  sp(271, 'lombre', 'Lombre', ['water', 'grass'], 'common', [60, 50, 50, 60, 70, 50], 'ludicolo', 30,
    [[1, 'absorb'], [1, 'watergun'], [13, 'megadrain'], [21, 'bubblebeam'], [28, 'furycutter'], [35, 'gigadrain']],
    'A mischief-maker that lurks at the water line and tugs at anglers.', { mid: true, catchRate: 120, growth: MS });
  sp(272, 'ludicolo', 'Ludicolo', ['water', 'grass'], 'uncommon', [80, 70, 70, 90, 100, 70], null, 0,
    [[1, 'absorb'], [1, 'bubblebeam'], [1, 'gigadrain'], [28, 'surf'], [36, 'solarbeam'], [44, 'raindance']],
    'It can\'t help but dance when a lively rhythm reaches its ears.', { final: true, catchRate: 45, growth: MS });

  sp(273, 'seedot', 'Seedot', ['grass'], 'common', [40, 40, 50, 30, 30, 30], 'nuzleaf', 14,
    [[1, 'harden'], [3, 'growth'], [7, 'absorb'], [13, 'megadrain'], [21, 'razorleaf']],
    'It hangs from branches like an acorn and polishes itself to a shine.', { catchRate: 255, growth: MS });
  sp(274, 'nuzleaf', 'Nuzleaf', ['grass', 'dark'], 'common', [70, 70, 40, 60, 40, 60], 'shiftry', 30,
    [[1, 'harden'], [1, 'absorb'], [13, 'megadrain'], [19, 'furycutter'], [26, 'faintattack'], [33, 'razorleaf']],
    'The leaf on its head makes a shrill sound that unsettles foes.', { mid: true, catchRate: 120, growth: MS });
  sp(275, 'shiftry', 'Shiftry', ['grass', 'dark'], 'uncommon', [90, 100, 60, 90, 60, 80], null, 0,
    [[1, 'razorleaf'], [1, 'faintattack'], [1, 'gigadrain'], [30, 'leafblade'], [38, 'swordsdance'], [46, 'solarbeam']],
    'A forest guardian said to whip up gales with the fans it carries.', { final: true, catchRate: 45, growth: MS });

  sp(276, 'taillow', 'Taillow', ['normal', 'flying'], 'common', [40, 55, 30, 30, 30, 85], 'swellow', 22,
    [[1, 'peck'], [1, 'growl'], [8, 'quickattack'], [13, 'wingattack'], [21, 'aerialace'], [29, 'takedown']],
    'A gutsy migrant that never backs down, no matter the odds.', { catchRate: 200, growth: MS });
  sp(277, 'swellow', 'Swellow', ['normal', 'flying'], 'uncommon', [60, 85, 60, 50, 50, 125], null, 0,
    [[1, 'peck'], [1, 'wingattack'], [21, 'aerialace'], [30, 'takedown'], [38, 'drillpeck'], [46, 'fly']],
    'It folds its wings and dives like a dart upon spotting prey.', { final: true, catchRate: 45, growth: MS });

  sp(278, 'wingull', 'Wingull', ['water', 'flying'], 'common', [40, 30, 30, 55, 30, 85], 'pelipper', 25,
    [[1, 'growl'], [1, 'watergun'], [8, 'wingattack'], [13, 'mudslap'], [21, 'aerialace'], [29, 'bubblebeam']],
    'It rides sea breezes on stiff wings, scooping food from the surf.', { catchRate: 190, growth: MF });
  sp(279, 'pelipper', 'Pelipper', ['water', 'flying'], 'uncommon', [60, 50, 100, 85, 70, 65], null, 0,
    [[1, 'watergun'], [1, 'wingattack'], [21, 'bubblebeam'], [30, 'surf'], [38, 'hydropump'], [44, 'fly']],
    'It carries small prey and even eggs in its enormous bill.', { final: true, catchRate: 45, growth: MF });

  sp(280, 'ralts', 'Ralts', ['psychic'], 'uncommon', [28, 25, 25, 45, 35, 40], 'kirlia', 20,
    [[1, 'growl'], [6, 'confusion'], [11, 'sandattack'], [16, 'psybeam'], [22, 'calmmind'], [25, 'futuresight']],
    'It senses emotion through its horns and hides from harsh feelings.', { catchRate: 235, growth: SL });
  sp(281, 'kirlia', 'Kirlia', ['psychic'], 'uncommon', [38, 35, 35, 65, 55, 50], 'gardevoir', 30,
    [[1, 'confusion'], [1, 'calmmind'], [16, 'psybeam'], [25, 'futuresight'], [31, 'psychic']],
    'When its trainer is happy, it spins and dances on light feet.', { mid: true, catchRate: 120, growth: SL });
  sp(282, 'gardevoir', 'Gardevoir', ['psychic'], 'rare', [68, 65, 65, 125, 115, 80], null, 0,
    [[1, 'confusion'], [1, 'calmmind'], [1, 'psychic'], [33, 'futuresight'], [42, 'hypnosis'], [49, 'shadowball']],
    'It can fold space to shield its trainer, even at great cost.', { final: true, catchRate: 45, growth: SL });

  sp(283, 'surskit', 'Surskit', ['bug', 'water'], 'uncommon', [40, 30, 32, 50, 52, 65], 'masquerain', 22,
    [[1, 'bubble'], [7, 'quickattack'], [13, 'sweetscent'], [19, 'bubblebeam'], [25, 'agility']],
    'It skates across still water, leaving a sweet syrup in its wake.', { catchRate: 200, growth: MF });
  sp(284, 'masquerain', 'Masquerain', ['bug', 'flying'], 'uncommon', [70, 60, 62, 80, 82, 60], null, 0,
    [[1, 'bubblebeam'], [1, 'gust'], [22, 'silverwind'], [30, 'aerialace'], [38, 'icywind']],
    'The eye patterns on its antennae glare to frighten attackers.', { final: true, catchRate: 75, growth: MF });

  sp(285, 'shroomish', 'Shroomish', ['grass'], 'common', [60, 40, 60, 40, 60, 35], 'breloom', 23,
    [[1, 'absorb'], [5, 'tackle'], [9, 'stunspore'], [13, 'leechlife'], [20, 'megadrain'], [29, 'spore']],
    'It releases spores from its head when disturbed in the leaf litter.', { catchRate: 255, growth: FL });
  sp(286, 'breloom', 'Breloom', ['grass', 'fighting'], 'uncommon', [60, 130, 80, 60, 60, 70], null, 0,
    [[1, 'absorb'], [1, 'leechlife'], [1, 'machpunch'], [23, 'megadrain'], [37, 'skyuppercut'], [45, 'spore']],
    'Its short arms snap out punches faster than the eye can follow.', { final: true, catchRate: 90, growth: FL });

  sp(287, 'slakoth', 'Slakoth', ['normal'], 'common', [60, 60, 60, 35, 35, 30], 'vigoroth', 18,
    [[1, 'scratch'], [1, 'yawn'], [7, 'slash'], [13, 'headbutt'], [19, 'furycutter'], [25, 'bodyslam']],
    'It naps twenty hours a day and barely stirs for a meal.', { catchRate: 255, growth: SL });
  sp(288, 'vigoroth', 'Vigoroth', ['normal'], 'common', [80, 80, 80, 55, 55, 90], 'slaking', 36,
    [[1, 'scratch'], [1, 'focusenergy'], [19, 'furycutter'], [27, 'slash'], [33, 'swordsdance'], [39, 'takedown']],
    'Too restless to ever sit still, it paces and thrashes constantly.', { mid: true, catchRate: 120, growth: SL });
  sp(289, 'slaking', 'Slaking', ['normal'], 'rare', [150, 160, 100, 95, 65, 100], null, 0,
    [[1, 'scratch'], [1, 'slash'], [1, 'yawn'], [36, 'swordsdance'], [45, 'strength'], [55, 'hyperbeam']],
    'A hulking sloth of immense power that moves only when it must.', { final: true, catchRate: 45, growth: SL });

  sp(290, 'nincada', 'Nincada', ['bug', 'ground'], 'common', [31, 45, 90, 30, 30, 40], 'ninjask', 20,
    [[1, 'scratch'], [1, 'harden'], [9, 'leechlife'], [14, 'furycutter'], [19, 'mudslap'], [25, 'dig']],
    'It lives underground, drawing nutrients from tree roots in the dark.', { catchRate: 255, growth: ER });
  sp(291, 'ninjask', 'Ninjask', ['bug', 'flying'], 'uncommon', [61, 90, 45, 50, 50, 160], null, 0,
    [[1, 'scratch'], [1, 'furycutter'], [20, 'doubleteam'], [25, 'swordsdance'], [38, 'aerialace'], [45, 'agility']],
    'It darts so fast it seems to vanish, leaving only a shrill cry.', { final: true, catchRate: 120, growth: ER });
  sp(292, 'shedinja', 'Shedinja', ['bug', 'ghost'], 'rare', [1, 90, 45, 30, 30, 40], null, 0,
    [[1, 'scratch'], [1, 'harden'], [1, 'leechlife'], [25, 'shadowball'], [37, 'furycutter'], [45, 'confusion']],
    'A hollow shell left behind by Nincada, said to peer into the spirit world.', { final: true, catchRate: 45, growth: ER });

  sp(293, 'whismur', 'Whismur', ['normal'], 'common', [64, 51, 23, 51, 23, 28], 'loudred', 20,
    [[1, 'pound'], [5, 'growl'], [11, 'howl'], [15, 'headbutt'], [20, 'uproar'], [25, 'screech']],
    'It is so timid that its own startled cries make it cry louder.', { catchRate: 190, growth: MF });
  sp(294, 'loudred', 'Loudred', ['normal'], 'common', [84, 71, 43, 71, 43, 48], 'exploud', 40,
    [[1, 'pound'], [1, 'howl'], [20, 'uproar'], [26, 'screech'], [34, 'strength'], [40, 'hyperbeam']],
    'Its booming voice flattens grass and rattles windows for miles.', { mid: true, catchRate: 120, growth: MF });
  sp(295, 'exploud', 'Exploud', ['normal'], 'uncommon', [104, 91, 63, 91, 73, 68], null, 0,
    [[1, 'pound'], [1, 'uproar'], [40, 'screech'], [46, 'strength'], [52, 'crunch'], [58, 'hyperbeam']],
    'The tubes covering it bellow blasts that can be heard across a region.', { final: true, catchRate: 45, growth: MF });

  sp(296, 'makuhita', 'Makuhita', ['fighting'], 'common', [72, 60, 30, 20, 30, 25], 'hariyama', 24,
    [[1, 'tackle'], [4, 'focusenergy'], [10, 'armthrust'], [13, 'rocksmash'], [19, 'karatechop'], [25, 'brickbreak']],
    'It builds bulk by slamming into thick trees again and again.', { catchRate: 180, growth: FL });
  sp(297, 'hariyama', 'Hariyama', ['fighting'], 'uncommon', [144, 120, 60, 40, 60, 50], null, 0,
    [[1, 'armthrust'], [1, 'brickbreak'], [24, 'crosschop'], [33, 'strength'], [40, 'submission'], [47, 'earthquake']],
    'Its open-palm slaps can send a truck skidding across a road.', { final: true, catchRate: 200, growth: FL });

  sp(298, 'azurill', 'Azurill', ['normal'], 'common', [50, 20, 40, 20, 40, 20], 'marill', 18,
    [[1, 'tackle'], [3, 'tailwhip'], [6, 'watergun'], [10, 'bubble'], [15, 'bubblebeam']],
    'It swings its bouncy tail to fling itself surprising distances.', { catchRate: 150, growth: FL });

  sp(299, 'nosepass', 'Nosepass', ['rock'], 'uncommon', [30, 45, 135, 45, 90, 30], null, 0,
    [[1, 'tackle'], [1, 'harden'], [7, 'rockthrow'], [13, 'rocktomb'], [19, 'rockslide'], [28, 'ancientpower']],
    'Its magnetic nose always points north, dragging it about in confusion.', { catchRate: 255, growth: MF });

  sp(300, 'skitty', 'Skitty', ['normal'], 'common', [50, 45, 45, 35, 35, 50], 'delcatty', 20,
    [[1, 'tackle'], [1, 'growl'], [7, 'tailwhip'], [13, 'headbutt'], [19, 'faintattack'], [25, 'doubleedge']],
    'It chases its own tail in dizzy circles whenever something moves.', { catchRate: 255, growth: FL });
  sp(301, 'delcatty', 'Delcatty', ['normal'], 'uncommon', [70, 65, 65, 55, 55, 70], null, 0,
    [[1, 'headbutt'], [1, 'faintattack'], [1, 'sing'], [20, 'doubleedge'], [30, 'shadowball'], [38, 'thunderbolt']],
    'A free spirit that naps wherever it pleases and answers to no schedule.', { final: true, catchRate: 60, growth: FL });
})();
