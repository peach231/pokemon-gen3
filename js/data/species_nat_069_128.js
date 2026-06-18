// pokemon-gen3 — species_nat_069_128.js  (national dex 69-128, minus those already defined)
(function () {
  var sp = G.defSpecies;
  var MS = 'mediumSlow', MF = 'mediumFast', SL = 'slow', FL = 'fluctuating', FA = 'fast', ER = 'erratic';

  // 69. Bellsprout -> Weepinbell @21
  sp(69, 'bellsprout', 'Bellsprout', ['grass', 'poison'], 'common',
    [50, 75, 35, 70, 30, 40], 'weepinbell', 21,
    [[1, 'vinewhip'], [1, 'growth'], [7, 'poisonpowder'], [11, 'sleeppowder'], [15, 'absorb'], [19, 'acid'], [23, 'razorleaf']],
    'A spindly carnivorous sprout that snaps its bell-shaped head at any bug drifting too close.',
    { growth: MS, catchRate: 255 });

  // 70. Weepinbell -> Victreebel @30 (mid)
  sp(70, 'weepinbell', 'Weepinbell', ['grass', 'poison'], 'uncommon',
    [65, 90, 50, 85, 45, 55], 'victreebel', 30,
    [[1, 'vinewhip'], [1, 'growth'], [13, 'poisonpowder'], [19, 'megadrain'], [25, 'acid'], [31, 'razorleaf'], [37, 'sludgebomb']],
    'It hooks a thorny vine into the bark of a tree and dozes through the heat of midday.',
    { mid: true, growth: MS, catchRate: 120 });

  // 71. Victreebel (final)
  sp(71, 'victreebel', 'Victreebel', ['grass', 'poison'], 'rare',
    [80, 105, 65, 100, 70, 70], null, 0,
    [[1, 'vinewhip'], [1, 'sleeppowder'], [19, 'acid'], [27, 'razorleaf'], [35, 'gigadrain'], [43, 'sludgebomb'], [51, 'solarbeam']],
    'A pitcher-bodied predator that lures prey with a sweet aroma before drowning it in acid.',
    { final: true, growth: MS, catchRate: 45 });

  // 77. Ponyta -> Rapidash @40
  sp(77, 'ponyta', 'Ponyta', ['fire'], 'common',
    [50, 85, 55, 65, 65, 90], 'rapidash', 40,
    [[1, 'tackle'], [1, 'growl'], [9, 'ember'], [15, 'tailwhip'], [21, 'flamewheel'], [29, 'takedown'], [37, 'firepunch']],
    'A flame-maned foal whose hooves can grow hot enough to scorch the meadow as it bolts.',
    { growth: MF, catchRate: 190 });

  // 78. Rapidash (final)
  sp(78, 'rapidash', 'Rapidash', ['fire'], 'uncommon',
    [65, 100, 70, 80, 80, 105], null, 0,
    [[1, 'ember'], [1, 'quickattack'], [21, 'flamewheel'], [29, 'takedown'], [37, 'firepunch'], [45, 'flamethrower'], [53, 'fireblast']],
    'A blazing courser that gallops near the speed of sound, trailing a banner of living fire.',
    { final: true, growth: MF, catchRate: 60 });

  // 79. Slowpoke -> Slowbro @37
  sp(79, 'slowpoke', 'Slowpoke', ['water', 'psychic'], 'common',
    [90, 65, 65, 40, 40, 15], 'slowbro', 37,
    [[1, 'tackle'], [1, 'growl'], [9, 'watergun'], [15, 'confusion'], [23, 'yawn'], [31, 'headbutt'], [37, 'psybeam']],
    'A dopey pink lump that forgets why it dipped its tail in the lake the moment it does so.',
    { growth: MF, catchRate: 190 });

  // 80. Slowbro (final)
  sp(80, 'slowbro', 'Slowbro', ['water', 'psychic'], 'uncommon',
    [95, 75, 110, 100, 80, 30], null, 0,
    [[1, 'watergun'], [1, 'confusion'], [23, 'yawn'], [31, 'withdraw'], [39, 'psybeam'], [47, 'calmmind'], [55, 'psychic']],
    'A clinging shellfish on its tail prods it into action, lending it a flash of unexpected wit.',
    { final: true, growth: MF, catchRate: 75 });

  // 83. Farfetch'd — standalone basic
  sp(83, 'farfetchd', "Farfetch'd", ['normal', 'flying'], 'uncommon',
    [52, 90, 55, 58, 62, 60], null, 0,
    [[1, 'peck'], [1, 'sandattack'], [9, 'leer'], [15, 'furycutter'], [23, 'aerialace'], [31, 'slash'], [39, 'swordsdance'], [47, 'featherdance']],
    'A proud duck that wields a leek stalk like a blade and guards it more fiercely than its life.',
    { growth: MF, catchRate: 45 });

  // 84. Doduo -> Dodrio @31
  sp(84, 'doduo', 'Doduo', ['normal', 'flying'], 'common',
    [35, 85, 45, 35, 35, 75], 'dodrio', 31,
    [[1, 'peck'], [1, 'growl'], [9, 'quickattack'], [13, 'pursuit'], [21, 'aerialace'], [29, 'drillpeck']],
    'A two-headed runner whose heads bicker over the route yet always sprint in perfect time.',
    { growth: MF, catchRate: 190 });

  // 85. Dodrio (final)
  sp(85, 'dodrio', 'Dodrio', ['normal', 'flying'], 'uncommon',
    [60, 110, 70, 60, 60, 110], null, 0,
    [[1, 'peck'], [1, 'pursuit'], [21, 'aerialace'], [29, 'drillpeck'], [37, 'agility'], [45, 'takedown'], [53, 'doubleedge']],
    'Its three heads each watch a different horizon, so almost nothing slips past this sprinter.',
    { final: true, growth: MF, catchRate: 45 });

  // 86. Seel -> Dewgong @34
  sp(86, 'seel', 'Seel', ['water'], 'common',
    [65, 45, 55, 45, 70, 45], 'dewgong', 34,
    [[1, 'headbutt'], [1, 'growl'], [9, 'watergun'], [17, 'icywind'], [25, 'aurorabeam'], [33, 'takedown']],
    'A glossy white seal that revels in frigid seas, chipping ice with the horn on its head.',
    { growth: MF, catchRate: 190 });

  // 87. Dewgong (final)
  sp(87, 'dewgong', 'Dewgong', ['water', 'ice'], 'uncommon',
    [90, 70, 80, 70, 95, 70], null, 0,
    [[1, 'watergun'], [1, 'icywind'], [25, 'aurorabeam'], [33, 'surf'], [41, 'icebeam'], [49, 'raindance'], [57, 'blizzard']],
    'A graceful sea lion that glides beneath the ice floes, its sleek hide impervious to the cold.',
    { final: true, growth: MF, catchRate: 75 });

  // 88. Grimer -> Muk @38
  sp(88, 'grimer', 'Grimer', ['poison'], 'common',
    [80, 80, 50, 40, 50, 25], 'muk', 38,
    [[1, 'pound'], [1, 'poisonsting'], [9, 'harden'], [17, 'acid'], [25, 'sludge'], [33, 'toxic']],
    'A heap of living sludge born from polluted runoff, oozing wherever filth pools the deepest.',
    { growth: MF, catchRate: 190 });

  // 89. Muk (final)
  sp(89, 'muk', 'Muk', ['poison'], 'uncommon',
    [105, 105, 75, 65, 100, 50], null, 0,
    [[1, 'poisonsting'], [1, 'sludge'], [17, 'acid'], [25, 'harden'], [33, 'sludgebomb'], [41, 'toxic'], [49, 'bodyslam']],
    'A reeking tide of toxic slime that withers grass and fouls the air for blocks around it.',
    { final: true, growth: MF, catchRate: 75 });

  // 90. Shellder -> Cloyster @30
  sp(90, 'shellder', 'Shellder', ['water'], 'common',
    [30, 65, 100, 45, 25, 40], 'cloyster', 30,
    [[1, 'tackle'], [1, 'withdraw'], [9, 'watergun'], [17, 'icywind'], [25, 'aurorabeam'], [30, 'bubblebeam']],
    'A snapping bivalve whose tongue lolls out at low tide, clamping shut on anything that pokes it.',
    { growth: SL, catchRate: 190 });

  // 91. Cloyster (final)
  sp(91, 'cloyster', 'Cloyster', ['water', 'ice'], 'uncommon',
    [50, 95, 180, 85, 45, 70], null, 0,
    [[1, 'withdraw'], [1, 'aurorabeam'], [17, 'icywind'], [25, 'harden'], [33, 'icebeam'], [41, 'surf'], [49, 'blizzard']],
    'Its spiked shell is harder than diamond, sealing the soft body within against any blow.',
    { final: true, growth: SL, catchRate: 60 });

  // 92. Gastly -> Haunter @25
  sp(92, 'gastly', 'Gastly', ['ghost', 'poison'], 'common',
    [30, 35, 30, 100, 35, 80], 'haunter', 25,
    [[1, 'lick'], [1, 'hypnosis'], [8, 'confusion'], [13, 'shadowpunch'], [16, 'pursuit'], [21, 'sludge'], [25, 'shadowball']],
    'A wisp of poison gas with glowing eyes that smothers the careless on a moonless night.',
    { growth: MS, catchRate: 190 });

  // 93. Haunter -> Gengar @30 (mid)
  sp(93, 'haunter', 'Haunter', ['ghost', 'poison'], 'uncommon',
    [45, 50, 45, 115, 55, 95], 'gengar', 30,
    [[1, 'lick'], [1, 'hypnosis'], [13, 'shadowpunch'], [21, 'sludge'], [28, 'confusion'], [36, 'shadowball'], [44, 'sludgebomb']],
    'A pair of disembodied hands drifts beside it, eager to chill a victim with a single touch.',
    { mid: true, growth: MS, catchRate: 90 });

  // 94. Gengar (final)
  sp(94, 'gengar', 'Gengar', ['ghost', 'poison'], 'rare',
    [60, 65, 60, 130, 75, 110], null, 0,
    [[1, 'lick'], [1, 'hypnosis'], [21, 'shadowpunch'], [28, 'confusion'], [36, 'sludgebomb'], [44, 'shadowball'], [52, 'psychic'], [60, 'crunch']],
    'A grinning shadow that mimics your own, slipping closer until its chill creeps up your spine.',
    { final: true, growth: MS, catchRate: 45 });

  // 95. Onix -> Steelix @30
  sp(95, 'onix', 'Onix', ['rock', 'ground'], 'common',
    [35, 45, 160, 30, 45, 70], 'steelix', 30,
    [[1, 'tackle'], [1, 'harden'], [9, 'rockthrow'], [17, 'rocktomb'], [21, 'sandstorm'], [25, 'dig'], [33, 'rockslide']],
    'A serpent of fused boulders that bores through bedrock, growing smoother and harder as it goes.',
    { growth: MF, catchRate: 45 });

  // 96. Drowzee -> Hypno @26
  sp(96, 'drowzee', 'Drowzee', ['psychic'], 'common',
    [60, 48, 45, 43, 90, 42], 'hypno', 26,
    [[1, 'pound'], [1, 'hypnosis'], [10, 'confusion'], [18, 'headbutt'], [24, 'psybeam'], [26, 'futuresight']],
    'A drowsy tapir that snuffles up the dreams of sleepers and replays the sweetest ones for itself.',
    { growth: MF, catchRate: 190 });

  // 97. Hypno (final)
  sp(97, 'hypno', 'Hypno', ['psychic'], 'uncommon',
    [85, 73, 70, 73, 115, 67], null, 0,
    [[1, 'confusion'], [1, 'hypnosis'], [18, 'headbutt'], [24, 'psybeam'], [33, 'futuresight'], [41, 'calmmind'], [49, 'psychic']],
    'Swinging its pendulum, it lulls foes into slumber and rifles through their sleeping minds.',
    { final: true, growth: MF, catchRate: 75 });

  // 98. Krabby -> Kingler @28
  sp(98, 'krabby', 'Krabby', ['water'], 'common',
    [30, 105, 90, 25, 25, 50], 'kingler', 28,
    [[1, 'bubble'], [1, 'leer'], [9, 'harden'], [15, 'rocksmash'], [21, 'bubblebeam'], [25, 'crunch'], [28, 'waterfall']],
    'A scrappy shore crab that waves an oversized pincer to bluff rivals away from its tidal burrow.',
    { growth: MF, catchRate: 225 });

  // 99. Kingler (final)
  sp(99, 'kingler', 'Kingler', ['water'], 'uncommon',
    [55, 130, 115, 50, 50, 75], null, 0,
    [[1, 'bubble'], [1, 'rocksmash'], [17, 'bubblebeam'], [25, 'crunch'], [33, 'waterfall'], [41, 'surf'], [49, 'hydropump']],
    'Its colossal claw can pinch through steel, though its sheer weight makes the limb slow to lift.',
    { final: true, growth: MF, catchRate: 60 });

  // 100. Voltorb -> Electrode @30
  sp(100, 'voltorb', 'Voltorb', ['electric'], 'common',
    [40, 30, 50, 55, 55, 100], 'electrode', 30,
    [[1, 'tackle'], [1, 'screech'], [9, 'thundershock'], [17, 'spark'], [25, 'shockwave'], [30, 'thunderbolt']],
    'A spherical mimic of a stray ball that crackles with current and bursts at the slightest jostle.',
    { growth: MF, catchRate: 190 });

  // 101. Electrode (final)
  sp(101, 'electrode', 'Electrode', ['electric'], 'uncommon',
    [60, 50, 70, 80, 80, 150], null, 0,
    [[1, 'thundershock'], [1, 'screech'], [17, 'spark'], [25, 'shockwave'], [33, 'thunderwave'], [41, 'thunderbolt'], [49, 'thunder']],
    'A grinning sphere of stored lightning so volatile that a loud noise can set off its blast.',
    { final: true, growth: MF, catchRate: 60 });

  // 102. Exeggcute -> Exeggutor @28
  sp(102, 'exeggcute', 'Exeggcute', ['grass', 'psychic'], 'common',
    [60, 40, 80, 60, 45, 40], 'exeggutor', 28,
    [[1, 'absorb'], [1, 'leer'], [9, 'confusion'], [17, 'megadrain'], [25, 'sleeppowder'], [28, 'psybeam']],
    'Six chattering seeds that huddle and squabble, telepathically calling one another back if scattered.',
    { growth: SL, catchRate: 90 });

  // 103. Exeggutor (final)
  sp(103, 'exeggutor', 'Exeggutor', ['grass', 'psychic'], 'rare',
    [95, 95, 85, 125, 65, 55], null, 0,
    [[1, 'confusion'], [1, 'absorb'], [25, 'megadrain'], [33, 'psybeam'], [41, 'gigadrain'], [49, 'psychic'], [57, 'solarbeam']],
    'A towering palm whose three heads bask in the sun and occasionally drop a slumbering one to sprout.',
    { final: true, growth: SL, catchRate: 45 });

  // 104. Cubone -> Marowak @28
  sp(104, 'cubone', 'Cubone', ['ground'], 'common',
    [50, 50, 95, 40, 50, 35], 'marowak', 28,
    [[1, 'growl'], [1, 'tailwhip'], [9, 'mudslap'], [17, 'rocktomb'], [25, 'dig'], [33, 'bodyslam']],
    'An orphaned whelp that wears its mother\'s skull and wails a lonely song under the full moon.',
    { growth: MF, catchRate: 190 });

  // 105. Marowak (final)
  sp(105, 'marowak', 'Marowak', ['ground'], 'uncommon',
    [60, 80, 110, 50, 80, 45], null, 0,
    [[1, 'mudslap'], [1, 'headbutt'], [17, 'rocktomb'], [25, 'dig'], [33, 'bodyslam'], [41, 'earthquake'], [49, 'doubleedge']],
    'Toughened by hardship, it hurls the bone it carries with deadly aim and reels it back like a boomerang.',
    { final: true, growth: MF, catchRate: 75 });

  // 106. Hitmonlee — standalone basic
  sp(106, 'hitmonlee', 'Hitmonlee', ['fighting'], 'rare',
    [50, 120, 53, 35, 110, 87], null, 0,
    [[1, 'tackle'], [1, 'focusenergy'], [13, 'lowkick'], [21, 'doubleteam'], [29, 'brickbreak'], [37, 'skyuppercut'], [45, 'crosschop']],
    'A kicking specialist whose rubbery legs stretch across a room to plant a heel in any foe.',
    { growth: MF, catchRate: 45 });

  // 107. Hitmonchan — standalone basic
  sp(107, 'hitmonchan', 'Hitmonchan', ['fighting'], 'rare',
    [50, 105, 79, 35, 110, 76], null, 0,
    [[1, 'tackle'], [1, 'focusenergy'], [13, 'machpunch'], [21, 'firepunch'], [29, 'brickbreak'], [37, 'skyuppercut'], [45, 'crosschop']],
    'A tireless boxer whose fists blur into a hail of jabs faster than the eye can hope to follow.',
    { growth: MF, catchRate: 45 });

  // 108. Lickitung -> Lickilicky @33
  sp(108, 'lickitung', 'Lickitung', ['normal'], 'uncommon',
    [90, 55, 75, 60, 75, 30], null, 0,
    [[1, 'lick'], [1, 'tailwhip'], [9, 'pound'], [17, 'defensecurl'], [25, 'headbutt'], [33, 'bodyslam']],
    'Its long pink tongue tastes everything it meets and leaves a sticky, tingling residue behind.',
    { growth: MF, catchRate: 45 });

  // 109. Koffing -> Weezing @35
  sp(109, 'koffing', 'Koffing', ['poison'], 'common',
    [40, 65, 95, 60, 45, 35], 'weezing', 35,
    [[1, 'tackle'], [1, 'poisonsting'], [9, 'sludge'], [17, 'acid'], [25, 'toxic'], [33, 'sludgebomb']],
    'A bloated balloon of noxious gas that giggles as it leaks a foul, eye-watering vapor.',
    { growth: MF, catchRate: 190 });

  // 110. Weezing (final)
  sp(110, 'weezing', 'Weezing', ['poison'], 'uncommon',
    [65, 90, 120, 85, 70, 60], null, 0,
    [[1, 'poisonsting'], [1, 'sludge'], [17, 'acid'], [25, 'toxic'], [33, 'sludgebomb'], [41, 'bodyslam'], [49, 'doubleedge']],
    'Two fused heads take turns inhaling toxins so the brew within never thins for a moment.',
    { final: true, growth: MF, catchRate: 60 });

  // 111. Rhyhorn -> Rhydon @42
  sp(111, 'rhyhorn', 'Rhyhorn', ['ground', 'rock'], 'common',
    [80, 85, 95, 30, 30, 25], 'rhydon', 42,
    [[1, 'tackle'], [1, 'leer'], [9, 'rocktomb'], [17, 'magnitude'], [25, 'rockslide'], [33, 'takedown'], [41, 'earthquake']],
    'A single-minded charger that lowers its horn and crashes through anything in its straight path.',
    { growth: SL, catchRate: 120 });

  // 112. Rhydon (final)
  sp(112, 'rhydon', 'Rhydon', ['ground', 'rock'], 'rare',
    [105, 130, 120, 45, 45, 40], null, 0,
    [[1, 'rocktomb'], [1, 'magnitude'], [25, 'rockslide'], [33, 'takedown'], [41, 'earthquake'], [49, 'megahorn'], [57, 'hyperbeam']],
    'A drill-horned giant whose hide shrugs off magma, letting it stride through erupting craters.',
    { final: true, growth: SL, catchRate: 60 });

  // 113. Chansey -> Blissey @30
  sp(113, 'chansey', 'Chansey', ['normal'], 'rare',
    [250, 5, 5, 35, 105, 50], 'blissey', 30,
    [[1, 'pound'], [1, 'growl'], [9, 'defensecurl'], [17, 'sing'], [25, 'sweetscent'], [33, 'bodyslam']],
    'A kindly egg-bearer that shares its nourishing eggs with the weary and the wounded alike.',
    { growth: FA, catchRate: 30 });

  // 114. Tangela -> Tangrowth @33
  sp(114, 'tangela', 'Tangela', ['grass'], 'uncommon',
    [65, 55, 115, 100, 40, 60], null, 0,
    [[1, 'absorb'], [1, 'growth'], [9, 'vinewhip'], [17, 'megadrain'], [25, 'stunspore'], [33, 'gigadrain']],
    'A snarl of blue vines so dense that no one has ever glimpsed what truly lies beneath them.',
    { growth: MF, catchRate: 120 });

  // 115. Kangaskhan — standalone basic
  sp(115, 'kangaskhan', 'Kangaskhan', ['normal'], 'rare',
    [105, 95, 80, 40, 80, 90], null, 0,
    [[1, 'pound'], [1, 'leer'], [13, 'bite'], [21, 'headbutt'], [29, 'crunch'], [37, 'bodyslam'], [45, 'doubleedge']],
    'A devoted mother that shields the joey in her pouch and turns ferocious at the faintest threat.',
    { growth: MF, catchRate: 45 });

  // 116. Horsea -> Seadra @32
  sp(116, 'horsea', 'Horsea', ['water'], 'common',
    [30, 40, 70, 70, 25, 60], 'seadra', 32,
    [[1, 'bubble'], [1, 'leer'], [8, 'watergun'], [15, 'twister'], [22, 'bubblebeam'], [29, 'aurorabeam']],
    'A timid seahorse that squirts a cloud of ink to cover its retreat into the reef.',
    { growth: MF, catchRate: 225 });

  // 117. Seadra -> Kingdra @40 (mid)
  sp(117, 'seadra', 'Seadra', ['water'], 'uncommon',
    [55, 65, 95, 95, 45, 85], 'kingdra', 40,
    [[1, 'watergun'], [1, 'twister'], [15, 'bubblebeam'], [22, 'aurorabeam'], [30, 'icebeam'], [40, 'surf'], [48, 'hydropump']],
    'Its fanned fins bristle with toxin-tipped spines that jab anyone who brushes its territory.',
    { mid: true, growth: MF, catchRate: 75 });

  // 118. Goldeen -> Seaking @33
  sp(118, 'goldeen', 'Goldeen', ['water'], 'common',
    [45, 67, 60, 35, 50, 63], 'seaking', 33,
    [[1, 'peck'], [1, 'tailwhip'], [9, 'watergun'], [17, 'aurorabeam'], [25, 'waterfall'], [33, 'megahorn']],
    'A graceful river dancer whose flowing fins ripple like silk as it weaves against the current.',
    { growth: MF, catchRate: 225 });

  // 119. Seaking (final)
  sp(119, 'seaking', 'Seaking', ['water'], 'uncommon',
    [80, 92, 65, 65, 80, 68], null, 0,
    [[1, 'peck'], [1, 'watergun'], [17, 'aurorabeam'], [25, 'waterfall'], [33, 'megahorn'], [41, 'surf'], [49, 'hydropump']],
    'Using the horn on its brow, it carves a nest into the riverbed and guards its eggs to the end.',
    { final: true, growth: MF, catchRate: 60 });

  // 120. Staryu -> Starmie @28
  sp(120, 'staryu', 'Staryu', ['water'], 'common',
    [30, 45, 55, 70, 55, 85], 'starmie', 28,
    [[1, 'tackle'], [1, 'harden'], [9, 'watergun'], [17, 'swift'], [25, 'bubblebeam'], [28, 'aurorabeam']],
    'A starfish whose central core glows in time with the night sky, pulsing brighter among the stars.',
    { growth: SL, catchRate: 225 });

  // 121. Starmie (final)
  sp(121, 'starmie', 'Starmie', ['water', 'psychic'], 'rare',
    [60, 75, 85, 100, 85, 115], null, 0,
    [[1, 'watergun'], [1, 'swift'], [17, 'bubblebeam'], [25, 'psybeam'], [33, 'icebeam'], [41, 'surf'], [49, 'psychic'], [57, 'hydropump']],
    'Its jeweled core flashes a rainbow of signals, leading some to wonder if it speaks to the cosmos.',
    { final: true, growth: SL, catchRate: 60 });

  // 122. Mr. Mime — standalone basic
  sp(122, 'mrmime', 'Mr. Mime', ['psychic'], 'uncommon',
    [40, 45, 65, 100, 120, 90], null, 0,
    [[1, 'pound'], [1, 'confusion'], [11, 'doubleteam'], [19, 'psybeam'], [27, 'calmmind'], [35, 'futuresight'], [43, 'psychic']],
    'A mime that conjures invisible walls from thin air, trapping foes behind barriers no one can see.',
    { growth: MF, catchRate: 45 });

  // 123. Scyther -> Scizor @30
  sp(123, 'scyther', 'Scyther', ['bug', 'flying'], 'rare',
    [70, 110, 80, 55, 80, 105], 'scizor', 30,
    [[1, 'quickattack'], [1, 'leer'], [9, 'furycutter'], [17, 'pursuit'], [25, 'slash'], [33, 'swordsdance'], [41, 'silverwind']],
    'A mantis so swift its scythe-arms seem to flicker, felling tall grass before a sound is heard.',
    { growth: MF, catchRate: 45 });

  // 124. Jynx — standalone basic
  sp(124, 'jynx', 'Jynx', ['ice', 'psychic'], 'uncommon',
    [65, 50, 35, 115, 95, 95], null, 0,
    [[1, 'pound'], [1, 'powdersnow'], [11, 'confusion'], [19, 'icywind'], [27, 'icebeam'], [35, 'psychic'], [43, 'blizzard']],
    'A swaying songstress whose hypnotic dance and chilling chorus leave onlookers swaying along.',
    { growth: MF, catchRate: 45 });

  // 125. Electabuzz -> Electivire @30
  sp(125, 'electabuzz', 'Electabuzz', ['electric'], 'rare',
    [65, 83, 57, 95, 85, 105], null, 0,
    [[1, 'quickattack'], [1, 'leer'], [9, 'thundershock'], [17, 'spark'], [25, 'shockwave'], [33, 'thunderbolt'], [41, 'firepunch']],
    'A short-tempered brawler that crackles with stored voltage and craves the jolt of a thunderstorm.',
    { growth: MF, catchRate: 45 });

  // 126. Magmar -> Magmortar @30
  sp(126, 'magmar', 'Magmar', ['fire'], 'rare',
    [65, 95, 57, 100, 85, 93], null, 0,
    [[1, 'ember'], [1, 'leer'], [9, 'firepunch'], [17, 'confusion'], [25, 'flamethrower'], [33, 'sunnyday'], [41, 'fireblast']],
    'A duck-billed beast that breathes from the heart of a volcano, its body shimmering with heat.',
    { growth: MF, catchRate: 45 });

  // 127. Pinsir — standalone basic
  sp(127, 'pinsir', 'Pinsir', ['bug'], 'rare',
    [65, 125, 100, 55, 70, 85], null, 0,
    [[1, 'tackle'], [1, 'leer'], [9, 'furycutter'], [17, 'bite'], [25, 'brickbreak'], [33, 'swordsdance'], [41, 'megahorn'], [49, 'crunch']],
    'Its gripping pincers can crush thick logs, and once they clamp shut they rarely let go.',
    { growth: SL, catchRate: 45 });

  // 128. Tauros — standalone basic
  sp(128, 'tauros', 'Tauros', ['normal'], 'rare',
    [75, 100, 95, 40, 70, 110], null, 0,
    [[1, 'tackle'], [1, 'tailwhip'], [9, 'leer'], [17, 'pursuit'], [25, 'headbutt'], [33, 'takedown'], [41, 'doubleedge']],
    'A bullish charger that lashes itself with its three tails to whip up a thundering stampede.',
    { growth: SL, catchRate: 45 });

})();
