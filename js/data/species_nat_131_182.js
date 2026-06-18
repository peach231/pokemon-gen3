// pokemon-gen3 — species_nat_131_182.js  (national dex 131-182)
(function () {
  var sp = G.defSpecies;
  var MS = 'mediumSlow', MF = 'mediumFast', SL = 'slow', FL = 'fluctuating', FA = 'fast', ER = 'erratic';

  // 131. Lapras
  sp(131, 'lapras', 'Lapras', ['water', 'ice'], 'rare', [130, 85, 80, 85, 95, 60], null, 0,
    [[1, 'watergun'], [1, 'growl'], [13, 'icywind'], [25, 'bubblebeam'], [37, 'icebeam'], [49, 'surf'], [55, 'hydropump']],
    'It ferries weary travelers across deep lakes, humming a gentle tune that calms the waves.',
    { growth: SL, catchRate: 45 });

  // 132. Ditto
  sp(132, 'ditto', 'Ditto', ['normal'], 'uncommon', [48, 48, 48, 48, 48, 48], null, 0,
    [[1, 'pound'], [1, 'tackle'], [10, 'defensecurl'], [20, 'harden'], [30, 'doubleteam']],
    'A blob of pink protoplasm that reshapes its cells to copy the form of anything it sees.',
    { growth: MF, catchRate: 35 });

  // 133. Eevee
  sp(133, 'eevee', 'Eevee', ['normal'], 'uncommon', [55, 55, 50, 45, 65, 55], 'vaporeon', 25,
    [[1, 'tackle'], [1, 'tailwhip'], [16, 'sandattack'], [23, 'quickattack'], [30, 'bite'], [42, 'takedown']],
    'Its unstable genes let it transform into wildly different shapes depending on its surroundings.',
    { growth: MF, catchRate: 45 });

  // 134. Vaporeon
  sp(134, 'vaporeon', 'Vaporeon', ['water'], 'rare', [130, 65, 60, 110, 95, 65], null, 0,
    [[1, 'tackle'], [1, 'watergun'], [16, 'bubblebeam'], [30, 'aurorabeam'], [42, 'surf'], [52, 'hydropump']],
    'Its cells melt into water so completely that it can vanish into a lake without a ripple.',
    { final: true, growth: MF, catchRate: 45 });

  // 135. Jolteon
  sp(135, 'jolteon', 'Jolteon', ['electric'], 'rare', [65, 65, 60, 110, 95, 130], null, 0,
    [[1, 'tackle'], [1, 'thundershock'], [16, 'quickattack'], [30, 'spark'], [42, 'thunderbolt'], [52, 'thunder']],
    'It charges its fur into bristling needles and hurls them like lightning at any threat.',
    { final: true, growth: MF, catchRate: 45 });

  // 136. Flareon
  sp(136, 'flareon', 'Flareon', ['fire'], 'rare', [65, 130, 60, 95, 110, 65], null, 0,
    [[1, 'tackle'], [1, 'ember'], [16, 'quickattack'], [30, 'firepunch'], [42, 'flamethrower'], [52, 'fireblast']],
    'It stores searing heat in a fluffy internal sac, releasing it in blasts hotter than a furnace.',
    { final: true, growth: MF, catchRate: 45 });

  // 137. Porygon
  sp(137, 'porygon', 'Porygon', ['normal'], 'uncommon', [65, 60, 70, 85, 75, 40], null, 0,
    [[1, 'tackle'], [1, 'defensecurl'], [12, 'psybeam'], [24, 'swift'], [36, 'shockwave'], [48, 'psychic']],
    'Built entirely from code, it can fold itself into data and slip through electronic networks.',
    { growth: MF, catchRate: 45 });

  // 138. Omanyte
  sp(138, 'omanyte', 'Omanyte', ['rock', 'water'], 'rare', [35, 40, 100, 90, 55, 35], 'omastar', 40,
    [[1, 'watergun'], [1, 'withdraw'], [13, 'bubblebeam'], [25, 'ancientpower'], [37, 'rockblast'], [46, 'hydropump']],
    'Revived from a spiral fossil, it paddles through reefs with the tentacles curled in its shell.',
    { growth: MF, catchRate: 45 });

  // 139. Omastar
  sp(139, 'omastar', 'Omastar', ['rock', 'water'], 'rare', [70, 60, 125, 115, 70, 55], null, 0,
    [[1, 'watergun'], [1, 'withdraw'], [13, 'bubblebeam'], [25, 'ancientpower'], [40, 'rockslide'], [50, 'hydropump']],
    'Its heavy spiked shell let it ambush prey, though it likely made swimming exhausting work.',
    { final: true, growth: MF, catchRate: 45 });

  // 140. Kabuto
  sp(140, 'kabuto', 'Kabuto', ['rock', 'water'], 'rare', [30, 80, 90, 55, 45, 55], 'kabutops', 40,
    [[1, 'scratch'], [1, 'harden'], [13, 'absorb'], [25, 'ancientpower'], [37, 'megadrain'], [46, 'rockslide']],
    'A hardy fossil creature whose armored back hides a pair of glowing eyes that scan the seabed.',
    { growth: MF, catchRate: 45 });

  // 141. Kabutops
  sp(141, 'kabutops', 'Kabutops', ['rock', 'water'], 'rare', [60, 115, 105, 65, 70, 80], null, 0,
    [[1, 'scratch'], [1, 'harden'], [13, 'absorb'], [25, 'slash'], [40, 'ancientpower'], [50, 'rockslide']],
    'It sliced through ancient seas with scythe-like arms, draining the fluids of whatever it caught.',
    { final: true, growth: MF, catchRate: 45 });

  // 142. Aerodactyl
  sp(142, 'aerodactyl', 'Aerodactyl', ['rock', 'flying'], 'rare', [80, 105, 65, 60, 75, 130], null, 0,
    [[1, 'wingattack'], [1, 'leer'], [13, 'bite'], [25, 'ancientpower'], [37, 'aerialace'], [49, 'crunch'], [55, 'rockslide']],
    'Resurrected from amber, this prehistoric flyer rules the skies with serrated jaws and sharp talons.',
    { growth: SL, catchRate: 45 });

  // 143. Snorlax
  sp(143, 'snorlax', 'Snorlax', ['normal'], 'rare', [160, 110, 65, 65, 110, 30], null, 0,
    [[1, 'tackle'], [1, 'yawn'], [17, 'headbutt'], [25, 'bodyslam'], [33, 'rocksmash'], [45, 'crunch'], [54, 'hyperbeam']],
    'It does little but eat and sleep, and a full belly turns its mountainous body into an immovable wall.',
    { growth: SL, catchRate: 25 });

  // 144. Articuno
  sp(144, 'articuno', 'Articuno', ['ice', 'flying'], 'legendary', [90, 85, 100, 95, 125, 85], null, 0,
    [[1, 'gust'], [1, 'powdersnow'], [13, 'icywind'], [25, 'aurorabeam'], [37, 'agility'], [49, 'icebeam'], [60, 'blizzard']],
    'A legendary bird of ice whose passing wingbeats turn falling rain into glittering snow.',
    { growth: SL, catchRate: 3 });

  // 145. Zapdos
  sp(145, 'zapdos', 'Zapdos', ['electric', 'flying'], 'legendary', [90, 90, 85, 125, 90, 100], null, 0,
    [[1, 'peck'], [1, 'thundershock'], [13, 'spark'], [25, 'shockwave'], [37, 'agility'], [49, 'thunderbolt'], [60, 'thunder']],
    'A legendary bird of lightning that gathers thunderclouds wherever its crackling feathers fly.',
    { growth: SL, catchRate: 3 });

  // 146. Moltres
  sp(146, 'moltres', 'Moltres', ['fire', 'flying'], 'legendary', [90, 100, 90, 125, 85, 90], null, 0,
    [[1, 'wingattack'], [1, 'ember'], [13, 'firepunch'], [25, 'aerialace'], [37, 'agility'], [49, 'flamethrower'], [60, 'fireblast']],
    'A legendary bird of fire whose wings scatter embers that signal the coming of spring.',
    { growth: SL, catchRate: 3 });

  // 147. Dratini
  sp(147, 'dratini', 'Dratini', ['dragon'], 'rare', [41, 64, 45, 50, 50, 50], 'dragonair', 30,
    [[1, 'twister'], [1, 'leer'], [10, 'dragonbreath'], [20, 'thunderwave'], [30, 'dragondance'], [40, 'dragonclaw']],
    'Long thought a myth, this slender serpent sheds its skin as it grows toward an enormous size.',
    { growth: SL, catchRate: 45 });

  // 148. Dragonair
  sp(148, 'dragonair', 'Dragonair', ['dragon'], 'rare', [61, 84, 65, 70, 70, 70], 'dragonite', 48,
    [[1, 'twister'], [1, 'leer'], [10, 'dragonbreath'], [20, 'thunderwave'], [30, 'dragondance'], [40, 'dragonclaw'], [50, 'waterfall']],
    'The crystalline orbs along its body let it bend the weather, summoning rain or clear skies at will.',
    { mid: true, growth: SL, catchRate: 45 });

  // 149. Dragonite
  sp(149, 'dragonite', 'Dragonite', ['dragon', 'flying'], 'rare', [91, 134, 95, 100, 100, 80], null, 0,
    [[1, 'wingattack'], [1, 'leer'], [10, 'dragonbreath'], [20, 'dragonclaw'], [35, 'aerialace'], [45, 'dragondance'], [55, 'hyperbeam']],
    'A kindhearted giant said to guide shipwrecked sailors safely back to shore through raging storms.',
    { final: true, growth: SL, catchRate: 45 });

  // 150. Mewtwo
  sp(150, 'mewtwo', 'Mewtwo', ['psychic'], 'legendary', [106, 110, 90, 154, 90, 130], null, 0,
    [[1, 'confusion'], [1, 'swift'], [13, 'psybeam'], [25, 'futuresight'], [37, 'calmmind'], [49, 'psychic'], [60, 'agility']],
    'Engineered in a lab from ancient genes, its raw psychic power radiates a cold and ruthless will.',
    { growth: SL, catchRate: 3 });

  // 151. Mew
  sp(151, 'mew', 'Mew', ['psychic'], 'legendary', [100, 100, 100, 100, 100, 100], null, 0,
    [[1, 'pound'], [1, 'confusion'], [15, 'psybeam'], [25, 'swift'], [35, 'calmmind'], [45, 'psychic'], [55, 'futuresight']],
    'Said to carry the genetic code of every Pokemon, this playful sprite is glimpsed only on rare occasions.',
    { growth: MS, catchRate: 45 });

  // 152. Chikorita
  sp(152, 'chikorita', 'Chikorita', ['grass'], 'common', [45, 49, 65, 49, 65, 45], 'bayleef', 16,
    [[1, 'tackle'], [1, 'growl'], [8, 'razorleaf'], [12, 'poisonpowder'], [22, 'sweetscent'], [32, 'magicalleaf']],
    'The fragrant leaf on its head soothes anyone nearby and sharpens with the warmth of the sun.',
    { growth: MS, catchRate: 45 });

  // 153. Bayleef
  sp(153, 'bayleef', 'Bayleef', ['grass'], 'uncommon', [60, 62, 80, 63, 80, 60], 'meganium', 32,
    [[1, 'tackle'], [1, 'growl'], [8, 'razorleaf'], [12, 'poisonpowder'], [23, 'sweetscent'], [34, 'magicalleaf'], [43, 'gigadrain']],
    'A spicy aroma drifts from the buds ringing its neck, filling the air with renewed energy.',
    { mid: true, growth: MS, catchRate: 45 });

  // 154. Meganium
  sp(154, 'meganium', 'Meganium', ['grass'], 'rare', [80, 82, 100, 83, 100, 80], null, 0,
    [[1, 'tackle'], [1, 'growl'], [8, 'razorleaf'], [12, 'poisonpowder'], [23, 'sweetscent'], [36, 'gigadrain'], [50, 'solarbeam']],
    'The blossom around its neck breathes out a scent that revives wilted plants and calms hostility.',
    { final: true, growth: MS, catchRate: 45 });

  // 155. Cyndaquil
  sp(155, 'cyndaquil', 'Cyndaquil', ['fire'], 'common', [39, 52, 43, 60, 50, 65], 'quilava', 14,
    [[1, 'tackle'], [1, 'leer'], [6, 'ember'], [12, 'quickattack'], [19, 'flamewheel'], [31, 'flamethrower']],
    'Timid by nature, it flares the flames on its back into a roaring wall whenever it feels cornered.',
    { growth: MS, catchRate: 45 });

  // 156. Quilava
  sp(156, 'quilava', 'Quilava', ['fire'], 'uncommon', [58, 64, 58, 80, 65, 80], 'typhlosion', 36,
    [[1, 'tackle'], [1, 'leer'], [6, 'ember'], [12, 'quickattack'], [21, 'flamewheel'], [33, 'flamethrower'], [45, 'swift']],
    'It intimidates rivals by fanning the heat from its neck and rump into shimmering waves.',
    { mid: true, growth: MS, catchRate: 45 });

  // 157. Typhlosion
  sp(157, 'typhlosion', 'Typhlosion', ['fire'], 'rare', [78, 84, 78, 109, 85, 100], null, 0,
    [[1, 'tackle'], [1, 'leer'], [6, 'ember'], [12, 'quickattack'], [21, 'flamewheel'], [40, 'flamethrower'], [52, 'fireblast']],
    'It hides behind a heat haze of its own making, then unleashes flames hot enough to scorch the air.',
    { final: true, growth: MS, catchRate: 45 });

  // 158. Totodile
  sp(158, 'totodile', 'Totodile', ['water'], 'common', [50, 65, 64, 44, 48, 43], 'croconaw', 18,
    [[1, 'scratch'], [1, 'leer'], [7, 'watergun'], [13, 'bite'], [20, 'rocksmash'], [34, 'crunch']],
    'It snaps its powerful jaws at anything that moves, sometimes startling even its own trainer.',
    { growth: MS, catchRate: 45 });

  // 159. Croconaw
  sp(159, 'croconaw', 'Croconaw', ['water'], 'uncommon', [65, 80, 80, 59, 63, 58], 'feraligatr', 30,
    [[1, 'scratch'], [1, 'leer'], [7, 'watergun'], [13, 'bite'], [21, 'rocksmash'], [37, 'crunch'], [45, 'screech']],
    'Once its fanged jaws clamp down they will not let go until the prey has been thoroughly worn out.',
    { mid: true, growth: MS, catchRate: 45 });

  // 160. Feraligatr
  sp(160, 'feraligatr', 'Feraligatr', ['water'], 'rare', [85, 105, 100, 79, 83, 78], null, 0,
    [[1, 'scratch'], [1, 'leer'], [7, 'watergun'], [13, 'bite'], [21, 'rocksmash'], [40, 'crunch'], [52, 'hydropump']],
    'It lunges with its whole massive body, riding the momentum to crush opponents in its gaping maw.',
    { final: true, growth: MS, catchRate: 45 });

  // 161. Sentret
  sp(161, 'sentret', 'Sentret', ['normal'], 'common', [35, 46, 34, 35, 45, 20], 'furret', 15,
    [[1, 'scratch'], [1, 'tailwhip'], [7, 'defensecurl'], [13, 'quickattack'], [19, 'slash'], [25, 'headbutt']],
    'It stands tall on its tail to keep watch, shrieking a sharp warning the moment danger appears.',
    { growth: MF, catchRate: 255 });

  // 162. Furret
  sp(162, 'furret', 'Furret', ['normal'], 'common', [85, 76, 64, 45, 55, 90], null, 0,
    [[1, 'scratch'], [1, 'tailwhip'], [7, 'defensecurl'], [13, 'quickattack'], [21, 'slash'], [31, 'headbutt'], [41, 'doubleedge']],
    'Its long supple body lets it nest in narrow burrows and dart after intruders with surprising speed.',
    { final: true, growth: MF, catchRate: 90 });

  // 163. Hoothoot
  sp(163, 'hoothoot', 'Hoothoot', ['normal', 'flying'], 'common', [60, 30, 30, 36, 56, 50], 'noctowl', 20,
    [[1, 'tackle'], [1, 'growl'], [6, 'peck'], [11, 'confusion'], [16, 'gust'], [28, 'aerialace']],
    'It bobs steadily on one foot through the night, never losing the rhythm of its internal clock.',
    { growth: MF, catchRate: 255 });

  // 164. Noctowl
  sp(164, 'noctowl', 'Noctowl', ['normal', 'flying'], 'uncommon', [100, 50, 50, 86, 96, 70], null, 0,
    [[1, 'tackle'], [1, 'growl'], [6, 'peck'], [11, 'confusion'], [16, 'gust'], [33, 'aerialace'], [44, 'psychic']],
    'Its enormous eyes drink in the faintest moonlight, letting it glide silently after unwary prey.',
    { final: true, growth: MF, catchRate: 90 });

  // 165. Ledyba
  sp(165, 'ledyba', 'Ledyba', ['bug', 'flying'], 'common', [40, 20, 30, 40, 80, 55], 'ledian', 18,
    [[1, 'tackle'], [1, 'leer'], [8, 'leechlife'], [14, 'silverwind'], [22, 'aerialace'], [30, 'swift']],
    'A timid bug that huddles together with its kind for warmth on the chilliest mornings.',
    { growth: FA, catchRate: 255 });

  // 166. Ledian
  sp(166, 'ledian', 'Ledian', ['bug', 'flying'], 'uncommon', [55, 35, 50, 55, 110, 85], null, 0,
    [[1, 'tackle'], [1, 'leer'], [8, 'leechlife'], [14, 'silverwind'], [24, 'aerialace'], [34, 'swift'], [44, 'signalbeam']],
    'On starry nights it scatters glittering spores from its wings as it flits between the treetops.',
    { final: true, growth: FA, catchRate: 90 });

  // 167. Spinarak
  sp(167, 'spinarak', 'Spinarak', ['bug', 'poison'], 'common', [40, 60, 40, 40, 40, 30], 'ariados', 22,
    [[1, 'poisonsting'], [1, 'leer'], [6, 'leechlife'], [12, 'twineedle'], [20, 'pursuit'], [30, 'poisonpowder']],
    'It strings a sticky web between branches and waits motionless for the faintest tremor of prey.',
    { growth: FA, catchRate: 255 });

  // 168. Ariados
  sp(168, 'ariados', 'Ariados', ['bug', 'poison'], 'uncommon', [70, 90, 70, 60, 70, 40], null, 0,
    [[1, 'poisonsting'], [1, 'leer'], [6, 'leechlife'], [12, 'twineedle'], [22, 'pursuit'], [33, 'sludgebomb'], [43, 'megahorn']],
    'It trails a single thread of silk behind it, ready to reel itself home or snare a fleeing meal.',
    { final: true, growth: FA, catchRate: 90 });

  // 169. Crobat
  sp(169, 'crobat', 'Crobat', ['poison', 'flying'], 'uncommon', [85, 90, 80, 70, 80, 130], null, 0,
    [[1, 'leechlife'], [1, 'screech'], [6, 'bite'], [12, 'wingattack'], [21, 'aerialace'], [33, 'faintattack'], [42, 'crunch']],
    'Its four wings let it fly so silently that prey never hears it coming until the fangs strike.',
    { final: true, growth: MF, catchRate: 90 });

  // 170. Chinchou
  sp(170, 'chinchou', 'Chinchou', ['water', 'electric'], 'common', [75, 38, 38, 56, 56, 67], 'lanturn', 27,
    [[1, 'bubble'], [1, 'thundershock'], [13, 'watergun'], [17, 'spark'], [25, 'bubblebeam'], [37, 'thunderbolt']],
    'It lures curious prey close with a soft glow, then stuns them with a sudden electric jolt.',
    { growth: SL, catchRate: 190 });

  // 171. Lanturn
  sp(171, 'lanturn', 'Lanturn', ['water', 'electric'], 'uncommon', [125, 58, 58, 76, 76, 67], null, 0,
    [[1, 'bubble'], [1, 'thundershock'], [13, 'watergun'], [17, 'spark'], [27, 'bubblebeam'], [40, 'thunderbolt'], [50, 'hydropump']],
    'Its beaming antenna pierces the deepest ocean dark, earning it the name the lamp of the sea.',
    { final: true, growth: SL, catchRate: 75 });

  // 172. Pichu
  sp(172, 'pichu', 'Pichu', ['electric'], 'common', [20, 40, 15, 35, 35, 60], 'pikachu', 10,
    [[1, 'thundershock'], [1, 'tailwhip'], [5, 'quickattack'], [10, 'thunderwave'], [13, 'swift']],
    'Still clumsy with its own power, it often zaps itself by accident when it gets too excited.',
    { growth: MF, catchRate: 190 });

  // 173. Cleffa
  sp(173, 'cleffa', 'Cleffa', ['normal'], 'common', [50, 25, 28, 45, 55, 15], 'clefairy', 10,
    [[1, 'pound'], [1, 'growl'], [4, 'sing'], [8, 'sweetscent'], [13, 'swift']],
    'On clear nights it gazes up at the stars, drawn skyward as if remembering a home among them.',
    { growth: FA, catchRate: 150 });

  // 174. Igglybuff
  sp(174, 'igglybuff', 'Igglybuff', ['normal'], 'common', [90, 30, 15, 40, 20, 15], 'jigglypuff', 10,
    [[1, 'pound'], [1, 'growl'], [4, 'sing'], [9, 'defensecurl'], [14, 'sweetscent']],
    'Its soft springy body bounces along the ground, and a single touch fills the air with a sweet scent.',
    { growth: FA, catchRate: 170 });

  // 175. Togepi
  sp(175, 'togepi', 'Togepi', ['normal'], 'common', [35, 20, 65, 40, 65, 20], 'togetic', 22,
    [[1, 'pound'], [1, 'growl'], [7, 'sweetscent'], [13, 'yawn'], [19, 'swift'], [25, 'doubleedge']],
    'The strange marks on its shell are said to brim with the joy and good fortune it shares with friends.',
    { growth: FA, catchRate: 190 });

  // 176. Togetic
  sp(176, 'togetic', 'Togetic', ['normal', 'flying'], 'uncommon', [55, 40, 85, 80, 105, 40], null, 0,
    [[1, 'pound'], [1, 'growl'], [7, 'sweetscent'], [13, 'aerialace'], [21, 'swift'], [31, 'futuresight'], [41, 'doubleedge']],
    'It seeks out kindhearted people and showers them with a glittering dust said to bring happiness.',
    { final: true, growth: FA, catchRate: 75 });

  // 177. Natu
  sp(177, 'natu', 'Natu', ['psychic', 'flying'], 'common', [40, 50, 45, 70, 45, 70], 'xatu', 25,
    [[1, 'peck'], [1, 'leer'], [10, 'confusion'], [20, 'futuresight'], [30, 'psybeam'], [40, 'aerialace']],
    'It hops about catching insects and seems to peer into times that have not yet come to pass.',
    { growth: MF, catchRate: 190 });

  // 178. Xatu
  sp(178, 'xatu', 'Xatu', ['psychic', 'flying'], 'uncommon', [65, 75, 70, 95, 70, 95], null, 0,
    [[1, 'peck'], [1, 'leer'], [10, 'confusion'], [20, 'futuresight'], [35, 'psychic'], [45, 'aerialace'], [55, 'calmmind']],
    'It stands perfectly still all day, one eye fixed on the past and the other watching the future.',
    { final: true, growth: MF, catchRate: 75 });

  // 179. Mareep
  sp(179, 'mareep', 'Mareep', ['electric'], 'common', [55, 40, 40, 65, 45, 35], 'flaaffy', 15,
    [[1, 'tackle'], [1, 'growl'], [9, 'thundershock'], [16, 'thunderwave'], [23, 'spark'], [30, 'shockwave']],
    'Static crackles through its fluffy wool, and the brighter its tail-tip glows the more charge it holds.',
    { growth: MS, catchRate: 235 });

  // 180. Flaaffy
  sp(180, 'flaaffy', 'Flaaffy', ['electric'], 'uncommon', [70, 55, 55, 80, 60, 45], 'ampharos', 30,
    [[1, 'tackle'], [1, 'growl'], [9, 'thundershock'], [16, 'thunderwave'], [25, 'spark'], [33, 'shockwave'], [42, 'thunderbolt']],
    'As its wool thins it stores electricity in the bare patches of its slick, rubbery skin instead.',
    { mid: true, growth: MS, catchRate: 120 });

  // 181. Ampharos
  sp(181, 'ampharos', 'Ampharos', ['electric'], 'rare', [90, 75, 85, 115, 90, 55], null, 0,
    [[1, 'tackle'], [1, 'growl'], [9, 'thundershock'], [16, 'thunderwave'], [25, 'spark'], [38, 'thunderbolt'], [50, 'thunder']],
    'The beacon on its tail shines bright enough to be seen from space, guiding travelers through the dark.',
    { final: true, growth: MS, catchRate: 45 });

  // 182. Bellossom
  sp(182, 'bellossom', 'Bellossom', ['grass'], 'uncommon', [75, 80, 95, 90, 100, 50], null, 0,
    [[1, 'absorb'], [1, 'sweetscent'], [12, 'magicalleaf'], [22, 'stunspore'], [33, 'gigadrain'], [44, 'sleeppowder'], [50, 'solarbeam']],
    'When it dances, the petals of its skirt rustle together in a soothing rhythm that lulls onlookers.',
    { final: true, growth: MS, catchRate: 45 });
})();
