// pokemon-gen3 — species_051_100.js  (roster slots 51-100)
(function () {
  var sp = G.defSpecies;
  var MS = 'mediumSlow', MF = 'mediumFast', SL = 'slow', FL = 'fluctuating', FA = 'fast', ER = 'erratic';

  // 51. Sableye — standalone basic
  sp(302, 'sableye', 'Sableye', ['dark', 'ghost'], 'uncommon',
    [50, 75, 75, 65, 65, 50], null, 0,
    [[1, 'leer'], [1, 'scratch'], [9, 'lick'], [17, 'faintattack'], [25, 'shadowpunch'], [33, 'pursuit'], [41, 'shadowball'], [49, 'crunch']],
    'A gem-eyed sprite that lurks in cave shadows, snatching shiny stones with its gleaming claws.',
    { growth: MS, catchRate: 45 });

  // 52. Mawile — standalone basic
  sp(303, 'mawile', 'Mawile', ['steel'], 'uncommon',
    [50, 85, 85, 55, 55, 50], null, 0,
    [[1, 'tackle'], [1, 'growl'], [11, 'bite'], [19, 'faintattack'], [27, 'irontail'], [35, 'crunch'], [43, 'metalclaw'], [50, 'meteormash']],
    'A deceptively gentle face hides the massive steel jaws that sprout from the back of its head.',
    { growth: FA, catchRate: 45 });

  // 53. Aron -> Lairon @32
  sp(304, 'aron', 'Aron', ['steel', 'rock'], 'common',
    [50, 70, 100, 40, 40, 30], 'lairon', 32,
    [[1, 'tackle'], [1, 'harden'], [7, 'metalclaw'], [13, 'headbutt'], [19, 'rocktomb'], [25, 'irontail'], [31, 'takedown']],
    'A tiny armored cub that gnaws on iron rails and boulders to grow its metallic hide.',
    { growth: SL, catchRate: 180 });

  // 54. Lairon -> Aggron @42 (mid)
  sp(305, 'lairon', 'Lairon', ['steel', 'rock'], 'uncommon',
    [60, 90, 140, 50, 50, 40], 'aggron', 42,
    [[1, 'tackle'], [1, 'harden'], [13, 'metalclaw'], [21, 'rockslide'], [29, 'irontail'], [37, 'takedown'], [45, 'doubleedge']],
    'Its plated body clangs like a struck anvil as it charges headlong through tunnels.',
    { mid: true, growth: SL, catchRate: 90 });

  // 55. Aggron (final)
  sp(306, 'aggron', 'Aggron', ['steel', 'rock'], 'rare',
    [70, 110, 180, 60, 60, 50], null, 0,
    [[1, 'tackle'], [1, 'metalclaw'], [21, 'rockslide'], [29, 'irontail'], [37, 'earthquake'], [45, 'meteormash'], [53, 'doubleedge'], [60, 'hyperbeam']],
    'A mountain of living iron whose stomping reshapes the very cliffs it patrols.',
    { final: true, growth: SL, catchRate: 45 });

  // 56. Meditite -> Medicham @37
  sp(307, 'meditite', 'Meditite', ['fighting', 'psychic'], 'common',
    [30, 40, 55, 40, 55, 60], 'medicham', 37,
    [[1, 'tackle'], [1, 'confusion'], [9, 'karatechop'], [17, 'focusenergy'], [25, 'psybeam'], [33, 'calmmind']],
    'A meditating apprentice that floats cross-legged while honing the mental fire within.',
    { growth: MF, catchRate: 180 });

  // 57. Medicham (final)
  sp(308, 'medicham', 'Medicham', ['fighting', 'psychic'], 'uncommon',
    [60, 60, 75, 60, 75, 80], null, 0,
    [[1, 'confusion'], [1, 'karatechop'], [17, 'brickbreak'], [25, 'psybeam'], [33, 'calmmind'], [41, 'skyuppercut'], [49, 'psychic']],
    'A serene martial monk that channels meditative trance into lightning-fast strikes.',
    { final: true, growth: MF, catchRate: 90 });

  // 58. Electrike -> Manectric @26
  sp(309, 'electrike', 'Electrike', ['electric'], 'common',
    [40, 45, 40, 65, 40, 65], 'manectric', 26,
    [[1, 'tackle'], [1, 'thundershock'], [9, 'leer'], [15, 'spark'], [21, 'quickattack'], [27, 'shockwave']],
    'A bristling green pup that crackles with static gathered while sprinting across the plains.',
    { growth: SL, catchRate: 120 });

  // 59. Manectric (final)
  sp(310, 'manectric', 'Manectric', ['electric'], 'uncommon',
    [70, 75, 60, 105, 60, 105], null, 0,
    [[1, 'thundershock'], [1, 'quickattack'], [15, 'spark'], [27, 'shockwave'], [35, 'thunderwave'], [43, 'thunderbolt'], [51, 'thunder']],
    'Its lightning-bolt mane discharges thunder that lances across the storm-darkened sky.',
    { final: true, growth: SL, catchRate: 45 });

  // 60. Plusle — standalone basic
  sp(311, 'plusle', 'Plusle', ['electric'], 'uncommon',
    [60, 50, 40, 85, 75, 95], null, 0,
    [[1, 'growl'], [1, 'thundershock'], [10, 'quickattack'], [18, 'spark'], [26, 'shockwave'], [34, 'swift'], [42, 'thunderbolt']],
    'A cheerleading sprite whose plus-shaped cheeks spark brightest when its partner charges in.',
    { growth: MF, catchRate: 200 });

  // 61. Minun — standalone basic
  sp(312, 'minun', 'Minun', ['electric'], 'uncommon',
    [60, 40, 50, 75, 85, 95], null, 0,
    [[1, 'growl'], [1, 'thundershock'], [10, 'quickattack'], [18, 'spark'], [26, 'shockwave'], [34, 'swift'], [42, 'thunderbolt']],
    'A minus-cheeked companion that throws off dazzling sparks to encourage its battling friend.',
    { growth: MF, catchRate: 200 });

  // 62. Volbeat — standalone basic
  sp(313, 'volbeat', 'Volbeat', ['bug'], 'uncommon',
    [65, 73, 55, 47, 75, 85], null, 0,
    [[1, 'tackle'], [1, 'leechlife'], [9, 'quickattack'], [17, 'confusion'], [25, 'signalbeam'], [33, 'silverwind'], [41, 'doubleteam']],
    'A firefly that swirls its glowing tail to paint signals across the warm summer dusk.',
    { growth: ER, catchRate: 150 });

  // 63. Illumise — standalone basic
  sp(314, 'illumise', 'Illumise', ['bug'], 'uncommon',
    [65, 47, 55, 73, 75, 85], null, 0,
    [[1, 'tackle'], [1, 'sweetscent'], [9, 'quickattack'], [17, 'confusion'], [25, 'signalbeam'], [33, 'silverwind'], [41, 'doubleteam']],
    'A graceful firefly that leads swarms of dancing lights with a sweet, luring perfume.',
    { growth: FL, catchRate: 150 });

  // 64. Roselia — standalone basic
  sp(315, 'roselia', 'Roselia', ['grass', 'poison'], 'uncommon',
    [50, 60, 45, 100, 80, 65], null, 0,
    [[1, 'absorb'], [1, 'growth'], [9, 'poisonsting'], [17, 'megadrain'], [25, 'magicalleaf'], [33, 'gigadrain'], [41, 'sludgebomb']],
    'A thorny sprite that offers a bloom in each hand, one soothing and one laced with venom.',
    { growth: MS, catchRate: 150 });

  // 65. Gulpin -> Swalot @26
  sp(316, 'gulpin', 'Gulpin', ['poison'], 'common',
    [70, 43, 53, 43, 53, 40], 'swalot', 26,
    [[1, 'pound'], [1, 'poisonsting'], [9, 'yawn'], [15, 'acid'], [21, 'sludge'], [27, 'toxic']],
    'A jiggling stomach with eyes that swallows pebbles whole to grind down anything it eats.',
    { growth: FL, catchRate: 225 });

  // 66. Swalot (final)
  sp(317, 'swalot', 'Swalot', ['poison'], 'uncommon',
    [100, 73, 83, 73, 83, 55], null, 0,
    [[1, 'pound'], [1, 'sludge'], [15, 'acid'], [27, 'toxic'], [35, 'bodyslam'], [43, 'sludgebomb'], [51, 'yawn']],
    'Its cavernous maw can engulf prey twice its size before slowly dissolving them in acid.',
    { final: true, growth: FL, catchRate: 75 });

  // 67. Carvanha -> Sharpedo @30
  sp(318, 'carvanha', 'Carvanha', ['water', 'dark'], 'common',
    [45, 90, 20, 65, 20, 65], 'sharpedo', 30,
    [[1, 'leer'], [1, 'bite'], [8, 'aquajet'], [16, 'focusenergy'], [24, 'screech'], [30, 'crunch']],
    'A ravenous river piranha that swarms anything foolish enough to splash into its waters.',
    { growth: SL, catchRate: 225 });

  // 68. Sharpedo (final)
  sp(319, 'sharpedo', 'Sharpedo', ['water', 'dark'], 'uncommon',
    [70, 120, 40, 95, 40, 95], null, 0,
    [[1, 'bite'], [1, 'aquajet'], [16, 'focusenergy'], [24, 'screech'], [32, 'crunch'], [40, 'surf'], [48, 'hydropump']],
    'A torpedo-bodied predator that rockets through the sea, jaws agape, faster than any boat.',
    { final: true, growth: SL, catchRate: 60 });

  // 69. Wailmer -> Wailord @40 (FL)
  sp(320, 'wailmer', 'Wailmer', ['water'], 'common',
    [130, 70, 35, 70, 35, 60], 'wailord', 40,
    [[1, 'tackle'], [1, 'watergun'], [10, 'growl'], [18, 'bubblebeam'], [26, 'waterfall'], [34, 'raindance'], [40, 'surf']],
    'A bouncing blue balloon of a whale that gleefully spouts seawater high into the air.',
    { growth: FL, catchRate: 125 });

  // 70. Wailord (final, FL)
  sp(321, 'wailord', 'Wailord', ['water'], 'rare',
    [170, 90, 45, 90, 45, 60], null, 0,
    [[1, 'watergun'], [1, 'bodyslam'], [18, 'bubblebeam'], [26, 'waterfall'], [34, 'raindance'], [42, 'surf'], [50, 'hydropump']],
    'A floating leviathan so vast that flocks of bird Pokemon nest upon its broad blue back.',
    { final: true, growth: FL, catchRate: 60 });

  // 71. Numel -> Camerupt @33
  sp(322, 'numel', 'Numel', ['fire', 'ground'], 'common',
    [60, 60, 40, 65, 45, 35], 'camerupt', 33,
    [[1, 'growl'], [1, 'ember'], [11, 'magnitude'], [19, 'flamewheel'], [27, 'takedown'], [33, 'mudslap']],
    'A drowsy camel that stores magma in its hump and barely notices a blistering burn.',
    { growth: MF, catchRate: 255 });

  // 72. Camerupt (final)
  sp(323, 'camerupt', 'Camerupt', ['fire', 'ground'], 'uncommon',
    [70, 100, 70, 105, 75, 40], null, 0,
    [[1, 'ember'], [1, 'magnitude'], [19, 'flamewheel'], [27, 'takedown'], [37, 'flamethrower'], [45, 'earthquake'], [53, 'overheat']],
    'Twin volcanoes erupt from its back whenever this enraged beast loses its temper.',
    { final: true, growth: MF, catchRate: 150 });

  // 73. Torkoal — standalone basic
  sp(324, 'torkoal', 'Torkoal', ['fire'], 'uncommon',
    [70, 85, 140, 85, 70, 20], null, 0,
    [[1, 'ember'], [1, 'withdraw'], [9, 'flamewheel'], [17, 'rockslide'], [25, 'sunnyday'], [33, 'flamethrower'], [41, 'bodyslam'], [49, 'overheat']],
    'A coal-burning tortoise that vents smoke from its shell to mask a hasty retreat.',
    { growth: MS, catchRate: 90 });

  // 74. Spoink -> Grumpig @32
  sp(325, 'spoink', 'Spoink', ['psychic'], 'common',
    [60, 25, 35, 70, 80, 60], 'grumpig', 32,
    [[1, 'tackle'], [1, 'psybeam'], [10, 'confusion'], [18, 'futuresight'], [24, 'psybeam'], [32, 'psychic']],
    'A springy pig that bounces forever on its tail, for its heart stops if it ever sits still.',
    { growth: FA, catchRate: 255 });

  // 75. Grumpig (final)
  sp(326, 'grumpig', 'Grumpig', ['psychic'], 'uncommon',
    [80, 45, 65, 90, 110, 80], null, 0,
    [[1, 'psybeam'], [1, 'confusion'], [18, 'futuresight'], [26, 'calmmind'], [34, 'psychic'], [42, 'bodyslam'], [50, 'hyperbeam']],
    'A dancing swine that draws mysterious power from the black pearls studding its hide.',
    { final: true, growth: FA, catchRate: 60 });

  // 76. Spinda — standalone basic
  sp(327, 'spinda', 'Spinda', ['normal'], 'common',
    [60, 60, 60, 60, 60, 60], null, 0,
    [[1, 'tackle'], [1, 'defensecurl'], [7, 'doubleteam'], [14, 'psybeam'], [21, 'headbutt'], [28, 'facade'], [35, 'doubleedge']],
    'A teetering panda whose woozy stagger makes it nearly impossible for foes to land a hit.',
    { growth: FA, catchRate: 255 });

  // 77. Trapinch -> Vibrava @35
  sp(328, 'trapinch', 'Trapinch', ['ground'], 'common',
    [45, 100, 45, 45, 45, 10], 'vibrava', 35,
    [[1, 'bite'], [1, 'sandattack'], [9, 'mudslap'], [17, 'sandtomb'], [25, 'crunch'], [33, 'dig']],
    'A big-jawed larva that digs cone-shaped pits to ambush whatever tumbles into the sand.',
    { growth: MS, catchRate: 255 });

  // 78. Vibrava -> Flygon @45 (mid)
  sp(329, 'vibrava', 'Vibrava', ['ground', 'dragon'], 'uncommon',
    [50, 70, 50, 50, 50, 70], 'flygon', 45,
    [[1, 'sandattack'], [1, 'mudslap'], [17, 'sandtomb'], [25, 'dragonbreath'], [33, 'crunch'], [41, 'dig']],
    'Its rattling wings hum a droning chord that lulls weaker prey into a dizzy stupor.',
    { mid: true, growth: MS, catchRate: 120 });

  // 79. Flygon (final, MS)
  sp(330, 'flygon', 'Flygon', ['ground', 'dragon'], 'rare',
    [80, 100, 80, 80, 80, 100], null, 0,
    [[1, 'sandattack'], [1, 'dragonbreath'], [25, 'sandtomb'], [33, 'crunch'], [41, 'dragonclaw'], [49, 'earthquake'], [57, 'hyperbeam']],
    'A green desert spirit whose beating wings whip the sand into a shimmering veil of dust.',
    { final: true, growth: MS, catchRate: 45 });

  // 80. Cacnea -> Cacturne @32
  sp(331, 'cacnea', 'Cacnea', ['grass'], 'common',
    [50, 85, 40, 85, 40, 35], 'cacturne', 32,
    [[1, 'poisonsting'], [1, 'leer'], [9, 'absorb'], [17, 'pinmissile'], [25, 'megadrain'], [32, 'faintattack']],
    'A bristling desert cactus that hoards rainwater and hurls needles when threatened.',
    { growth: MS, catchRate: 190 });

  // 81. Cacturne (final)
  sp(332, 'cacturne', 'Cacturne', ['grass', 'dark'], 'uncommon',
    [70, 115, 60, 115, 60, 55], null, 0,
    [[1, 'absorb'], [1, 'faintattack'], [17, 'pinmissile'], [25, 'megadrain'], [33, 'gigadrain'], [41, 'crunch'], [49, 'spore']],
    'A scarecrow-like stalker that trails desert travelers through the night, awaiting their collapse.',
    { final: true, growth: MS, catchRate: 60 });

  // 82. Swablu -> Altaria @35
  sp(333, 'swablu', 'Swablu', ['normal', 'flying'], 'common',
    [45, 40, 60, 40, 75, 50], 'altaria', 35,
    [[1, 'peck'], [1, 'growl'], [9, 'gust'], [17, 'sing'], [25, 'aerialace'], [33, 'featherdance']],
    'A fluffy cloud-winged chick that nestles against weary travelers to dry their tears.',
    { growth: ER, catchRate: 255 });

  // 83. Altaria (final, ER)
  sp(334, 'altaria', 'Altaria', ['dragon', 'flying'], 'rare',
    [75, 70, 90, 70, 105, 80], null, 0,
    [[1, 'peck'], [1, 'sing'], [17, 'dragonbreath'], [25, 'aerialace'], [35, 'dragondance'], [43, 'dragonclaw'], [51, 'fly']],
    'A serene cloud-feathered dragon whose lullaby drifts down from the highest skies.',
    { final: true, growth: ER, catchRate: 45 });

  // 84. Zangoose — standalone basic
  sp(335, 'zangoose', 'Zangoose', ['normal'], 'uncommon',
    [73, 115, 60, 60, 60, 90], null, 0,
    [[1, 'scratch'], [1, 'leer'], [9, 'quickattack'], [17, 'slash'], [25, 'crunch'], [33, 'swordsdance'], [41, 'doubleedge']],
    'A fierce white mongoose that rears up with razor claws at the mere scent of a serpent.',
    { growth: ER, catchRate: 90 });

  // 85. Seviper — standalone basic
  sp(336, 'seviper', 'Seviper', ['poison'], 'uncommon',
    [73, 100, 60, 100, 60, 65], null, 0,
    [[1, 'bite'], [1, 'poisonsting'], [9, 'lick'], [17, 'faintattack'], [25, 'sludge'], [33, 'crunch'], [41, 'sludgebomb'], [49, 'toxic']],
    'A blade-tailed serpent that nurses an ancient grudge against every white-furred mongoose.',
    { growth: FL, catchRate: 90 });

  // 86. Lunatone — standalone basic
  sp(337, 'lunatone', 'Lunatone', ['rock', 'psychic'], 'rare',
    [70, 55, 65, 95, 85, 70], null, 0,
    [[1, 'tackle'], [1, 'confusion'], [9, 'rockthrow'], [17, 'psybeam'], [25, 'rockslide'], [33, 'futuresight'], [41, 'psychic'], [49, 'ancientpower']],
    'A crescent-shaped stone that wakes under the moon and drifts on tides of lunar will.',
    { growth: FA, catchRate: 45 });

  // 87. Solrock — standalone basic
  sp(338, 'solrock', 'Solrock', ['rock', 'psychic'], 'rare',
    [70, 95, 85, 55, 65, 70], null, 0,
    [[1, 'tackle'], [1, 'confusion'], [9, 'rockthrow'], [17, 'psybeam'], [25, 'rockslide'], [33, 'ancientpower'], [41, 'psychic'], [49, 'solarbeam']],
    'A sun-shaped meteor that radiates warmth and reads minds with the flares of its rays.',
    { growth: FA, catchRate: 45 });

  // 88. Barboach -> Whiscash @30
  sp(339, 'barboach', 'Barboach', ['water', 'ground'], 'common',
    [50, 48, 43, 46, 41, 60], 'whiscash', 30,
    [[1, 'mudslap'], [1, 'watergun'], [9, 'magnitude'], [17, 'bubblebeam'], [25, 'sandtomb'], [30, 'waterfall']],
    'A slippery whiskered loach coated in slime that lets it wriggle free of any grasp.',
    { growth: MF, catchRate: 190 });

  // 89. Whiscash (final)
  sp(340, 'whiscash', 'Whiscash', ['water', 'ground'], 'uncommon',
    [110, 78, 73, 76, 71, 60], null, 0,
    [[1, 'mudslap'], [1, 'watergun'], [17, 'bubblebeam'], [25, 'magnitude'], [33, 'waterfall'], [41, 'earthquake'], [49, 'surf']],
    'A massive bewhiskered catfish whose thrashing in the mud can rattle the ground like a quake.',
    { final: true, growth: MF, catchRate: 75 });

  // 90. Corphish -> Crawdaunt @30
  sp(341, 'corphish', 'Corphish', ['water'], 'common',
    [43, 80, 65, 50, 35, 35], 'crawdaunt', 30,
    [[1, 'bubble'], [1, 'harden'], [9, 'leer'], [17, 'bubblebeam'], [25, 'waterfall'], [30, 'crunch']],
    'A scrappy red crayfish that thrives in the filthiest water and pinches anything that moves.',
    { growth: FL, catchRate: 205 });

  // 91. Crawdaunt (final)
  sp(342, 'crawdaunt', 'Crawdaunt', ['water', 'dark'], 'uncommon',
    [63, 120, 85, 90, 55, 55], null, 0,
    [[1, 'bubble'], [1, 'bite'], [17, 'bubblebeam'], [25, 'waterfall'], [33, 'crunch'], [41, 'surf'], [49, 'hydropump']],
    'A territorial rogue lobster that drives all rivals from the pond it claims as its own.',
    { final: true, growth: FL, catchRate: 155 });

  // 92. Baltoy -> Claydol @36
  sp(343, 'baltoy', 'Baltoy', ['ground', 'psychic'], 'common',
    [40, 40, 55, 40, 70, 55], 'claydol', 36,
    [[1, 'confusion'], [1, 'harden'], [9, 'mudslap'], [17, 'rocktomb'], [25, 'psybeam'], [33, 'ancientpower']],
    'A spinning clay doll that hums an eerie tone as it twirls atop its single pointed foot.',
    { growth: MF, catchRate: 255 });

  // 93. Claydol (final)
  sp(344, 'claydol', 'Claydol', ['ground', 'psychic'], 'uncommon',
    [60, 70, 105, 70, 120, 75], null, 0,
    [[1, 'confusion'], [1, 'mudslap'], [17, 'rocktomb'], [25, 'psybeam'], [33, 'ancientpower'], [41, 'earthquake'], [49, 'psychic'], [57, 'hyperbeam']],
    'An ancient hollow effigy that levitates by its own power, awakened from a clay-soil slumber.',
    { final: true, growth: MF, catchRate: 90 });

  // 94. Lileep -> Cradily @40
  sp(345, 'lileep', 'Lileep', ['rock', 'grass'], 'uncommon',
    [66, 41, 77, 61, 87, 23], 'cradily', 40,
    [[1, 'absorb'], [1, 'confusion'], [9, 'acid'], [17, 'megadrain'], [25, 'ancientpower'], [33, 'gigadrain']],
    'A fossil sea lily revived from stone, swaying its petals to lure curious prey within reach.',
    { growth: ER, catchRate: 45 });

  // 95. Cradily (final)
  sp(346, 'cradily', 'Cradily', ['rock', 'grass'], 'rare',
    [86, 81, 97, 81, 107, 43], null, 0,
    [[1, 'absorb'], [1, 'acid'], [17, 'megadrain'], [25, 'ancientpower'], [33, 'gigadrain'], [41, 'rockslide'], [49, 'sludgebomb']],
    'A prehistoric anemone that anchors to the seabed and digests anything its tentacles ensnare.',
    { final: true, growth: ER, catchRate: 45 });

  // 96. Anorith -> Armaldo @40
  sp(347, 'anorith', 'Anorith', ['rock', 'bug'], 'uncommon',
    [45, 95, 50, 40, 50, 75], 'armaldo', 40,
    [[1, 'scratch'], [1, 'harden'], [9, 'leechlife'], [17, 'metalclaw'], [25, 'ancientpower'], [33, 'furycutter']],
    'A many-finned fossil shrimp revived from amber, paddling through ancient warm shallows.',
    { growth: ER, catchRate: 45 });

  // 97. Armaldo (final)
  sp(348, 'armaldo', 'Armaldo', ['rock', 'bug'], 'rare',
    [75, 125, 100, 70, 80, 45], null, 0,
    [[1, 'scratch'], [1, 'leechlife'], [17, 'metalclaw'], [25, 'ancientpower'], [33, 'furycutter'], [41, 'rockslide'], [49, 'crosschop']],
    'An armored prehistoric predator whose plated claws once cleaved through ancient sea-shells.',
    { final: true, growth: ER, catchRate: 45 });

  // 98. Feebas -> Milotic @25
  sp(349, 'feebas', 'Feebas', ['water'], 'rare',
    [20, 15, 20, 10, 55, 80], 'milotic', 25,
    [[1, 'tackle'], [1, 'watergun'], [10, 'bubble'], [15, 'withdraw'], [20, 'bubblebeam']],
    'A drab, ragged fish overlooked by everyone, hiding the most radiant of futures within.',
    { growth: ER, catchRate: 255 });

  // 99. Milotic (final)
  sp(350, 'milotic', 'Milotic', ['water'], 'rare',
    [95, 60, 79, 100, 125, 81], null, 0,
    [[1, 'watergun'], [1, 'bubblebeam'], [17, 'raindance'], [25, 'waterfall'], [33, 'calmmind'], [41, 'surf'], [49, 'hydropump']],
    'A serpentine beauty whose iridescent scales are said to calm the rage of warring hearts.',
    { final: true, growth: ER, catchRate: 60 });

  // 100. Marill -> Azumarill @18 (mid)
  sp(183, 'marill', 'Marill', ['water'], 'common',
    [70, 20, 50, 20, 50, 40], 'azumarill', 18,
    [[1, 'tackle'], [1, 'tailwhip'], [6, 'watergun'], [10, 'defensecurl'], [14, 'bubblebeam'], [18, 'aquajet']],
    'A round blue mouse with a buoyant tail-float that bobs it safely along swift currents.',
    { mid: true, growth: FA, catchRate: 190 });

})();
