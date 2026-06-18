// pokemon-gen3 — species_nat_185_251.js  (national dex 185-251, minus those already defined)
(function () {
  var sp = G.defSpecies;
  var MS = 'mediumSlow', MF = 'mediumFast', SL = 'slow', FL = 'fluctuating', FA = 'fast', ER = 'erratic';

  // 185. Sudowoodo
  sp(185, 'sudowoodo', 'Sudowoodo', ['rock'], 'uncommon', [70, 100, 115, 30, 65, 30], null, 0,
    [[1, 'rockthrow'], [1, 'defensecurl'], [10, 'lowkick'], [19, 'rocktomb'], [28, 'faintattack'], [37, 'rockslide'], [46, 'doubleedge']],
    'It disguises itself as a tree to avoid battle, yet its fake leaves wither under the slightest frost.',
    { final: true, growth: MF, catchRate: 65 });

  // 186. Politoed
  sp(186, 'politoed', 'Politoed', ['water'], 'uncommon', [90, 75, 75, 90, 100, 70], null, 0,
    [[1, 'watergun'], [1, 'pound'], [12, 'bubblebeam'], [25, 'swift'], [35, 'bodyslam'], [44, 'surf'], [52, 'hydropump']],
    'Its proud croak rallies wild Poliwag from across the marsh to gather obediently at its side.',
    { final: true, growth: MS, catchRate: 45 });

  // 187. Hoppip
  sp(187, 'hoppip', 'Hoppip', ['grass', 'flying'], 'common', [35, 35, 40, 35, 55, 50], 'skiploom', 18,
    [[1, 'tackle'], [1, 'growl'], [10, 'poisonpowder'], [13, 'stunspore'], [15, 'sleeppowder'], [18, 'megadrain']],
    'So light it cannot resist the breeze, it bunches up with others to keep from blowing away.',
    { growth: MS, catchRate: 255 });

  // 188. Skiploom
  sp(188, 'skiploom', 'Skiploom', ['grass', 'flying'], 'common', [55, 45, 50, 45, 65, 80], 'jumpluff', 27,
    [[1, 'tackle'], [1, 'growl'], [10, 'poisonpowder'], [13, 'stunspore'], [15, 'sleeppowder'], [22, 'megadrain'], [27, 'gigadrain']],
    'The blossom on its head opens wide in warmth and folds shut the moment the air turns chilly.',
    { mid: true, growth: MS, catchRate: 120 });

  // 189. Jumpluff
  sp(189, 'jumpluff', 'Jumpluff', ['grass', 'flying'], 'uncommon', [75, 55, 70, 55, 95, 110], null, 0,
    [[1, 'tackle'], [1, 'growl'], [10, 'poisonpowder'], [13, 'stunspore'], [15, 'sleeppowder'], [22, 'megadrain'], [33, 'gigadrain'], [44, 'aerialace']],
    'Riding warm currents on its cottony spores, it can cross an entire ocean without ever landing.',
    { final: true, growth: MS, catchRate: 45 });

  // 190. Aipom
  sp(190, 'aipom', 'Aipom', ['normal'], 'common', [55, 70, 55, 40, 55, 85], null, 0,
    [[1, 'scratch'], [1, 'tailwhip'], [9, 'quickattack'], [17, 'swift'], [25, 'screech'], [33, 'slash'], [41, 'doubleteam']],
    'Its tail is so deft it handles tools better than its hands, freeing its paws for grabbing snacks.',
    { growth: FA, catchRate: 45 });

  // 191. Sunkern
  sp(191, 'sunkern', 'Sunkern', ['grass'], 'common', [30, 30, 30, 30, 30, 30], 'sunflora', 22,
    [[1, 'absorb'], [1, 'growth'], [4, 'growl'], [10, 'megadrain'], [19, 'sunnyday'], [22, 'gigadrain']],
    'It barely moves all day to save energy, dropping from branches to flee any sudden disturbance.',
    { growth: MS, catchRate: 235 });

  // 192. Sunflora
  sp(192, 'sunflora', 'Sunflora', ['grass'], 'uncommon', [75, 75, 55, 105, 85, 30], null, 0,
    [[1, 'absorb'], [1, 'growth'], [4, 'growl'], [10, 'megadrain'], [19, 'sunnyday'], [28, 'gigadrain'], [40, 'razorleaf'], [50, 'solarbeam']],
    'It chases the sun across the sky and converts that light into bursts of cheerful energy.',
    { final: true, growth: MS, catchRate: 120 });

  // 193. Yanma
  sp(193, 'yanma', 'Yanma', ['bug', 'flying'], 'uncommon', [65, 65, 45, 75, 45, 95], null, 0,
    [[1, 'tackle'], [1, 'leer'], [12, 'quickattack'], [19, 'doubleteam'], [26, 'silverwind'], [33, 'wingattack'], [40, 'ancientpower']],
    'Its enormous eyes catch movement in every direction, so nothing slips past while it hovers.',
    { growth: MF, catchRate: 75 });

  // 194. Wooper
  sp(194, 'wooper', 'Wooper', ['water', 'ground'], 'common', [55, 45, 45, 25, 25, 15], 'quagsire', 20,
    [[1, 'watergun'], [1, 'tailwhip'], [11, 'mudslap'], [16, 'pound'], [21, 'dig'], [25, 'bubblebeam']],
    'It walks the lakebed at night, coating its skin in a slick film that wards off the cold.',
    { growth: MF, catchRate: 255 });

  // 195. Quagsire
  sp(195, 'quagsire', 'Quagsire', ['water', 'ground'], 'uncommon', [95, 85, 85, 65, 65, 35], null, 0,
    [[1, 'watergun'], [1, 'tailwhip'], [11, 'mudslap'], [16, 'pound'], [23, 'dig'], [31, 'bubblebeam'], [40, 'earthquake'], [49, 'surf']],
    'A famously easygoing sort, it lazes on riverbeds and bumps its head without seeming to mind.',
    { final: true, growth: MF, catchRate: 90 });

  // 196. Espeon
  sp(196, 'espeon', 'Espeon', ['psychic'], 'rare', [65, 65, 60, 130, 95, 110], null, 0,
    [[1, 'tackle'], [1, 'tailwhip'], [8, 'confusion'], [16, 'quickattack'], [28, 'swift'], [36, 'psybeam'], [44, 'psychic'], [52, 'futuresight']],
    'It senses shifts in the air and a partner\'s mood, foreseeing trouble before it ever arrives.',
    { final: true, growth: MF, catchRate: 45 });

  // 197. Umbreon
  sp(197, 'umbreon', 'Umbreon', ['dark'], 'rare', [95, 65, 110, 60, 130, 65], null, 0,
    [[1, 'tackle'], [1, 'tailwhip'], [8, 'pursuit'], [16, 'quickattack'], [28, 'faintattack'], [36, 'bite'], [44, 'crunch'], [52, 'shadowball']],
    'Its rings glow under the moon, and a single venomous spray erupts when it is truly enraged.',
    { final: true, growth: MF, catchRate: 45 });

  // 198. Murkrow
  sp(198, 'murkrow', 'Murkrow', ['dark', 'flying'], 'uncommon', [60, 85, 42, 85, 42, 91], null, 0,
    [[1, 'peck'], [1, 'leer'], [11, 'pursuit'], [16, 'faintattack'], [26, 'wingattack'], [31, 'aerialace'], [41, 'drillpeck']],
    'Folk whisper that meeting one after dark draws misfortune, and it gladly hoards anything shiny.',
    { growth: MF, catchRate: 30 });

  // 199. Slowking
  sp(199, 'slowking', 'Slowking', ['water', 'psychic'], 'uncommon', [95, 75, 80, 100, 110, 30], null, 0,
    [[1, 'watergun'], [1, 'growl'], [12, 'confusion'], [22, 'headbutt'], [32, 'psybeam'], [42, 'surf'], [52, 'psychic']],
    'When the shellfish on its head bites down, a flood of clever insight washes through its mind.',
    { final: true, growth: MS, catchRate: 70 });

  // 200. Misdreavus
  sp(200, 'misdreavus', 'Misdreavus', ['ghost'], 'uncommon', [60, 60, 60, 85, 85, 85], null, 0,
    [[1, 'growl'], [1, 'lick'], [12, 'confusion'], [19, 'faintattack'], [26, 'psybeam'], [33, 'shadowball'], [44, 'psychic']],
    'It floats unseen through old halls, giggling as it tugs hair and whispers to startle passersby.',
    { growth: FA, catchRate: 45 });

  // 201. Unown
  sp(201, 'unown', 'Unown', ['psychic'], 'rare', [48, 72, 48, 72, 48, 48], null, 0,
    [[1, 'confusion'], [11, 'psybeam'], [21, 'swift'], [31, 'futuresight'], [41, 'psychic']],
    'Shaped like ancient letters, these silent symbols hum with power only when many gather as one.',
    { growth: MF, catchRate: 225 });

  // 203. Girafarig
  sp(203, 'girafarig', 'Girafarig', ['normal', 'psychic'], 'uncommon', [70, 80, 65, 90, 65, 85], null, 0,
    [[1, 'tackle'], [1, 'growl'], [12, 'confusion'], [19, 'faintattack'], [26, 'psybeam'], [33, 'crunch'], [40, 'psychic']],
    'The small head on its tail never sleeps, snapping at anyone who creeps up from behind.',
    { growth: MF, catchRate: 60 });

  // 204. Pineco
  sp(204, 'pineco', 'Pineco', ['bug'], 'common', [50, 65, 90, 35, 35, 15], 'forretress', 31,
    [[1, 'tackle'], [1, 'harden'], [8, 'defensecurl'], [15, 'leechlife'], [22, 'takedown'], [29, 'pinmissile']],
    'It dangles from branches all day, and a sudden burst of self-defense can knock loose the bark.',
    { growth: MF, catchRate: 190 });

  // 205. Forretress
  sp(205, 'forretress', 'Forretress', ['bug', 'steel'], 'uncommon', [75, 90, 140, 60, 60, 40], null, 0,
    [[1, 'tackle'], [1, 'harden'], [8, 'defensecurl'], [15, 'leechlife'], [22, 'takedown'], [29, 'pinmissile'], [39, 'metalclaw'], [49, 'doubleedge']],
    'Sealed inside its steel shell, it pops open only for an instant to launch a hidden counterattack.',
    { final: true, growth: MF, catchRate: 75 });

  // 206. Dunsparce
  sp(206, 'dunsparce', 'Dunsparce', ['normal'], 'uncommon', [100, 70, 70, 65, 65, 45], null, 0,
    [[1, 'tackle'], [1, 'defensecurl'], [11, 'leer'], [16, 'pursuit'], [21, 'screech'], [33, 'ancientpower'], [44, 'takedown']],
    'It tunnels backward into the earth with its drill tail, vanishing the instant it feels watched.',
    { growth: MF, catchRate: 190 });

  // 207. Gligar
  sp(207, 'gligar', 'Gligar', ['ground', 'flying'], 'uncommon', [65, 75, 105, 35, 65, 85], null, 0,
    [[1, 'poisonsting'], [1, 'sandattack'], [13, 'quickattack'], [20, 'faintattack'], [28, 'slash'], [36, 'aerialace'], [44, 'screech']],
    'It glides down from cliffs in silence and clamps onto a foe\'s face before stinging with its tail.',
    { growth: MF, catchRate: 60 });

  // 208. Steelix
  sp(208, 'steelix', 'Steelix', ['steel', 'ground'], 'rare', [75, 85, 200, 55, 65, 30], null, 0,
    [[1, 'tackle'], [1, 'harden'], [9, 'rockthrow'], [19, 'rocktomb'], [29, 'dig'], [39, 'irontail'], [49, 'crunch'], [56, 'earthquake']],
    'Burrowing deep enough to feel the planet\'s heat, its body hardens into diamond-tough metal.',
    { final: true, growth: MS, catchRate: 25 });

  // 209. Snubbull
  sp(209, 'snubbull', 'Snubbull', ['normal'], 'common', [60, 80, 50, 40, 40, 30], 'granbull', 23,
    [[1, 'tackle'], [1, 'tailwhip'], [8, 'leer'], [13, 'bite'], [19, 'headbutt'], [27, 'crunch']],
    'Beneath its fierce scowl hides a gentle softie that flees from the tiny critters it scares off.',
    { growth: FA, catchRate: 190 });

  // 210. Granbull
  sp(210, 'granbull', 'Granbull', ['normal'], 'uncommon', [90, 120, 75, 60, 60, 45], null, 0,
    [[1, 'tackle'], [1, 'tailwhip'], [8, 'leer'], [13, 'bite'], [19, 'headbutt'], [27, 'crunch'], [37, 'takedown'], [46, 'doubleedge']],
    'Its heavy lower jaw delivers a crushing bite, though it rarely starts the fights it could win.',
    { final: true, growth: FA, catchRate: 75 });

  // 211. Qwilfish
  sp(211, 'qwilfish', 'Qwilfish', ['water', 'poison'], 'uncommon', [65, 95, 75, 55, 55, 85], null, 0,
    [[1, 'watergun'], [1, 'poisonsting'], [10, 'harden'], [19, 'bubblebeam'], [28, 'sludge'], [37, 'pinmissile'], [46, 'sludgebomb']],
    'It gulps water to puff into a spiked ball, firing those poison barbs at anything that draws near.',
    { growth: MF, catchRate: 45 });

  // 212. Scizor
  sp(212, 'scizor', 'Scizor', ['bug', 'steel'], 'rare', [70, 130, 100, 55, 80, 65], null, 0,
    [[1, 'quickattack'], [1, 'leer'], [13, 'furycutter'], [21, 'metalclaw'], [29, 'faintattack'], [37, 'slash'], [45, 'irontail'], [53, 'meteormash']],
    'Its steel pincers bear eyelike spots that it raises to unnerve foes before a blinding strike.',
    { final: true, growth: MF, catchRate: 25 });

  // 213. Shuckle
  sp(213, 'shuckle', 'Shuckle', ['bug', 'rock'], 'rare', [20, 10, 230, 10, 230, 5], null, 0,
    [[1, 'leechlife'], [1, 'withdraw'], [9, 'defensecurl'], [14, 'rockthrow'], [23, 'rocktomb'], [32, 'ancientpower'], [41, 'rockslide']],
    'It tucks berries into its shell, where over time they ferment into a thick and pungent juice.',
    { growth: MF, catchRate: 190 });

  // 214. Heracross
  sp(214, 'heracross', 'Heracross', ['bug', 'fighting'], 'rare', [80, 125, 75, 40, 95, 85], null, 0,
    [[1, 'tackle'], [1, 'leer'], [11, 'furycutter'], [19, 'brickbreak'], [27, 'bulkup'], [35, 'megahorn'], [43, 'crosschop']],
    'It wedges its mighty horn beneath a rival and hurls them clear over the treetops with ease.',
    { growth: SL, catchRate: 45 });

  // 215. Sneasel
  sp(215, 'sneasel', 'Sneasel', ['dark', 'ice'], 'uncommon', [55, 95, 55, 35, 75, 115], null, 0,
    [[1, 'scratch'], [1, 'leer'], [9, 'quickattack'], [17, 'faintattack'], [25, 'icywind'], [33, 'slash'], [41, 'icebeam'], [49, 'crunch']],
    'A cunning thief, it raids nests under cover of dark, snatching eggs while the parents are away.',
    { growth: MS, catchRate: 60 });

  // 216. Teddiursa
  sp(216, 'teddiursa', 'Teddiursa', ['normal'], 'common', [60, 80, 50, 50, 50, 40], 'ursaring', 30,
    [[1, 'scratch'], [1, 'leer'], [8, 'lick'], [15, 'faintattack'], [22, 'slash'], [29, 'bite']],
    'It licks its honey-soaked paws for comfort and snuffles out the sweetest hidden hives for miles.',
    { growth: MF, catchRate: 120 });

  // 217. Ursaring
  sp(217, 'ursaring', 'Ursaring', ['normal'], 'uncommon', [90, 130, 75, 75, 75, 55], null, 0,
    [[1, 'scratch'], [1, 'leer'], [8, 'lick'], [15, 'faintattack'], [22, 'slash'], [31, 'bite'], [40, 'crunch'], [49, 'doubleedge']],
    'It uproots trees to reach the fruit and honey above, then guards that bounty with savage strength.',
    { final: true, growth: MF, catchRate: 60 });

  // 218. Slugma
  sp(218, 'slugma', 'Slugma', ['fire'], 'common', [40, 40, 40, 70, 40, 20], 'magcargo', 38,
    [[1, 'ember'], [1, 'harden'], [8, 'rockthrow'], [15, 'flamewheel'], [22, 'ancientpower'], [33, 'flamethrower']],
    'Its molten body must keep crawling, for the moment it stops the magma cools and hardens it solid.',
    { growth: MF, catchRate: 190 });

  // 219. Magcargo
  sp(219, 'magcargo', 'Magcargo', ['fire', 'rock'], 'uncommon', [50, 50, 120, 80, 80, 30], null, 0,
    [[1, 'ember'], [1, 'harden'], [8, 'rockthrow'], [15, 'flamewheel'], [22, 'ancientpower'], [33, 'flamethrower'], [45, 'rockslide'], [55, 'fireblast']],
    'Its shell is cooled crust over searing magma, and a sudden rain hisses into steam upon contact.',
    { final: true, growth: MF, catchRate: 75 });

  // 220. Swinub
  sp(220, 'swinub', 'Swinub', ['ice', 'ground'], 'common', [50, 50, 40, 30, 30, 50], 'piloswine', 33,
    [[1, 'tackle'], [1, 'powdersnow'], [10, 'mudslap'], [19, 'icywind'], [28, 'takedown'], [33, 'blizzard']],
    'It roots through snow with its snout, sniffing out the buried plants and mushrooms it loves to eat.',
    { growth: SL, catchRate: 225 });

  // 221. Piloswine
  sp(221, 'piloswine', 'Piloswine', ['ice', 'ground'], 'uncommon', [100, 100, 80, 60, 60, 50], null, 0,
    [[1, 'tackle'], [1, 'powdersnow'], [10, 'mudslap'], [19, 'icywind'], [28, 'takedown'], [38, 'earthquake'], [48, 'blizzard'], [56, 'doubleedge']],
    'Its shaggy coat hangs over its eyes, so it charges by sound and smell rather than sight.',
    { final: true, growth: SL, catchRate: 75 });

  // 222. Corsola
  sp(222, 'corsola', 'Corsola', ['water', 'rock'], 'uncommon', [55, 55, 85, 65, 85, 35], null, 0,
    [[1, 'tackle'], [1, 'harden'], [9, 'bubblebeam'], [18, 'rockthrow'], [27, 'ancientpower'], [36, 'rockslide'], [45, 'surf']],
    'Its colorful branches snap off and regrow overnight, and small fish shelter among them by the reef.',
    { growth: FA, catchRate: 60 });

  // 223. Remoraid
  sp(223, 'remoraid', 'Remoraid', ['water'], 'common', [35, 65, 35, 65, 35, 65], 'octillery', 25,
    [[1, 'watergun'], [1, 'leer'], [11, 'bubblebeam'], [22, 'aurorabeam'], [25, 'icebeam'], [33, 'hydropump']],
    'It spits water with sniper-like aim, downing flying bugs from a startling distance over the waves.',
    { growth: MF, catchRate: 190 });

  // 224. Octillery
  sp(224, 'octillery', 'Octillery', ['water'], 'uncommon', [75, 105, 75, 105, 75, 45], null, 0,
    [[1, 'watergun'], [1, 'leer'], [11, 'bubblebeam'], [22, 'aurorabeam'], [25, 'icebeam'], [38, 'signalbeam'], [49, 'surf'], [54, 'hydropump']],
    'It wedges into rocky nooks and ambushes prey, blasting ink and water from its powerful arms.',
    { final: true, growth: MF, catchRate: 75 });

  // 225. Delibird
  sp(225, 'delibird', 'Delibird', ['ice', 'flying'], 'uncommon', [45, 55, 45, 65, 45, 75], null, 0,
    [[1, 'peck'], [1, 'powdersnow'], [12, 'icywind'], [20, 'aerialace'], [28, 'aurorabeam'], [36, 'icebeam'], [44, 'blizzard']],
    'It carries food bundled in its tail and shares it freely with anyone lost in the bitter cold.',
    { growth: FA, catchRate: 45 });

  // 226. Mantine
  sp(226, 'mantine', 'Mantine', ['water', 'flying'], 'uncommon', [65, 40, 70, 80, 140, 70], null, 0,
    [[1, 'tackle'], [1, 'bubble'], [10, 'bubblebeam'], [18, 'wingattack'], [26, 'aurorabeam'], [34, 'aerialace'], [42, 'icebeam'], [50, 'surf']],
    'It soars from the waves on broad fins, gliding above the surf with tiny Remoraid in tow.',
    { growth: SL, catchRate: 25 });

  // 227. Skarmory
  sp(227, 'skarmory', 'Skarmory', ['steel', 'flying'], 'rare', [65, 80, 140, 40, 70, 70], null, 0,
    [[1, 'peck'], [1, 'leer'], [9, 'sandattack'], [17, 'swift'], [26, 'wingattack'], [34, 'aerialace'], [43, 'steelwing'], [51, 'drillpeck']],
    'Its bladed steel wings slice through brush at high speed, leaving razor-thin cuts on every leaf.',
    { growth: SL, catchRate: 25 });

  // 228. Houndour
  sp(228, 'houndour', 'Houndour', ['dark', 'fire'], 'uncommon', [45, 60, 30, 80, 50, 65], 'houndoom', 24,
    [[1, 'ember'], [1, 'leer'], [9, 'pursuit'], [16, 'bite'], [23, 'faintattack'], [30, 'flamethrower']],
    'It hunts in packs that bark in eerie unison, herding prey with coordinated bursts of dark flame.',
    { growth: SL, catchRate: 120 });

  // 229. Houndoom
  sp(229, 'houndoom', 'Houndoom', ['dark', 'fire'], 'rare', [75, 90, 50, 110, 80, 95], null, 0,
    [[1, 'ember'], [1, 'leer'], [9, 'pursuit'], [16, 'bite'], [23, 'faintattack'], [33, 'flamethrower'], [43, 'crunch'], [52, 'fireblast']],
    'The leader of the pack rules by strength, and its toxic flames sear wounds that never fully heal.',
    { final: true, growth: SL, catchRate: 45 });

  // 230. Kingdra
  sp(230, 'kingdra', 'Kingdra', ['water', 'dragon'], 'rare', [75, 95, 95, 95, 95, 85], null, 0,
    [[1, 'watergun'], [1, 'leer'], [12, 'bubblebeam'], [22, 'twister'], [32, 'dragonbreath'], [42, 'surf'], [50, 'dragonclaw'], [58, 'hydropump']],
    'It sleeps in trenches so deep that its rare stirrings whip the sea above into spiraling storms.',
    { final: true, growth: MF, catchRate: 45 });

  // 231. Phanpy
  sp(231, 'phanpy', 'Phanpy', ['ground'], 'common', [90, 60, 60, 40, 40, 40], 'donphan', 25,
    [[1, 'tackle'], [1, 'growl'], [9, 'mudslap'], [17, 'defensecurl'], [25, 'takedown'], [33, 'dig']],
    'It sprays water over itself each morning and leaves muddy little handprints all along the riverbank.',
    { growth: MF, catchRate: 120 });

  // 232. Donphan
  sp(232, 'donphan', 'Donphan', ['ground'], 'uncommon', [90, 120, 120, 60, 60, 50], null, 0,
    [[1, 'tackle'], [1, 'growl'], [9, 'mudslap'], [17, 'defensecurl'], [25, 'rocktomb'], [33, 'dig'], [43, 'earthquake'], [51, 'doubleedge']],
    'It curls into a wheel and rolls downhill with such force it can topple a sturdy farmhouse flat.',
    { final: true, growth: MF, catchRate: 60 });

  // 233. Porygon2
  sp(233, 'porygon2', 'Porygon2', ['normal'], 'rare', [85, 80, 90, 105, 95, 60], null, 0,
    [[1, 'tackle'], [1, 'confusion'], [12, 'swift'], [24, 'psybeam'], [33, 'shockwave'], [42, 'thunderbolt'], [50, 'icebeam'], [58, 'hyperbeam']],
    'An upgraded artificial creature, it teaches itself new behaviors no programmer ever wrote in.',
    { final: true, growth: MF, catchRate: 45 });

  // 234. Stantler
  sp(234, 'stantler', 'Stantler', ['normal'], 'uncommon', [73, 95, 62, 85, 65, 85], null, 0,
    [[1, 'tackle'], [1, 'leer'], [11, 'sandattack'], [19, 'headbutt'], [27, 'confusion'], [35, 'takedown'], [43, 'psychic']],
    'The black orbs in its antlers warp the air, conjuring dizzy mirages that lure travelers astray.',
    { growth: SL, catchRate: 45 });

  // 235. Smeargle
  sp(235, 'smeargle', 'Smeargle', ['normal'], 'uncommon', [55, 20, 35, 20, 45, 75], null, 0,
    [[1, 'tackle'], [1, 'tailwhip'], [11, 'swift'], [21, 'doubleteam'], [31, 'agility'], [41, 'bodyslam']],
    'It paints territorial murals with the fluid leaking from its tail, no two markings ever alike.',
    { growth: FA, catchRate: 45 });

  // 236. Tyrogue
  sp(236, 'tyrogue', 'Tyrogue', ['fighting'], 'common', [35, 35, 35, 35, 35, 35], 'hitmontop', 20,
    [[1, 'tackle'], [1, 'focusenergy'], [7, 'karatechop'], [13, 'machpunch'], [20, 'rocksmash']],
    'Brimming with restless energy, it picks fights it cannot win just to prove how tough it is.',
    { growth: MF, catchRate: 75 });

  // 237. Hitmontop
  sp(237, 'hitmontop', 'Hitmontop', ['fighting'], 'uncommon', [50, 95, 95, 35, 110, 70], null, 0,
    [[1, 'rocksmash'], [1, 'focusenergy'], [12, 'machpunch'], [19, 'karatechop'], [26, 'brickbreak'], [33, 'crosschop'], [40, 'skyuppercut']],
    'It attacks while spinning on its head like a top, drilling rapid kicks from a dizzying blur.',
    { final: true, growth: MF, catchRate: 45 });

  // 238. Smoochum
  sp(238, 'smoochum', 'Smoochum', ['ice', 'psychic'], 'common', [45, 30, 15, 85, 65, 65], null, 0,
    [[1, 'pound'], [1, 'powdersnow'], [9, 'confusion'], [17, 'icywind'], [25, 'psybeam'], [33, 'icebeam']],
    'It explores the world by pressing its lips to whatever it finds, keeping note of every flavor.',
    { growth: MF, catchRate: 45 });

  // 239. Elekid
  sp(239, 'elekid', 'Elekid', ['electric'], 'common', [45, 63, 37, 65, 55, 95], null, 0,
    [[1, 'quickattack'], [1, 'leer'], [9, 'thundershock'], [17, 'shockwave'], [25, 'spark'], [33, 'thunderbolt'], [42, 'thunder']],
    'It spins its arms like a pinwheel to generate a charge, though a long drought leaves it sluggish.',
    { growth: MF, catchRate: 45 });

  // 240. Magby
  sp(240, 'magby', 'Magby', ['fire'], 'common', [45, 75, 37, 70, 55, 83], null, 0,
    [[1, 'ember'], [1, 'leer'], [9, 'flamewheel'], [17, 'firepunch'], [25, 'faintattack'], [33, 'flamethrower'], [42, 'fireblast']],
    'Its breath puffs out little flames when healthy, but black smoke means it has caught a chill.',
    { growth: MF, catchRate: 45 });

  // 241. Miltank
  sp(241, 'miltank', 'Miltank', ['normal'], 'uncommon', [95, 80, 105, 40, 70, 100], null, 0,
    [[1, 'tackle'], [1, 'growl'], [10, 'defensecurl'], [19, 'bodyslam'], [28, 'headbutt'], [37, 'takedown'], [46, 'doubleedge']],
    'The nourishing milk it gives daily can revive the weak and is churned into rich, healthful butter.',
    { growth: SL, catchRate: 45 });

  // 242. Blissey
  sp(242, 'blissey', 'Blissey', ['normal'], 'rare', [255, 10, 10, 75, 135, 55], null, 0,
    [[1, 'pound'], [1, 'growl'], [12, 'swift'], [23, 'sweetscent'], [34, 'bodyslam'], [45, 'doubleedge'], [55, 'hyperbeam']],
    'It senses sorrow in others and shares its blissful egg, which is said to mend any aching heart.',
    { final: true, growth: FL, catchRate: 30 });

  // 243. Raikou
  sp(243, 'raikou', 'Raikou', ['electric'], 'legendary', [90, 85, 75, 115, 100, 115], null, 0,
    [[1, 'thundershock'], [1, 'leer'], [15, 'spark'], [30, 'shockwave'], [45, 'thunderbolt'], [55, 'crunch'], [65, 'thunder'], [75, 'hyperbeam']],
    'It races across the plains with the speed of a lightning bolt, thunder rolling from its every stride.',
    { growth: SL, catchRate: 3 });

  // 244. Entei
  sp(244, 'entei', 'Entei', ['fire'], 'legendary', [115, 115, 85, 90, 75, 100], null, 0,
    [[1, 'ember'], [1, 'leer'], [15, 'flamewheel'], [30, 'firepunch'], [45, 'flamethrower'], [55, 'crunch'], [65, 'fireblast'], [75, 'hyperbeam']],
    'Said to be born of a volcano, it roars across the land and new craters erupt wherever it treads.',
    { growth: SL, catchRate: 3 });

  // 245. Suicune
  sp(245, 'suicune', 'Suicune', ['water'], 'legendary', [100, 75, 115, 90, 115, 85], null, 0,
    [[1, 'watergun'], [1, 'leer'], [15, 'bubblebeam'], [30, 'aurorabeam'], [45, 'calmmind'], [55, 'icebeam'], [65, 'surf'], [75, 'hydropump']],
    'It roams in search of pure water, and the north wind clears the skies wherever its paws fall.',
    { growth: SL, catchRate: 3 });

  // 246. Larvitar
  sp(246, 'larvitar', 'Larvitar', ['rock', 'ground'], 'rare', [50, 64, 50, 45, 50, 41], 'pupitar', 30,
    [[1, 'bite'], [1, 'leer'], [8, 'sandattack'], [15, 'rockthrow'], [22, 'rocktomb'], [29, 'crunch']],
    'It is born deep underground and must eat its way through a mountain of soil before it can surface.',
    { growth: SL, catchRate: 45 });

  // 247. Pupitar
  sp(247, 'pupitar', 'Pupitar', ['rock', 'ground'], 'rare', [70, 84, 70, 65, 70, 51], 'tyranitar', 48,
    [[1, 'bite'], [1, 'leer'], [8, 'sandattack'], [15, 'rockthrow'], [22, 'rocktomb'], [29, 'crunch'], [38, 'rockslide']],
    'Sealed in a hard shell, it builds pressure inside and rockets about, flattening hills as it goes.',
    { mid: true, growth: SL, catchRate: 45 });

  // 248. Tyranitar
  sp(248, 'tyranitar', 'Tyranitar', ['rock', 'dark'], 'rare', [100, 134, 110, 95, 100, 61], null, 0,
    [[1, 'bite'], [1, 'leer'], [8, 'sandattack'], [15, 'rocktomb'], [29, 'crunch'], [40, 'earthquake'], [50, 'rockslide'], [61, 'hyperbeam']],
    'Its quaking footsteps level mountains, and few dare challenge a creature that reshapes the land.',
    { final: true, growth: SL, catchRate: 45 });

  // 249. Lugia
  sp(249, 'lugia', 'Lugia', ['psychic', 'flying'], 'legendary', [106, 90, 130, 90, 154, 110], null, 0,
    [[1, 'gust'], [1, 'leer'], [15, 'aerialace'], [30, 'psybeam'], [45, 'aurorabeam'], [55, 'futuresight'], [65, 'psychic'], [75, 'hydropump']],
    'Guardian of the seas, it shelters in the deepest trench so its wingbeats cannot stir up tempests.',
    { growth: SL, catchRate: 3 });

  // 250. Ho-Oh
  sp(250, 'hooh', 'Ho-Oh', ['fire', 'flying'], 'legendary', [106, 130, 90, 110, 154, 90], null, 0,
    [[1, 'gust'], [1, 'leer'], [15, 'flamewheel'], [30, 'aerialace'], [45, 'flamethrower'], [55, 'futuresight'], [65, 'fireblast'], [75, 'hyperbeam']],
    'Its rainbow plumage shines across the sky, and legend says it grants joy to whoever glimpses it.',
    { growth: SL, catchRate: 3 });

  // 251. Celebi
  sp(251, 'celebi', 'Celebi', ['psychic', 'grass'], 'legendary', [100, 100, 100, 100, 100, 100], null, 0,
    [[1, 'leechlife'], [1, 'confusion'], [15, 'megadrain'], [30, 'psybeam'], [45, 'gigadrain'], [55, 'futuresight'], [65, 'psychic'], [75, 'hyperbeam']],
    'A traveler through time, it leaves behind lush new growth in any era its tiny feet touch down.',
    { growth: MF, catchRate: 3 });

})();
