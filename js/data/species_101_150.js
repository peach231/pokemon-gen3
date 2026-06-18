// pokemon-gen3 — species_101_150.js  (roster slots 101-150)
(function () {
  var sp = G.defSpecies;
  var MS = 'mediumSlow', MF = 'mediumFast', SL = 'slow', FL = 'fluctuating', FA = 'fast', ER = 'erratic';

  // 1. Azumarill
  sp(184, 'azumarill', 'Azumarill', ['water'], 'uncommon', [100, 50, 80, 60, 80, 50], null, 0,
    [[1, 'tackle'], [1, 'watergun'], [10, 'bubblebeam'], [24, 'aquajet'], [37, 'doubleedge'], [45, 'surf'], [54, 'hydropump']],
    'It paddles its round body across lakes, pinging the water with its ears to find hidden prey.',
    { final: true, growth: FL, catchRate: 60 });

  // 2. Castform
  sp(351, 'castform', 'Castform', ['normal'], 'uncommon', [70, 70, 70, 70, 70, 70], null, 0,
    [[1, 'tackle'], [1, 'watergun'], [10, 'ember'], [20, 'powdersnow'], [30, 'sunnyday'], [40, 'raindance'], [50, 'swift']],
    'Its body reshapes itself to mimic whatever weather happens to be rolling through the sky.',
    { growth: MF, catchRate: 45 });

  // 3. Kecleon
  sp(352, 'kecleon', 'Kecleon', ['normal'], 'uncommon', [60, 90, 70, 60, 120, 40], null, 0,
    [[1, 'scratch'], [1, 'tailwhip'], [12, 'bite'], [24, 'faintattack'], [36, 'slash'], [48, 'shadowball'], [56, 'screech']],
    'It blends into any backdrop and only the red stripe across its belly betrays its presence.',
    { growth: MS, catchRate: 200 });

  // 4. Shuppet
  sp(353, 'shuppet', 'Shuppet', ['ghost'], 'common', [44, 75, 35, 63, 33, 45], 'banette', 37,
    [[1, 'lick'], [1, 'leer'], [13, 'faintattack'], [25, 'shadowball'], [33, 'pursuit'], [41, 'screech']],
    'It drifts toward homes humming with resentment and feeds quietly on those dark feelings.',
    { growth: FA, catchRate: 225 });

  // 5. Banette
  sp(354, 'banette', 'Banette', ['ghost'], 'uncommon', [64, 115, 65, 83, 63, 65], null, 0,
    [[1, 'lick'], [1, 'leer'], [13, 'faintattack'], [25, 'shadowball'], [37, 'crunch'], [45, 'shadowpunch'], [53, 'screech']],
    'A discarded doll that came alive with spite, it seeks the child who once threw it away.',
    { final: true, growth: FA, catchRate: 45 });

  // 6. Duskull
  sp(355, 'duskull', 'Duskull', ['ghost'], 'common', [20, 40, 90, 30, 90, 25], 'dusclops', 37,
    [[1, 'leer'], [1, 'lick'], [13, 'faintattack'], [25, 'shadowball'], [33, 'pursuit'], [41, 'confusion']],
    'It glides silently through the night, its single hollow eye fixed on anyone who is afraid.',
    { growth: FA, catchRate: 190 });

  // 7. Dusclops
  sp(356, 'dusclops', 'Dusclops', ['ghost'], 'uncommon', [40, 70, 130, 60, 130, 25], null, 0,
    [[1, 'leer'], [1, 'lick'], [13, 'faintattack'], [25, 'shadowball'], [37, 'shadowpunch'], [45, 'firepunch'], [53, 'futuresight']],
    'Its body is utterly hollow, and whatever it draws into that void is never seen again.',
    { final: true, growth: FA, catchRate: 90 });

  // 8. Tropius
  sp(357, 'tropius', 'Tropius', ['grass', 'flying'], 'uncommon', [99, 68, 83, 72, 87, 51], null, 0,
    [[1, 'leer'], [1, 'gust'], [11, 'razorleaf'], [23, 'magicalleaf'], [33, 'aerialace'], [43, 'solarbeam'], [51, 'sweetscent']],
    'The fruit hanging from its neck grows sweetest in the children who tend it with care.',
    { growth: SL, catchRate: 200 });

  // 9. Chimecho
  sp(358, 'chimecho', 'Chimecho', ['psychic'], 'uncommon', [65, 50, 70, 95, 80, 65], null, 0,
    [[1, 'growl'], [1, 'confusion'], [12, 'psybeam'], [24, 'doubleedge'], [33, 'psychic'], [44, 'calmmind']],
    'It hangs from high branches and rings a soft chime that carries strange echoes for miles.',
    { growth: FA, catchRate: 45 });

  // 10. Absol
  sp(359, 'absol', 'Absol', ['dark'], 'rare', [65, 130, 60, 75, 60, 75], null, 0,
    [[1, 'scratch'], [1, 'leer'], [9, 'quickattack'], [20, 'bite'], [30, 'faintattack'], [41, 'slash'], [52, 'crunch']],
    'It appears just before disaster strikes, so frightened villagers wrongly blame it for the calamity.',
    { growth: MS, catchRate: 30 });

  // 11. Wynaut
  sp(360, 'wynaut', 'Wynaut', ['psychic'], 'common', [95, 23, 48, 23, 48, 23], 'wobbuffet', 15,
    [[1, 'tackle'], [1, 'leer'], [10, 'pound'], [15, 'confusion']],
    'It loves to bump bellies with friends, and the cheerful smack echoes across the whole meadow.',
    { growth: MS, catchRate: 125 });

  // 12. Wobbuffet
  sp(202, 'wobbuffet', 'Wobbuffet', ['psychic'], 'uncommon', [190, 33, 58, 33, 58, 33], null, 0,
    [[1, 'tackle'], [1, 'confusion'], [15, 'pound'], [20, 'doubleedge'], [30, 'psychic'], [40, 'doubleteam']],
    'It hates revealing its black tail and would rather endure any blow than show its weak point.',
    { final: true, growth: MF, catchRate: 45 });

  // 13. Snorunt
  sp(361, 'snorunt', 'Snorunt', ['ice'], 'common', [50, 50, 50, 50, 50, 50], 'glalie', 42,
    [[1, 'powdersnow'], [1, 'leer'], [13, 'icywind'], [25, 'headbutt'], [33, 'bite'], [42, 'icebeam']],
    'It huddles in snowdrifts during blizzards and is said to bring fortune to the home it shelters in.',
    { growth: MS, catchRate: 190 });

  // 14. Glalie
  sp(362, 'glalie', 'Glalie', ['ice'], 'uncommon', [80, 80, 80, 80, 80, 80], null, 0,
    [[1, 'powdersnow'], [1, 'leer'], [13, 'icywind'], [25, 'headbutt'], [37, 'crunch'], [46, 'icebeam'], [55, 'blizzard']],
    'It can flash-freeze its prey solid, then crack the ice apart at a leisurely pace to feed.',
    { final: true, growth: MS, catchRate: 75 });

  // 15. Spheal
  sp(363, 'spheal', 'Spheal', ['ice', 'water'], 'common', [70, 40, 50, 55, 50, 25], 'sealeo', 32,
    [[1, 'powdersnow'], [1, 'growl'], [13, 'watergun'], [21, 'aurorabeam'], [29, 'bodyslam'], [37, 'icebeam']],
    'It rolls everywhere instead of walking, and a whole colony of them spinning sounds like applause.',
    { growth: MS, catchRate: 255 });

  // 16. Sealeo
  sp(364, 'sealeo', 'Sealeo', ['ice', 'water'], 'uncommon', [90, 60, 70, 75, 70, 45], 'walrein', 44,
    [[1, 'powdersnow'], [1, 'growl'], [13, 'watergun'], [21, 'aurorabeam'], [29, 'bodyslam'], [38, 'icebeam'], [46, 'surf']],
    'It balances objects on its nose for hours, sniffing each new thing it finds out of pure curiosity.',
    { mid: true, growth: MS, catchRate: 120 });

  // 17. Walrein
  sp(365, 'walrein', 'Walrein', ['ice', 'water'], 'uncommon', [110, 80, 90, 95, 90, 65], null, 0,
    [[1, 'powdersnow'], [1, 'growl'], [13, 'watergun'], [21, 'aurorabeam'], [29, 'bodyslam'], [38, 'icebeam'], [50, 'blizzard'], [56, 'hydropump']],
    'It shatters thick drift ice with its mighty tusks while shrugging off the iciest seas.',
    { final: true, growth: MS, catchRate: 45 });

  // 18. Clamperl
  sp(366, 'clamperl', 'Clamperl', ['water'], 'common', [35, 64, 85, 74, 55, 32], 'huntail', 30,
    [[1, 'watergun'], [1, 'withdraw'], [12, 'bubblebeam'], [24, 'irontail'], [30, 'surf']],
    'A single pearl forms once in its lifetime, and the shell guards that treasure with stubborn force.',
    { growth: ER, catchRate: 255 });

  // 19. Huntail
  sp(367, 'huntail', 'Huntail', ['water'], 'uncommon', [55, 104, 105, 94, 75, 52], null, 0,
    [[1, 'watergun'], [1, 'bite'], [12, 'bubblebeam'], [24, 'screech'], [36, 'crunch'], [45, 'surf'], [54, 'hydropump']],
    'Its tail mimics a small fish to lure curious prey straight into its waiting jaws.',
    { final: true, growth: ER, catchRate: 60 });

  // 20. Gorebyss
  sp(368, 'gorebyss', 'Gorebyss', ['water'], 'uncommon', [55, 84, 105, 114, 75, 52], null, 0,
    [[1, 'watergun'], [1, 'confusion'], [12, 'bubblebeam'], [24, 'agility'], [36, 'psychic'], [45, 'surf'], [54, 'hydropump']],
    'It draws nourishment from the warm undersea currents and turns a vivid pink in springtime.',
    { final: true, growth: ER, catchRate: 60 });

  // 21. Relicanth
  sp(369, 'relicanth', 'Relicanth', ['water', 'rock'], 'rare', [100, 90, 130, 45, 65, 55], null, 0,
    [[1, 'tackle'], [1, 'harden'], [8, 'watergun'], [20, 'rocktomb'], [30, 'ancientpower'], [40, 'doubleedge'], [50, 'rockslide']],
    'Unchanged for a hundred million years, it lurks so deep that pressure crushes most who seek it.',
    { growth: SL, catchRate: 25 });

  // 22. Luvdisc
  sp(370, 'luvdisc', 'Luvdisc', ['water'], 'common', [43, 30, 55, 40, 65, 97], null, 0,
    [[1, 'tackle'], [1, 'watergun'], [9, 'agility'], [16, 'bubblebeam'], [27, 'sweetscent'], [40, 'surf']],
    'Couples who spot this heart-shaped fish swimming together are promised a love that lasts.',
    { growth: FA, catchRate: 225 });

  // 23. Bagon
  sp(371, 'bagon', 'Bagon', ['dragon'], 'rare', [45, 75, 60, 40, 30, 50], 'shelgon', 30,
    [[1, 'leer'], [1, 'tackle'], [12, 'ember'], [21, 'headbutt'], [30, 'dragonbreath'], [38, 'bite']],
    'It hurls itself off cliffs again and again, dreaming with all its heart of one day taking flight.',
    { growth: SL, catchRate: 45 });

  // 24. Shelgon
  sp(372, 'shelgon', 'Shelgon', ['dragon'], 'rare', [65, 95, 100, 60, 50, 50], 'salamence', 47,
    [[1, 'leer'], [1, 'tackle'], [12, 'ember'], [21, 'headbutt'], [30, 'dragonbreath'], [42, 'crunch'], [50, 'dragonclaw']],
    'Sealed inside its heavy shell, it neither eats nor moves while its body quietly reforges itself.',
    { mid: true, growth: SL, catchRate: 45 });

  // 25. Salamence
  sp(373, 'salamence', 'Salamence', ['dragon', 'flying'], 'rare', [95, 135, 80, 110, 80, 100], null, 0,
    [[1, 'leer'], [1, 'tackle'], [12, 'ember'], [21, 'dragonbreath'], [30, 'wingattack'], [42, 'crunch'], [55, 'dragonclaw'], [65, 'flamethrower']],
    'When its lifelong wish for wings finally comes true, sheer joy can drive it into a furious rampage.',
    { final: true, growth: SL, catchRate: 45 });

  // 26. Beldum
  sp(374, 'beldum', 'Beldum', ['steel', 'psychic'], 'rare', [40, 55, 80, 35, 60, 30], 'metang', 20,
    [[1, 'tackle'], [1, 'harden'], [15, 'metalclaw'], [25, 'confusion'], [35, 'takedown']],
    'It hovers by pulsing the magnetism in its body and converses with its kin in bursts of waves.',
    { growth: SL, catchRate: 3 });

  // 27. Metang
  sp(375, 'metang', 'Metang', ['steel', 'psychic'], 'rare', [60, 75, 100, 55, 80, 50], 'metagross', 45,
    [[1, 'tackle'], [1, 'metalclaw'], [20, 'confusion'], [30, 'pursuit'], [38, 'psychic'], [44, 'meteormash']],
    'Two Beldum fused into one mind, it pushes forward with both brains aimed at a single target.',
    { mid: true, growth: SL, catchRate: 3 });

  // 28. Metagross
  sp(376, 'metagross', 'Metagross', ['steel', 'psychic'], 'rare', [80, 135, 130, 95, 90, 70], null, 0,
    [[1, 'tackle'], [1, 'metalclaw'], [20, 'confusion'], [30, 'pursuit'], [38, 'psychic'], [45, 'meteormash'], [55, 'earthquake'], [62, 'hyperbeam']],
    'With four linked brains outthinking any computer, it pins foes flat beneath its enormous bulk.',
    { final: true, growth: SL, catchRate: 3 });

  // 29. Regirock
  sp(377, 'regirock', 'Regirock', ['rock'], 'legendary', [80, 100, 200, 50, 100, 50], null, 0,
    [[1, 'rockthrow'], [1, 'harden'], [16, 'rocktomb'], [28, 'ancientpower'], [40, 'rockslide'], [52, 'earthquake'], [64, 'hyperbeam']],
    'Whenever a piece chips away, it simply hunts down fresh stone and presses it into place.',
    { growth: SL, catchRate: 3 });

  // 30. Regice
  sp(378, 'regice', 'Regice', ['ice'], 'legendary', [80, 50, 100, 100, 200, 50], null, 0,
    [[1, 'powdersnow'], [1, 'harden'], [16, 'icywind'], [28, 'ancientpower'], [40, 'icebeam'], [52, 'blizzard'], [64, 'hyperbeam']],
    'Frozen during a long-ago ice age, its body stays colder than any flame can ever begin to melt.',
    { growth: SL, catchRate: 3 });

  // 31. Registeel
  sp(379, 'registeel', 'Registeel', ['steel'], 'legendary', [80, 75, 150, 75, 150, 50], null, 0,
    [[1, 'metalclaw'], [1, 'harden'], [16, 'irontail'], [28, 'ancientpower'], [40, 'meteormash'], [52, 'earthquake'], [64, 'hyperbeam']],
    'Its body was tempered under crushing pressure deep underground until no drill could scratch it.',
    { growth: SL, catchRate: 3 });

  // 32. Latias
  sp(380, 'latias', 'Latias', ['dragon', 'psychic'], 'legendary', [80, 80, 90, 110, 130, 110], null, 0,
    [[1, 'confusion'], [1, 'leer'], [15, 'dragonbreath'], [30, 'psybeam'], [45, 'dragonclaw'], [55, 'psychic'], [65, 'hyperbeam']],
    'Wrapped in a glassy down that bends light, it sees and reads the heart of anyone nearby.',
    { growth: SL, catchRate: 3 });

  // 33. Latios
  sp(381, 'latios', 'Latios', ['dragon', 'psychic'], 'legendary', [80, 90, 80, 130, 110, 110], null, 0,
    [[1, 'confusion'], [1, 'leer'], [15, 'dragonbreath'], [30, 'psybeam'], [45, 'dragonclaw'], [55, 'psychic'], [65, 'hyperbeam']],
    'It folds its wings tight and outraces a jet, beaming images straight into a trusted friend\'s mind.',
    { growth: SL, catchRate: 3 });

  // 34. Kyogre
  sp(382, 'kyogre', 'Kyogre', ['water'], 'legendary', [100, 100, 90, 150, 140, 90], null, 0,
    [[1, 'watergun'], [1, 'leer'], [15, 'bubblebeam'], [30, 'raindance'], [45, 'icebeam'], [55, 'surf'], [65, 'hydropump'], [75, 'hyperbeam']],
    'Said to have summoned the rains that filled the oceans, it slumbers far beneath the deepest trench.',
    { growth: SL, catchRate: 3 });

  // 35. Groudon
  sp(383, 'groudon', 'Groudon', ['ground'], 'legendary', [100, 150, 140, 100, 90, 90], null, 0,
    [[1, 'mudslap'], [1, 'leer'], [15, 'magnitude'], [30, 'sunnyday'], [45, 'firepunch'], [55, 'earthquake'], [65, 'flamethrower'], [75, 'hyperbeam']],
    'Legends claim it raised the continents from the sea, scorching the land with searing daylight.',
    { growth: SL, catchRate: 3 });

  // 36. Rayquaza
  sp(384, 'rayquaza', 'Rayquaza', ['dragon', 'flying'], 'legendary', [105, 150, 90, 150, 90, 95], null, 0,
    [[1, 'twister'], [1, 'leer'], [15, 'dragonbreath'], [30, 'aerialace'], [45, 'dragonclaw'], [55, 'dragondance'], [65, 'fly'], [75, 'hyperbeam']],
    'It coils through the high ozone layer and descends only to calm a clash of land and sea.',
    { growth: SL, catchRate: 3 });

  // 37. Jirachi
  sp(385, 'jirachi', 'Jirachi', ['steel', 'psychic'], 'legendary', [100, 100, 100, 100, 100, 100], null, 0,
    [[1, 'confusion'], [1, 'swift'], [15, 'metalclaw'], [30, 'psybeam'], [45, 'meteormash'], [55, 'psychic'], [65, 'futuresight'], [75, 'hyperbeam']],
    'It wakes for only a week every thousand years, and waking it gently is said to grant a wish.',
    { growth: SL, catchRate: 3 });

  // 38. Deoxys
  sp(386, 'deoxys', 'Deoxys', ['psychic'], 'legendary', [50, 150, 50, 150, 50, 150], null, 0,
    [[1, 'confusion'], [1, 'leer'], [15, 'psybeam'], [30, 'swift'], [45, 'psychic'], [55, 'agility'], [65, 'futuresight'], [75, 'hyperbeam']],
    'Born when a virus from space mutated in a meteor, its crystalline core houses a restless brain.',
    { growth: SL, catchRate: 3 });

  // 39. Geodude
  sp(74, 'geodude', 'Geodude', ['rock', 'ground'], 'common', [40, 80, 100, 30, 30, 20], 'graveler', 25,
    [[1, 'tackle'], [1, 'defensecurl'], [11, 'rockthrow'], [16, 'magnitude'], [21, 'rocktomb'], [31, 'rockslide']],
    'It looks like an ordinary boulder until a careless hiker steps on it and feels it punch back.',
    { growth: MS, catchRate: 255 });

  // 40. Graveler
  sp(75, 'graveler', 'Graveler', ['rock', 'ground'], 'uncommon', [55, 95, 115, 45, 45, 35], 'golem', 35,
    [[1, 'tackle'], [1, 'defensecurl'], [11, 'rockthrow'], [16, 'magnitude'], [21, 'rocktomb'], [31, 'rockslide'], [41, 'earthquake']],
    'It rolls downhill to travel, flattening anything in its path and gobbling up tasty rocks on the way.',
    { mid: true, growth: MS, catchRate: 120 });

  // 41. Golem
  sp(76, 'golem', 'Golem', ['rock', 'ground'], 'uncommon', [80, 120, 130, 55, 65, 45], null, 0,
    [[1, 'tackle'], [1, 'defensecurl'], [11, 'rockthrow'], [16, 'magnitude'], [21, 'rocktomb'], [31, 'rockslide'], [41, 'earthquake'], [51, 'doubleedge']],
    'It sheds its boulder-hard hide once a year and curls into a wheel to crush whatever lies ahead.',
    { final: true, growth: MS, catchRate: 45 });

  // 42. Magikarp
  sp(129, 'magikarp', 'Magikarp', ['water'], 'common', [20, 10, 55, 15, 20, 80], 'gyarados', 20,
    [[1, 'tackle'], [15, 'leer']],
    'It flops about uselessly on land and is famous as the most pitifully weak fish in any pond.',
    { growth: SL, catchRate: 255 });

  // 43. Gyarados
  sp(130, 'gyarados', 'Gyarados', ['water', 'flying'], 'uncommon', [95, 125, 79, 60, 100, 81], null, 0,
    [[1, 'tackle'], [1, 'leer'], [20, 'bite'], [25, 'bubblebeam'], [35, 'dragonbreath'], [45, 'crunch'], [55, 'surf'], [60, 'hydropump']],
    'Once the laughingstock evolves, its rage knows no bounds and entire towns can vanish in its wake.',
    { final: true, growth: SL, catchRate: 45 });

  // 44. Tentacool
  sp(72, 'tentacool', 'Tentacool', ['water', 'poison'], 'common', [40, 40, 35, 50, 100, 70], 'tentacruel', 30,
    [[1, 'poisonsting'], [1, 'tackle'], [12, 'watergun'], [19, 'acid'], [25, 'bubblebeam'], [36, 'sludge']],
    'Nearly invisible in the surf, it stuns swimmers with a sudden sting from its drifting tentacles.',
    { growth: SL, catchRate: 190 });

  // 45. Tentacruel
  sp(73, 'tentacruel', 'Tentacruel', ['water', 'poison'], 'uncommon', [80, 70, 65, 80, 120, 100], null, 0,
    [[1, 'poisonsting'], [1, 'tackle'], [12, 'watergun'], [19, 'acid'], [25, 'bubblebeam'], [36, 'sludgebomb'], [47, 'surf'], [55, 'hydropump']],
    'Its eighty tentacles spread like a glowing net to corral whole schools of frightened fish.',
    { final: true, growth: SL, catchRate: 60 });

  // 46. Machop
  sp(66, 'machop', 'Machop', ['fighting'], 'common', [70, 80, 50, 35, 35, 35], 'machoke', 28,
    [[1, 'karatechop'], [1, 'leer'], [13, 'lowkick'], [19, 'focusenergy'], [25, 'rocksmash'], [37, 'submission']],
    'It trains by lifting boulders far heavier than itself, building muscles that never seem to tire.',
    { growth: MS, catchRate: 180 });

  // 47. Machoke
  sp(67, 'machoke', 'Machoke', ['fighting'], 'uncommon', [80, 100, 70, 50, 60, 45], 'machamp', 40,
    [[1, 'karatechop'], [1, 'leer'], [13, 'lowkick'], [19, 'focusenergy'], [25, 'brickbreak'], [37, 'submission'], [46, 'crosschop']],
    'The power belt it wears keeps its overwhelming strength in check so it can work without breaking things.',
    { mid: true, growth: MS, catchRate: 90 });

  // 48. Machamp
  sp(68, 'machamp', 'Machamp', ['fighting'], 'uncommon', [90, 130, 80, 65, 85, 55], null, 0,
    [[1, 'karatechop'], [1, 'leer'], [13, 'lowkick'], [19, 'focusenergy'], [25, 'brickbreak'], [37, 'bulkup'], [46, 'crosschop'], [54, 'skyuppercut']],
    'Its four arms throw a flurry of punches so fast the blows blur into a single thunderous strike.',
    { final: true, growth: MS, catchRate: 45 });

  // 49. Magnemite
  sp(81, 'magnemite', 'Magnemite', ['electric', 'steel'], 'common', [25, 35, 70, 95, 55, 45], 'magneton', 30,
    [[1, 'tackle'], [1, 'thundershock'], [11, 'shockwave'], [21, 'spark'], [30, 'thunderbolt'], [40, 'metalclaw']],
    'It floats by emitting magnetism from its sides and clings to anything iron it happens to pass.',
    { growth: MF, catchRate: 190 });

  // 50. Magneton
  sp(82, 'magneton', 'Magneton', ['electric', 'steel'], 'uncommon', [50, 60, 95, 120, 70, 70], null, 0,
    [[1, 'tackle'], [1, 'thundershock'], [11, 'shockwave'], [21, 'spark'], [30, 'thunderbolt'], [40, 'irontail'], [50, 'thunder'], [56, 'hyperbeam']],
    'Three magnetic units linked together, it crackles so fiercely that nearby compasses spin wildly.',
    { final: true, growth: MF, catchRate: 60 });

})();
