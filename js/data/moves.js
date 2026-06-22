// pokemon-gen3 — moves.js
// Gen 3 movepool. Category is decided by TYPE (see types.js), so moves carry no
// category field. Effect kinds understood by battle.js:
//   { kind:'status', status:'brn'|'psn'|'par'|'slp', chance:0-100 } (no chance = always; power 0 = pure status move)
//   { kind:'stages', target:'self'|'foe', stat:'atk'|'def'|'spa'|'spd'|'spe'|'acc'|'eva', delta:±n, chance }
//   { kind:'flinch', chance } { kind:'highCrit' } { kind:'recoil', frac } { kind:'drain', frac } { kind:'multiHit' }
//   { kind:'weather', weather:'rain'|'sun'|'sand' }  (Gen 3 weather; power 0)
// Notes/simplifications: freeze, confusion, charge turns, and dual-stat boosts
// aren't modeled — those moves are approximated (e.g. Calm Mind => Sp.Atk +1).

(function () {
  var M = G.MOVES = {};
  function mv(id, name, type, power, acc, pp, prio, effect) {
    M[id] = { id: id, name: name, type: type, power: power, acc: acc, pp: pp, priority: prio || 0, effect: effect || null };
  }

  // ----- normal ----------------------------------------------------------
  mv('tackle',      'Tackle',        'normal', 40, 100, 35);
  mv('scratch',     'Scratch',       'normal', 40, 100, 35);
  mv('pound',       'Pound',         'normal', 40, 100, 35);
  mv('quickattack', 'Quick Attack',  'normal', 40, 100, 30, 1);
  mv('swift',       'Swift',         'normal', 60, 101, 20);            // never misses
  mv('cut',         'Cut',           'normal', 50, 95, 30);
  mv('slash',       'Slash',         'normal', 70, 100, 20, 0, { kind: 'highCrit' });
  mv('headbutt',    'Headbutt',      'normal', 70, 100, 15, 0, { kind: 'flinch', chance: 30 });
  mv('hyperfang',   'Hyper Fang',    'normal', 80, 90, 15, 0, { kind: 'flinch', chance: 10 });
  mv('strength',    'Strength',      'normal', 80, 100, 15);
  mv('bodyslam',    'Body Slam',     'normal', 85, 100, 15, 0, { kind: 'status', status: 'par', chance: 30 });
  mv('facade',      'Facade',        'normal', 70, 100, 20);
  mv('return',      'Return',        'normal', 102, 100, 20);
  mv('takedown',    'Take Down',     'normal', 90, 85, 20, 0, { kind: 'recoil', frac: 0.25 });
  mv('doubleedge',  'Double-Edge',   'normal', 120, 100, 15, 0, { kind: 'recoil', frac: 0.33 });
  mv('hyperbeam',   'Hyper Beam',    'normal', 150, 90, 5);
  mv('growl',       'Growl',         'normal', 0, 100, 40, 0, { kind: 'stages', target: 'foe', stat: 'atk', delta: -1 });
  mv('tailwhip',    'Tail Whip',     'normal', 0, 100, 30, 0, { kind: 'stages', target: 'foe', stat: 'def', delta: -1 });
  mv('leer',        'Leer',          'normal', 0, 100, 30, 0, { kind: 'stages', target: 'foe', stat: 'def', delta: -1 });
  mv('screech',     'Screech',       'normal', 0, 85, 40, 0, { kind: 'stages', target: 'foe', stat: 'def', delta: -2 });
  mv('sandattack',  'Sand-Attack',   'normal', 0, 100, 15, 0, { kind: 'stages', target: 'foe', stat: 'acc', delta: -1 });
  mv('harden',      'Harden',        'normal', 0, 100, 30, 0, { kind: 'stages', target: 'self', stat: 'def', delta: 1 });
  mv('defensecurl', 'Defense Curl',  'normal', 0, 100, 40, 0, { kind: 'stages', target: 'self', stat: 'def', delta: 1 });
  mv('swordsdance', 'Swords Dance',  'normal', 0, 100, 30, 0, { kind: 'stages', target: 'self', stat: 'atk', delta: 2 });
  mv('sing',        'Sing',          'normal', 0, 55, 15, 0, { kind: 'status', status: 'slp' });
  mv('struggle',    'Struggle',      'normal', 35, 100, 99, 0, { kind: 'recoil', frac: 0.25 });

  // ----- fire ------------------------------------------------------------
  mv('ember',       'Ember',         'fire', 40, 100, 25, 0, { kind: 'status', status: 'brn', chance: 10 });
  mv('flamewheel',  'Flame Wheel',   'fire', 60, 100, 25, 0, { kind: 'status', status: 'brn', chance: 10 });
  mv('firepunch',   'Fire Punch',    'fire', 75, 100, 15, 0, { kind: 'status', status: 'brn', chance: 10 });
  mv('flamethrower','Flamethrower',  'fire', 95, 100, 15, 0, { kind: 'status', status: 'brn', chance: 10 });
  mv('fireblast',   'Fire Blast',    'fire', 120, 85, 5, 0, { kind: 'status', status: 'brn', chance: 10 });
  mv('overheat',    'Overheat',      'fire', 140, 90, 5, 0, { kind: 'stages', target: 'self', stat: 'spa', delta: -2 });
  mv('sunnyday',    'Sunny Day',     'fire', 0, 100, 5, 0, { kind: 'weather', weather: 'sun' });

  // ----- water -----------------------------------------------------------
  mv('watergun',    'Water Gun',     'water', 40, 100, 25);
  mv('bubble',      'Bubble',        'water', 20, 100, 30, 0, { kind: 'stages', target: 'foe', stat: 'spe', delta: -1, chance: 10 });
  mv('aquajet',     'Aqua Jet',      'water', 40, 100, 20, 1);
  mv('bubblebeam',  'Bubble Beam',   'water', 65, 100, 20, 0, { kind: 'stages', target: 'foe', stat: 'spe', delta: -1, chance: 10 });
  mv('waterfall',   'Waterfall',     'water', 80, 100, 15);
  mv('surf',        'Surf',          'water', 95, 100, 15);
  mv('hydropump',   'Hydro Pump',    'water', 120, 80, 5);
  mv('withdraw',    'Withdraw',      'water', 0, 100, 40, 0, { kind: 'stages', target: 'self', stat: 'def', delta: 1 });
  mv('raindance',   'Rain Dance',    'water', 0, 100, 5, 0, { kind: 'weather', weather: 'rain' });

  // ----- grass -----------------------------------------------------------
  mv('absorb',      'Absorb',        'grass', 20, 100, 25, 0, { kind: 'drain', frac: 0.5 });
  mv('megadrain',   'Mega Drain',    'grass', 40, 100, 15, 0, { kind: 'drain', frac: 0.5 });
  mv('gigadrain',   'Giga Drain',    'grass', 60, 100, 5, 0, { kind: 'drain', frac: 0.5 });
  mv('vinewhip',    'Vine Whip',     'grass', 35, 100, 10);
  mv('magicalleaf', 'Magical Leaf',  'grass', 60, 101, 20);            // never misses
  mv('razorleaf',   'Razor Leaf',    'grass', 55, 95, 25, 0, { kind: 'highCrit' });
  mv('bulletseed',  'Bullet Seed',   'grass', 10, 100, 30, 0, { kind: 'multiHit' });
  mv('leafblade',   'Leaf Blade',    'grass', 70, 100, 15, 0, { kind: 'highCrit' });
  mv('solarbeam',   'Solar Beam',    'grass', 120, 100, 10);
  mv('sleeppowder', 'Sleep Powder',  'grass', 0, 75, 15, 0, { kind: 'status', status: 'slp' });
  mv('spore',       'Spore',         'grass', 0, 100, 15, 0, { kind: 'status', status: 'slp' });
  mv('stunspore',   'Stun Spore',    'grass', 0, 75, 30, 0, { kind: 'status', status: 'par' });
  mv('poisonpowder','Poison Powder', 'grass', 0, 75, 35, 0, { kind: 'status', status: 'psn' });
  mv('growth',      'Growth',        'grass', 0, 100, 40, 0, { kind: 'stages', target: 'self', stat: 'spa', delta: 1 });

  // ----- electric --------------------------------------------------------
  mv('thundershock','Thunder Shock', 'electric', 40, 100, 30, 0, { kind: 'status', status: 'par', chance: 10 });
  mv('spark',       'Spark',         'electric', 65, 100, 20, 0, { kind: 'status', status: 'par', chance: 30 });
  mv('shockwave',   'Shock Wave',    'electric', 60, 101, 20);          // never misses
  mv('thunderbolt', 'Thunderbolt',   'electric', 95, 100, 15, 0, { kind: 'status', status: 'par', chance: 10 });
  mv('thunder',     'Thunder',       'electric', 120, 70, 10, 0, { kind: 'status', status: 'par', chance: 30 });
  mv('thunderwave', 'Thunder Wave',  'electric', 0, 100, 20, 0, { kind: 'status', status: 'par' });

  // ----- ice -------------------------------------------------------------
  mv('powdersnow',  'Powder Snow',   'ice', 40, 100, 25);
  mv('icywind',     'Icy Wind',      'ice', 55, 95, 15, 0, { kind: 'stages', target: 'foe', stat: 'spe', delta: -1 });
  mv('aurorabeam',  'Aurora Beam',   'ice', 65, 100, 20, 0, { kind: 'stages', target: 'foe', stat: 'atk', delta: -1, chance: 10 });
  mv('icebeam',     'Ice Beam',      'ice', 95, 100, 10);
  mv('blizzard',    'Blizzard',      'ice', 120, 70, 5);

  // ----- fighting --------------------------------------------------------
  mv('karatechop',  'Karate Chop',   'fighting', 50, 100, 25, 0, { kind: 'highCrit' });
  mv('machpunch',   'Mach Punch',    'fighting', 40, 100, 30, 1);
  mv('rocksmash',   'Rock Smash',    'fighting', 20, 100, 15, 0, { kind: 'stages', target: 'foe', stat: 'def', delta: -1, chance: 50 });
  mv('lowkick',     'Low Kick',      'fighting', 50, 100, 20);
  mv('brickbreak',  'Brick Break',   'fighting', 75, 100, 15);
  mv('submission',  'Submission',    'fighting', 80, 80, 25, 0, { kind: 'recoil', frac: 0.25 });
  mv('crosschop',   'Cross Chop',    'fighting', 100, 80, 5, 0, { kind: 'highCrit' });
  mv('bulkup',      'Bulk Up',       'fighting', 0, 100, 20, 0, { kind: 'stages', target: 'self', stat: 'atk', delta: 1 });

  // ----- poison ----------------------------------------------------------
  mv('poisonsting', 'Poison Sting',  'poison', 15, 100, 35, 0, { kind: 'status', status: 'psn', chance: 30 });
  mv('acid',        'Acid',          'poison', 40, 100, 30, 0, { kind: 'stages', target: 'foe', stat: 'spd', delta: -1, chance: 10 });
  mv('sludge',      'Sludge',        'poison', 65, 100, 20, 0, { kind: 'status', status: 'psn', chance: 30 });
  mv('sludgebomb',  'Sludge Bomb',   'poison', 90, 100, 10, 0, { kind: 'status', status: 'psn', chance: 30 });
  mv('toxic',       'Toxic',         'poison', 0, 90, 10, 0, { kind: 'status', status: 'psn' });

  // ----- ground ----------------------------------------------------------
  mv('mudslap',     'Mud-Slap',      'ground', 20, 100, 10, 0, { kind: 'stages', target: 'foe', stat: 'acc', delta: -1 });
  mv('magnitude',   'Magnitude',     'ground', 70, 100, 30);
  mv('dig',         'Dig',           'ground', 60, 100, 10);
  mv('sandtomb',    'Sand Tomb',     'ground', 35, 70, 15);
  mv('earthquake',  'Earthquake',    'ground', 100, 100, 10);
  mv('sandstorm',   'Sandstorm',     'ground', 0, 100, 10, 0, { kind: 'weather', weather: 'sand' });

  // ----- flying ----------------------------------------------------------
  mv('peck',        'Peck',          'flying', 35, 100, 35);
  mv('gust',        'Gust',          'flying', 40, 100, 35);
  mv('wingattack',  'Wing Attack',   'flying', 60, 100, 35);
  mv('aerialace',   'Aerial Ace',    'flying', 60, 101, 20);            // never misses
  mv('fly',         'Fly',           'flying', 70, 95, 15);
  mv('drillpeck',   'Drill Peck',    'flying', 80, 100, 20);
  mv('featherdance','Feather Dance', 'flying', 0, 100, 15, 0, { kind: 'stages', target: 'foe', stat: 'atk', delta: -2 });

  // ----- psychic ---------------------------------------------------------
  mv('confusion',   'Confusion',     'psychic', 50, 100, 25);
  mv('psybeam',     'Psybeam',       'psychic', 65, 100, 20);
  mv('futuresight', 'Future Sight',  'psychic', 80, 90, 15);
  mv('psychic',     'Psychic',       'psychic', 90, 100, 10, 0, { kind: 'stages', target: 'foe', stat: 'spd', delta: -1, chance: 10 });
  mv('calmmind',    'Calm Mind',     'psychic', 0, 100, 20, 0, { kind: 'stages', target: 'self', stat: 'spa', delta: 1 });
  mv('hypnosis',    'Hypnosis',      'psychic', 0, 60, 20, 0, { kind: 'status', status: 'slp' });

  // ----- bug -------------------------------------------------------------
  mv('leechlife',   'Leech Life',    'bug', 20, 100, 15, 0, { kind: 'drain', frac: 0.5 });
  mv('pinmissile',  'Pin Missile',   'bug', 14, 85, 20, 0, { kind: 'multiHit' });
  mv('furycutter',  'Fury Cutter',   'bug', 40, 95, 20);
  mv('twineedle',   'Twineedle',     'bug', 25, 100, 20, 0, { kind: 'multiHit' });
  mv('silverwind',  'Silver Wind',   'bug', 60, 100, 5);
  mv('signalbeam',  'Signal Beam',   'bug', 75, 100, 15);
  mv('megahorn',    'Megahorn',      'bug', 120, 85, 10);

  // ----- rock ------------------------------------------------------------
  mv('rockthrow',   'Rock Throw',    'rock', 50, 90, 15);
  mv('rocktomb',    'Rock Tomb',     'rock', 50, 80, 10, 0, { kind: 'stages', target: 'foe', stat: 'spe', delta: -1 });
  mv('ancientpower','Ancient Power', 'rock', 60, 100, 5);
  mv('rockblast',   'Rock Blast',    'rock', 25, 80, 10, 0, { kind: 'multiHit' });
  mv('rockslide',   'Rock Slide',    'rock', 75, 90, 10, 0, { kind: 'flinch', chance: 30 });

  // ----- ghost -----------------------------------------------------------
  mv('lick',        'Lick',          'ghost', 20, 100, 30, 0, { kind: 'status', status: 'par', chance: 30 });
  mv('shadowpunch', 'Shadow Punch',  'ghost', 60, 101, 20);             // never misses
  mv('shadowball',  'Shadow Ball',   'ghost', 80, 100, 15, 0, { kind: 'stages', target: 'foe', stat: 'spd', delta: -1, chance: 20 });

  // ----- dragon ----------------------------------------------------------
  mv('twister',     'Twister',       'dragon', 40, 100, 20, 0, { kind: 'flinch', chance: 20 });
  mv('dragonbreath','Dragon Breath', 'dragon', 60, 100, 20, 0, { kind: 'status', status: 'par', chance: 30 });
  mv('dragonclaw',  'Dragon Claw',   'dragon', 80, 100, 15);
  mv('dragondance', 'Dragon Dance',  'dragon', 0, 100, 20, 0, { kind: 'stages', target: 'self', stat: 'atk', delta: 1 });

  // ----- dark ------------------------------------------------------------
  mv('pursuit',     'Pursuit',       'dark', 40, 100, 20);
  mv('thief',       'Thief',         'dark', 40, 100, 10);
  mv('faintattack', 'Faint Attack',  'dark', 60, 101, 20);              // never misses
  mv('bite',        'Bite',          'dark', 60, 100, 25, 0, { kind: 'flinch', chance: 30 });
  mv('crunch',      'Crunch',        'dark', 80, 100, 15, 0, { kind: 'stages', target: 'foe', stat: 'spd', delta: -1, chance: 20 });

  // ----- steel -----------------------------------------------------------
  mv('metalclaw',   'Metal Claw',    'steel', 50, 95, 35, 0, { kind: 'stages', target: 'self', stat: 'atk', delta: 1, chance: 10 });
  mv('steelwing',   'Steel Wing',    'steel', 70, 90, 25, 0, { kind: 'stages', target: 'self', stat: 'def', delta: 1, chance: 10 });
  mv('irontail',    'Iron Tail',     'steel', 100, 75, 15, 0, { kind: 'stages', target: 'foe', stat: 'def', delta: -1, chance: 30 });
  mv('meteormash',  'Meteor Mash',   'steel', 100, 85, 10, 0, { kind: 'stages', target: 'self', stat: 'atk', delta: 1, chance: 20 });

  // ----- extra normal-type utility/attacks (used by various learnsets) -----
  mv('uproar',      'Uproar',        'normal', 50, 100, 10);
  mv('howl',        'Howl',          'normal', 0, 100, 40, 0, { kind: 'stages', target: 'self', stat: 'atk', delta: 1 });
  mv('focusenergy', 'Focus Energy',  'normal', 0, 100, 30, 0, { kind: 'stages', target: 'self', stat: 'atk', delta: 1 });
  mv('agility',     'Agility',       'psychic', 0, 100, 30, 0, { kind: 'stages', target: 'self', stat: 'spe', delta: 2 });
  mv('doubleteam',  'Double Team',   'normal', 0, 100, 15, 0, { kind: 'stages', target: 'self', stat: 'eva', delta: 1 });
  mv('sweetscent',  'Sweet Scent',   'normal', 0, 100, 20, 0, { kind: 'stages', target: 'foe', stat: 'eva', delta: -1 });
  mv('yawn',        'Yawn',          'normal', 0, 100, 10, 0, { kind: 'status', status: 'slp' });
  mv('armthrust',   'Arm Thrust',    'fighting', 15, 100, 20, 0, { kind: 'multiHit' });
  mv('skyuppercut', 'Sky Uppercut',  'fighting', 85, 90, 15);

  // Signature on-screen animations — these override the generic type/category
  // FX in battle_ui so iconic moves read as themselves (a lightning strike, a
  // quaking ground, a charged beam, spinning leaves) instead of a colored blob.
  function tagAnim(anim, ids) { for (var i = 0; i < ids.length; i++) if (M[ids[i]]) M[ids[i]].anim = anim; }
  tagAnim('bolt',  ['thundershock', 'spark', 'shockwave', 'thunderbolt', 'thunder']);
  tagAnim('quake', ['earthquake', 'magnitude']);
  tagAnim('beam',  ['hyperbeam', 'hydropump', 'solarbeam', 'aurorabeam', 'icebeam', 'bubblebeam', 'psybeam', 'signalbeam', 'psychic']);
  tagAnim('leaf',  ['razorleaf', 'leafblade']);
})();
