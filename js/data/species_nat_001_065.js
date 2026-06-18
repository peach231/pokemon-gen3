// pokemon-gen3 — species_nat_001_065.js  (national dex 1-65)
(function () {
  var sp = G.defSpecies;
  var MS = 'mediumSlow', MF = 'mediumFast', SL = 'slow', FL = 'fluctuating', FA = 'fast', ER = 'erratic';

  // ===== Bulbasaur line =====================================================
  sp(1, 'bulbasaur', 'Bulbasaur', ['grass', 'poison'], 'common', [45, 49, 49, 65, 65, 45], 'ivysaur', 16,
    [[1, 'tackle'], [1, 'growl'], [7, 'vinewhip'], [13, 'poisonpowder'], [20, 'razorleaf'], [27, 'sleeppowder'], [34, 'gigadrain']],
    'A seedling sprouts on its back, feeding on sun until the bulb swells.', { growth: MS, catchRate: 45 });
  sp(2, 'ivysaur', 'Ivysaur', ['grass', 'poison'], 'uncommon', [60, 62, 63, 80, 80, 60], 'venusaur', 32,
    [[1, 'tackle'], [1, 'vinewhip'], [13, 'poisonpowder'], [20, 'razorleaf'], [27, 'sleeppowder'], [34, 'gigadrain'], [41, 'growth']],
    'The bud on its back grows heavy as a flower readies to bloom.', { mid: true, growth: MS, catchRate: 45 });
  sp(3, 'venusaur', 'Venusaur', ['grass', 'poison'], 'rare', [80, 82, 83, 100, 100, 80], null, 0,
    [[1, 'tackle'], [1, 'razorleaf'], [1, 'gigadrain'], [27, 'sleeppowder'], [34, 'sludgebomb'], [44, 'sunnyday'], [53, 'solarbeam']],
    'The broad blossom on its back drinks sunlight and exhales a sweet scent.', { final: true, growth: MS, catchRate: 45 });

  // ===== Charmander line ====================================================
  sp(4, 'charmander', 'Charmander', ['fire'], 'common', [39, 52, 43, 60, 50, 65], 'charmeleon', 16,
    [[1, 'scratch'], [1, 'growl'], [7, 'ember'], [13, 'leer'], [19, 'flamewheel'], [25, 'slash'], [31, 'flamethrower']],
    'The flame on its tail burns brighter the better its mood becomes.', { growth: MS, catchRate: 45 });
  sp(5, 'charmeleon', 'Charmeleon', ['fire'], 'uncommon', [58, 64, 58, 80, 65, 80], 'charizard', 36,
    [[1, 'scratch'], [1, 'ember'], [13, 'leer'], [19, 'flamewheel'], [25, 'slash'], [33, 'flamethrower'], [41, 'firepunch']],
    'It bares sharp claws and lashes its blazing tail when it grows angry.', { mid: true, growth: MS, catchRate: 45 });
  sp(6, 'charizard', 'Charizard', ['fire', 'flying'], 'rare', [78, 84, 78, 109, 85, 100], null, 0,
    [[1, 'scratch'], [1, 'ember'], [1, 'wingattack'], [25, 'slash'], [36, 'flamethrower'], [46, 'aerialace'], [55, 'fireblast']],
    'It soars on broad wings, scorching the sky with breath hot enough to melt stone.', { final: true, growth: MS, catchRate: 45 });

  // ===== Squirtle line ======================================================
  sp(7, 'squirtle', 'Squirtle', ['water'], 'common', [44, 48, 65, 50, 64, 43], 'wartortle', 16,
    [[1, 'tackle'], [1, 'tailwhip'], [7, 'watergun'], [13, 'withdraw'], [19, 'bubblebeam'], [25, 'bite'], [31, 'waterfall']],
    'The shell on its back hardens with age and deflects most blows.', { growth: MS, catchRate: 45 });
  sp(8, 'wartortle', 'Wartortle', ['water'], 'uncommon', [59, 63, 80, 65, 80, 58], 'blastoise', 36,
    [[1, 'tackle'], [1, 'watergun'], [13, 'withdraw'], [19, 'bubblebeam'], [25, 'bite'], [33, 'waterfall'], [41, 'surf']],
    'Its furred tail trails through water as it paddles with practiced ease.', { mid: true, growth: MS, catchRate: 45 });
  sp(9, 'blastoise', 'Blastoise', ['water'], 'rare', [79, 83, 100, 85, 105, 78], null, 0,
    [[1, 'tackle'], [1, 'bubblebeam'], [1, 'bite'], [25, 'waterfall'], [36, 'surf'], [47, 'raindance'], [55, 'hydropump']],
    'The cannons jutting from its shell can blast jets of water with crushing force.', { final: true, growth: MS, catchRate: 45 });

  // ===== Caterpie line ======================================================
  sp(10, 'caterpie', 'Caterpie', ['bug'], 'common', [45, 30, 35, 20, 20, 45], 'metapod', 7,
    [[1, 'tackle'], [1, 'sandattack']],
    'A small grub that fends off birds with the foul scent of its antennae.', { growth: MF, catchRate: 255 });
  sp(11, 'metapod', 'Metapod', ['bug'], 'common', [50, 20, 55, 25, 25, 30], 'butterfree', 10,
    [[1, 'harden']],
    'Its hardened shell guards the soft body remaking itself inside.', { mid: true, growth: MF, catchRate: 120 });
  sp(12, 'butterfree', 'Butterfree', ['bug', 'flying'], 'uncommon', [60, 45, 50, 90, 80, 70], null, 0,
    [[1, 'confusion'], [1, 'gust'], [13, 'poisonpowder'], [18, 'psybeam'], [26, 'silverwind'], [34, 'sleeppowder'], [42, 'psychic']],
    'It scatters scales that numb foes while it sips nectar on the wing.', { final: true, growth: MF, catchRate: 45 });

  // ===== Weedle line ========================================================
  sp(13, 'weedle', 'Weedle', ['bug', 'poison'], 'common', [40, 35, 30, 20, 20, 50], 'kakuna', 7,
    [[1, 'poisonsting'], [1, 'sandattack']],
    'The barb on its head drips a venom that deters most predators.', { growth: MF, catchRate: 255 });
  sp(14, 'kakuna', 'Kakuna', ['bug', 'poison'], 'common', [45, 25, 50, 25, 25, 35], 'beedrill', 10,
    [[1, 'harden']],
    'Nearly motionless, it waits within a stiff casing for change to come.', { mid: true, growth: MF, catchRate: 120 });
  sp(15, 'beedrill', 'Beedrill', ['bug', 'poison'], 'uncommon', [65, 90, 40, 45, 80, 75], null, 0,
    [[1, 'furycutter'], [1, 'poisonsting'], [16, 'twineedle'], [25, 'pursuit'], [31, 'pinmissile'], [38, 'agility'], [45, 'sludgebomb']],
    'It defends its nest in furious swarms, striking with venomous lances.', { final: true, growth: MF, catchRate: 45 });

  // ===== Pidgey line ========================================================
  sp(16, 'pidgey', 'Pidgey', ['normal', 'flying'], 'common', [40, 45, 40, 35, 35, 56], 'pidgeotto', 18,
    [[1, 'tackle'], [1, 'sandattack'], [9, 'gust'], [15, 'quickattack'], [21, 'wingattack'], [29, 'aerialace']],
    'A docile bird that kicks up sand to blind anything that crowds it.', { growth: MS, catchRate: 255 });
  sp(17, 'pidgeotto', 'Pidgeotto', ['normal', 'flying'], 'common', [63, 60, 55, 50, 50, 71], 'pidgeot', 36,
    [[1, 'tackle'], [1, 'gust'], [15, 'quickattack'], [21, 'wingattack'], [29, 'aerialace'], [38, 'featherdance'], [45, 'drillpeck']],
    'It patrols a wide territory, driving off any rival that dares enter.', { mid: true, growth: MS, catchRate: 120 });
  sp(18, 'pidgeot', 'Pidgeot', ['normal', 'flying'], 'rare', [83, 80, 75, 70, 70, 101], null, 0,
    [[1, 'wingattack'], [1, 'quickattack'], [1, 'aerialace'], [29, 'featherdance'], [38, 'drillpeck'], [48, 'agility'], [56, 'fly']],
    'It cruises overhead at blistering speed, glossy plumes catching the light.', { final: true, growth: MS, catchRate: 45 });

  // ===== Rattata line =======================================================
  sp(19, 'rattata', 'Rattata', ['normal'], 'common', [30, 56, 35, 25, 35, 72], 'raticate', 20,
    [[1, 'tackle'], [1, 'tailwhip'], [7, 'quickattack'], [13, 'hyperfang'], [20, 'focusenergy'], [27, 'pursuit']],
    'Its ever-growing fangs gnaw through almost anything left unguarded.', { growth: MF, catchRate: 255 });
  sp(20, 'raticate', 'Raticate', ['normal'], 'common', [55, 81, 60, 50, 70, 97], null, 0,
    [[1, 'quickattack'], [1, 'hyperfang'], [20, 'focusenergy'], [27, 'pursuit'], [34, 'crunch'], [41, 'doubleedge']],
    'Its webbed hind feet let it cross rivers in search of new burrows.', { final: true, growth: MF, catchRate: 127 });

  // ===== Spearow line =======================================================
  sp(21, 'spearow', 'Spearow', ['normal', 'flying'], 'common', [40, 60, 30, 31, 31, 70], 'fearow', 20,
    [[1, 'peck'], [1, 'growl'], [7, 'leer'], [13, 'furycutter'], [19, 'aerialace'], [26, 'pursuit']],
    'A short-tempered flier that screeches and dives the moment it is provoked.', { growth: MF, catchRate: 255 });
  sp(22, 'fearow', 'Fearow', ['normal', 'flying'], 'uncommon', [65, 90, 65, 61, 61, 100], null, 0,
    [[1, 'peck'], [1, 'leer'], [13, 'furycutter'], [19, 'aerialace'], [26, 'pursuit'], [35, 'drillpeck'], [43, 'agility']],
    'Its long beak stabs prey from above before the victim ever takes flight.', { final: true, growth: MF, catchRate: 90 });

  // ===== Ekans line =========================================================
  sp(23, 'ekans', 'Ekans', ['poison'], 'common', [35, 60, 44, 40, 54, 55], 'arbok', 22,
    [[1, 'leer'], [1, 'poisonsting'], [9, 'bite'], [14, 'acid'], [20, 'screech'], [27, 'sludge']],
    'It coils in tall grass and tracks warm bodies by their faint heat.', { growth: MF, catchRate: 255 });
  sp(24, 'arbok', 'Arbok', ['poison'], 'uncommon', [60, 95, 69, 65, 79, 80], null, 0,
    [[1, 'leer'], [1, 'bite'], [20, 'screech'], [27, 'acid'], [33, 'crunch'], [40, 'sludgebomb'], [47, 'toxic']],
    'The fierce pattern on its hood freezes weaker creatures in place.', { final: true, growth: MF, catchRate: 90 });

  // ===== Pikachu line =======================================================
  sp(25, 'pikachu', 'Pikachu', ['electric'], 'uncommon', [35, 55, 40, 50, 50, 90], 'raichu', 26,
    [[1, 'thundershock'], [1, 'growl'], [6, 'tailwhip'], [11, 'quickattack'], [18, 'spark'], [26, 'thunderbolt'], [33, 'agility']],
    'It stores charge in its cheek pouches and crackles when excited.', { growth: MF, catchRate: 190 });
  sp(26, 'raichu', 'Raichu', ['electric'], 'rare', [60, 90, 55, 90, 80, 110], null, 0,
    [[1, 'thundershock'], [1, 'quickattack'], [1, 'spark'], [26, 'thunderbolt'], [34, 'agility'], [43, 'thunder']],
    'Excess electricity earths through its long tail to keep it from frying itself.', { final: true, growth: MF, catchRate: 75 });

  // ===== Sandshrew line =====================================================
  sp(27, 'sandshrew', 'Sandshrew', ['ground'], 'common', [50, 75, 85, 20, 30, 40], 'sandslash', 22,
    [[1, 'scratch'], [1, 'defensecurl'], [6, 'sandattack'], [11, 'magnitude'], [17, 'dig'], [24, 'slash']],
    'It curls into a tight ball to shed sand and shrug off blows.', { growth: MF, catchRate: 255 });
  sp(28, 'sandslash', 'Sandslash', ['ground'], 'uncommon', [75, 100, 110, 45, 55, 65], null, 0,
    [[1, 'scratch'], [1, 'dig'], [17, 'slash'], [24, 'swordsdance'], [33, 'magnitude'], [42, 'earthquake'], [50, 'sandstorm']],
    'The hooked spines along its back hook and fling foes during a charge.', { final: true, growth: MF, catchRate: 90 });

  // ===== Nidoran female line ================================================
  sp(29, 'nidoranf', 'Nidoran♀', ['poison'], 'common', [55, 47, 52, 40, 40, 41], 'nidorina', 16,
    [[1, 'growl'], [1, 'scratch'], [8, 'poisonsting'], [14, 'bite'], [21, 'furycutter'], [29, 'sludge']],
    'Though gentle by nature, its small horn carries a stinging venom.', { growth: MS, catchRate: 235 });
  sp(30, 'nidorina', 'Nidorina', ['poison'], 'uncommon', [70, 62, 67, 55, 55, 56], 'nidoqueen', 28,
    [[1, 'scratch'], [1, 'poisonsting'], [14, 'bite'], [21, 'furycutter'], [29, 'sludge'], [36, 'crunch'], [43, 'sludgebomb']],
    'It calms when surrounded by family and bristles only to protect its kin.', { mid: true, growth: MS, catchRate: 120 });
  sp(31, 'nidoqueen', 'Nidoqueen', ['poison', 'ground'], 'rare', [90, 92, 87, 75, 85, 76], null, 0,
    [[1, 'bite'], [1, 'sludge'], [1, 'magnitude'], [29, 'crunch'], [38, 'earthquake'], [47, 'sludgebomb'], [55, 'sandstorm']],
    'Its armored hide turns aside attacks as it shields the young behind it.', { final: true, growth: MS, catchRate: 45 });

  // ===== Nidoran male line ==================================================
  sp(32, 'nidoranm', 'Nidoran♂', ['poison'], 'common', [46, 57, 40, 40, 40, 50], 'nidorino', 16,
    [[1, 'leer'], [1, 'peck'], [8, 'poisonsting'], [14, 'focusenergy'], [21, 'furycutter'], [29, 'sludge']],
    'It flicks its large ears to read the wind and the moods of others.', { growth: MS, catchRate: 235 });
  sp(33, 'nidorino', 'Nidorino', ['poison'], 'uncommon', [61, 72, 57, 55, 55, 65], 'nidoking', 28,
    [[1, 'peck'], [1, 'poisonsting'], [14, 'focusenergy'], [21, 'furycutter'], [29, 'sludge'], [36, 'headbutt'], [43, 'sludgebomb']],
    'Its hardened horn can punch clean through a slab of iron.', { mid: true, growth: MS, catchRate: 120 });
  sp(34, 'nidoking', 'Nidoking', ['poison', 'ground'], 'rare', [81, 102, 77, 85, 75, 85], null, 0,
    [[1, 'peck'], [1, 'sludge'], [1, 'magnitude'], [29, 'headbutt'], [38, 'earthquake'], [47, 'sludgebomb'], [55, 'megahorn']],
    'One swing of its thick tail can topple a radio tower flat.', { final: true, growth: MS, catchRate: 45 });

  // ===== Clefairy line ======================================================
  sp(35, 'clefairy', 'Clefairy', ['normal'], 'uncommon', [70, 45, 48, 60, 65, 35], 'clefable', 28,
    [[1, 'pound'], [1, 'growl'], [8, 'sing'], [13, 'defensecurl'], [20, 'sweetscent'], [28, 'bodyslam']],
    'On clear nights it gathers on hilltops and dances beneath the moon.', { growth: FA, catchRate: 150 });
  sp(36, 'clefable', 'Clefable', ['normal'], 'rare', [95, 70, 73, 95, 90, 60], null, 0,
    [[1, 'sing'], [1, 'pound'], [1, 'sweetscent'], [28, 'bodyslam'], [37, 'swift'], [46, 'doubleedge']],
    'Its keen ears catch a pin dropping a mile off, so it shuns crowds.', { final: true, growth: FA, catchRate: 25 });

  // ===== Vulpix line ========================================================
  sp(37, 'vulpix', 'Vulpix', ['fire'], 'uncommon', [38, 41, 40, 50, 65, 65], 'ninetales', 28,
    [[1, 'ember'], [1, 'tailwhip'], [9, 'quickattack'], [16, 'flamewheel'], [24, 'faintattack'], [31, 'flamethrower']],
    'Its tails split as it matures, each one glowing warm to the touch.', { growth: MF, catchRate: 190 });
  sp(38, 'ninetales', 'Ninetales', ['fire'], 'rare', [73, 76, 75, 81, 100, 100], null, 0,
    [[1, 'ember'], [1, 'quickattack'], [1, 'faintattack'], [28, 'flamethrower'], [37, 'confusion'], [46, 'fireblast']],
    'Legend holds that each of its nine tails carries a hundred years of life.', { final: true, growth: MF, catchRate: 75 });

  // ===== Jigglypuff line ====================================================
  sp(39, 'jigglypuff', 'Jigglypuff', ['normal'], 'common', [115, 45, 20, 45, 25, 20], 'wigglytuff', 28,
    [[1, 'sing'], [1, 'pound'], [9, 'defensecurl'], [14, 'headbutt'], [19, 'bodyslam'], [28, 'doubleedge']],
    'It croons a soft tune that lulls listeners into a helpless drowse.', { growth: FA, catchRate: 170 });
  sp(40, 'wigglytuff', 'Wigglytuff', ['normal'], 'uncommon', [140, 70, 45, 85, 50, 45], null, 0,
    [[1, 'sing'], [1, 'pound'], [1, 'bodyslam'], [28, 'doubleedge'], [37, 'swift'], [46, 'hyperbeam']],
    'It inflates with air until its body grows soft, springy, and surprisingly tough.', { final: true, growth: FA, catchRate: 50 });

  // ===== Zubat line =========================================================
  sp(41, 'zubat', 'Zubat', ['poison', 'flying'], 'common', [40, 45, 35, 30, 40, 55], 'golbat', 22,
    [[1, 'leechlife'], [6, 'sandattack'], [11, 'bite'], [16, 'wingattack'], [21, 'confusion'], [28, 'aerialace']],
    'Eyeless, it maps dark caverns by bouncing high cries off the walls.', { growth: MF, catchRate: 255 });
  sp(42, 'golbat', 'Golbat', ['poison', 'flying'], 'uncommon', [75, 80, 70, 65, 75, 90], null, 0,
    [[1, 'leechlife'], [1, 'bite'], [16, 'wingattack'], [21, 'confusion'], [28, 'aerialace'], [36, 'crunch'], [44, 'sludgebomb']],
    'It clamps onto prey with hooked fangs and drains blood until it can barely fly.', { final: true, growth: MF, catchRate: 90 });

  // ===== Oddish line ========================================================
  sp(43, 'oddish', 'Oddish', ['grass', 'poison'], 'common', [45, 50, 55, 75, 65, 30], 'gloom', 21,
    [[1, 'absorb'], [7, 'sweetscent'], [14, 'poisonpowder'], [16, 'stunspore'], [18, 'sleeppowder'], [23, 'megadrain']],
    'By day it buries itself in soil; by night it strolls about on stubby feet.', { growth: MS, catchRate: 255 });
  sp(44, 'gloom', 'Gloom', ['grass', 'poison'], 'uncommon', [60, 65, 70, 85, 75, 40], 'vileplume', 32,
    [[1, 'absorb'], [1, 'poisonpowder'], [18, 'sleeppowder'], [23, 'megadrain'], [29, 'acid'], [38, 'gigadrain'], [44, 'sludgebomb']],
    'A pungent nectar drips from its mouth, repellent to all but a few.', { mid: true, growth: MS, catchRate: 120 });
  sp(45, 'vileplume', 'Vileplume', ['grass', 'poison'], 'rare', [75, 80, 85, 110, 90, 50], null, 0,
    [[1, 'megadrain'], [1, 'poisonpowder'], [1, 'stunspore'], [32, 'gigadrain'], [41, 'sludgebomb'], [49, 'sunnyday'], [56, 'solarbeam']],
    'The largest of petals shakes loose clouds of choking allergenic dust.', { final: true, growth: MS, catchRate: 45 });

  // ===== Paras line =========================================================
  sp(46, 'paras', 'Paras', ['bug', 'grass'], 'common', [35, 70, 55, 45, 55, 25], 'parasect', 24,
    [[1, 'scratch'], [1, 'leechlife'], [7, 'stunspore'], [13, 'poisonpowder'], [19, 'absorb'], [27, 'spore']],
    'Twin mushrooms ride its back, sinking roots that slowly steer its will.', { growth: MF, catchRate: 255 });
  sp(47, 'parasect', 'Parasect', ['bug', 'grass'], 'uncommon', [60, 95, 80, 60, 80, 30], null, 0,
    [[1, 'scratch'], [1, 'leechlife'], [1, 'spore'], [27, 'megadrain'], [34, 'slash'], [42, 'gigadrain'], [50, 'swordsdance']],
    'The fungus has long since taken over, scattering spores wherever it crawls.', { final: true, growth: MF, catchRate: 75 });

  // ===== Venonat line =======================================================
  sp(48, 'venonat', 'Venonat', ['bug', 'poison'], 'common', [60, 55, 50, 40, 55, 45], 'venomoth', 31,
    [[1, 'tackle'], [1, 'leechlife'], [9, 'poisonpowder'], [13, 'confusion'], [20, 'stunspore'], [28, 'psybeam']],
    'Its big eyes glow in the dark, drawing it toward any flicker of light.', { growth: MF, catchRate: 190 });
  sp(49, 'venomoth', 'Venomoth', ['bug', 'poison'], 'uncommon', [70, 65, 60, 90, 75, 90], null, 0,
    [[1, 'confusion'], [1, 'poisonpowder'], [1, 'gust'], [31, 'psybeam'], [38, 'silverwind'], [46, 'sludgebomb'], [54, 'psychic']],
    'The dust shed from its wings differs in color with each toxin it carries.', { final: true, growth: MF, catchRate: 75 });

  // ===== Diglett line =======================================================
  sp(50, 'diglett', 'Diglett', ['ground'], 'common', [10, 55, 25, 35, 45, 95], 'dugtrio', 26,
    [[1, 'scratch'], [1, 'sandattack'], [9, 'magnitude'], [15, 'dig'], [21, 'mudslap'], [28, 'slash']],
    'It tunnels just below the surface, tilling the soil as it feeds on roots.', { growth: MF, catchRate: 255 });
  sp(51, 'dugtrio', 'Dugtrio', ['ground'], 'uncommon', [35, 100, 50, 50, 70, 120], null, 0,
    [[1, 'scratch'], [1, 'dig'], [21, 'mudslap'], [28, 'slash'], [35, 'magnitude'], [43, 'earthquake'], [50, 'sandstorm']],
    'Three burrowers move as one, churning the ground far beneath a field.', { final: true, growth: MF, catchRate: 50 });

  // ===== Meowth line ========================================================
  sp(52, 'meowth', 'Meowth', ['normal'], 'common', [40, 45, 35, 40, 40, 90], 'persian', 28,
    [[1, 'scratch'], [1, 'growl'], [10, 'bite'], [17, 'faintattack'], [24, 'screech'], [31, 'slash']],
    'It cannot resist anything that gleams, hoarding coins in secret nooks.', { growth: MF, catchRate: 255 });
  sp(53, 'persian', 'Persian', ['normal'], 'uncommon', [65, 70, 60, 65, 65, 115], null, 0,
    [[1, 'scratch'], [1, 'bite'], [17, 'faintattack'], [24, 'screech'], [31, 'slash'], [40, 'swift'], [48, 'crunch']],
    'Proud and quick to anger, it lashes out the instant its whiskers are touched.', { final: true, growth: MF, catchRate: 90 });

  // ===== Psyduck line =======================================================
  sp(54, 'psyduck', 'Psyduck', ['water'], 'common', [50, 52, 48, 65, 50, 55], 'golduck', 33,
    [[1, 'watergun'], [1, 'scratch'], [10, 'tailwhip'], [16, 'confusion'], [23, 'bubblebeam'], [31, 'psybeam']],
    'A pounding headache fogs its mind until odd powers spill out unbidden.', { growth: MF, catchRate: 190 });
  sp(55, 'golduck', 'Golduck', ['water'], 'uncommon', [80, 82, 78, 95, 80, 85], null, 0,
    [[1, 'watergun'], [1, 'confusion'], [16, 'bubblebeam'], [23, 'psybeam'], [33, 'surf'], [42, 'psychic'], [50, 'hydropump']],
    'A powerful swimmer, it glides through rivers with smooth, deliberate strokes.', { final: true, growth: MF, catchRate: 75 });

  // ===== Mankey line ========================================================
  sp(56, 'mankey', 'Mankey', ['fighting'], 'common', [40, 80, 35, 35, 45, 70], 'primeape', 28,
    [[1, 'scratch'], [1, 'leer'], [9, 'karatechop'], [15, 'lowkick'], [21, 'focusenergy'], [27, 'crosschop']],
    'A hot-headed scrapper that flies into a rage at the slightest provocation.', { growth: MF, catchRate: 190 });
  sp(57, 'primeape', 'Primeape', ['fighting'], 'uncommon', [65, 105, 60, 60, 70, 95], null, 0,
    [[1, 'karatechop'], [1, 'lowkick'], [21, 'focusenergy'], [27, 'crosschop'], [35, 'takedown'], [44, 'brickbreak']],
    'Once it starts chasing a target, it will not stop until utterly spent.', { final: true, growth: MF, catchRate: 75 });

  // ===== Growlithe line =====================================================
  sp(58, 'growlithe', 'Growlithe', ['fire'], 'uncommon', [55, 70, 45, 70, 50, 60], 'arcanine', 30,
    [[1, 'ember'], [1, 'leer'], [9, 'bite'], [15, 'flamewheel'], [22, 'takedown'], [30, 'flamethrower']],
    'Fiercely loyal, it plants its paws and barks down anything that threatens its trainer.', { growth: SL, catchRate: 190 });
  sp(59, 'arcanine', 'Arcanine', ['fire'], 'rare', [90, 110, 80, 100, 80, 95], null, 0,
    [[1, 'ember'], [1, 'bite'], [1, 'flamewheel'], [30, 'flamethrower'], [40, 'crunch'], [49, 'takedown'], [58, 'fireblast']],
    'It is said to race across whole provinces in a single day and night.', { final: true, growth: SL, catchRate: 75 });

  // ===== Poliwag line =======================================================
  sp(60, 'poliwag', 'Poliwag', ['water'], 'common', [40, 50, 40, 40, 40, 90], 'poliwhirl', 25,
    [[1, 'bubble'], [1, 'tailwhip'], [8, 'watergun'], [15, 'doubleteam'], [21, 'bubblebeam'], [29, 'bodyslam']],
    'The spiral on its belly shifts as the half-formed legs beneath it grow.', { growth: MS, catchRate: 255 });
  sp(61, 'poliwhirl', 'Poliwhirl', ['water'], 'uncommon', [65, 65, 65, 50, 50, 90], 'poliwrath', 35,
    [[1, 'bubble'], [1, 'watergun'], [15, 'doubleteam'], [21, 'bubblebeam'], [29, 'bodyslam'], [37, 'surf'], [44, 'hydropump']],
    'Its slick skin lets it slip free of almost any grip on land or in water.', { mid: true, growth: MS, catchRate: 120 });
  sp(62, 'poliwrath', 'Poliwrath', ['water', 'fighting'], 'rare', [90, 95, 95, 70, 90, 70], null, 0,
    [[1, 'bubblebeam'], [1, 'karatechop'], [1, 'bodyslam'], [35, 'submission'], [44, 'surf'], [52, 'brickbreak'], [60, 'hydropump']],
    'A tireless swimmer, it churns the water with muscles honed by endless training.', { final: true, growth: MS, catchRate: 45 });

  // ===== Abra line ==========================================================
  sp(63, 'abra', 'Abra', ['psychic'], 'uncommon', [25, 20, 15, 105, 55, 90], 'kadabra', 16,
    [[1, 'confusion'], [1, 'agility'], [16, 'psybeam'], [22, 'doubleteam'], [30, 'futuresight'], [38, 'psychic']],
    'It dozes most of the day and blinks away the instant any danger nears.', { growth: MS, catchRate: 200 });
  sp(64, 'kadabra', 'Kadabra', ['psychic'], 'rare', [40, 35, 30, 120, 70, 105], 'alakazam', 32,
    [[1, 'confusion'], [1, 'agility'], [16, 'psybeam'], [22, 'doubleteam'], [30, 'futuresight'], [38, 'psychic'], [45, 'calmmind']],
    'The spoon it holds amplifies the strange waves rolling off its mind.', { mid: true, growth: MS, catchRate: 100 });
  sp(65, 'alakazam', 'Alakazam', ['psychic'], 'rare', [55, 50, 45, 135, 95, 120], null, 0,
    [[1, 'confusion'], [1, 'psybeam'], [1, 'calmmind'], [30, 'futuresight'], [38, 'psychic'], [45, 'agility'], [55, 'hypnosis']],
    'Its brain never stops growing, sharpening a memory that forgets nothing.', { final: true, growth: MS, catchRate: 50 });
})();
