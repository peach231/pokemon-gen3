// pokemon-gen3 — types.js
// Gen 3 type chart: 17 types (NO Fairy). Damage category follows the Gen 3
// convention — split by TYPE, not by move. Gen-3 specifics honored: Steel
// resists Ghost and Dark; Ghost/Dark/Steel relationships as of Ruby/Sapphire.

(function () {
  G.TYPE_ORDER = [
    'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting',
    'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost',
    'dragon', 'dark', 'steel'
  ];

  // G.TYPE_CHART[attacker][defender] = multiplier; missing = 1.
  G.TYPE_CHART = {
    normal:   { rock: 0.5, steel: 0.5, ghost: 0 },
    fire:     { grass: 2, ice: 2, bug: 2, steel: 2, fire: 0.5, water: 0.5, rock: 0.5, dragon: 0.5 },
    water:    { fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5 },
    grass:    { water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5, steel: 0.5 },
    electric: { water: 2, flying: 2, electric: 0.5, grass: 0.5, dragon: 0.5, ground: 0 },
    ice:      { grass: 2, ground: 2, flying: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5, steel: 0.5 },
    fighting: { normal: 2, ice: 2, rock: 2, dark: 2, steel: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, ghost: 0 },
    poison:   { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0 },
    ground:   { fire: 2, electric: 2, poison: 2, rock: 2, steel: 2, grass: 0.5, bug: 0.5, flying: 0 },
    flying:   { grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5, steel: 0.5 },
    psychic:  { fighting: 2, poison: 2, psychic: 0.5, steel: 0.5, dark: 0 },
    bug:      { grass: 2, psychic: 2, dark: 2, fire: 0.5, fighting: 0.5, poison: 0.5, flying: 0.5, ghost: 0.5, steel: 0.5 },
    rock:     { fire: 2, ice: 2, flying: 2, bug: 2, fighting: 0.5, ground: 0.5, steel: 0.5 },
    ghost:    { psychic: 2, ghost: 2, dark: 0.5, steel: 0.5, normal: 0 },
    dragon:   { dragon: 2, steel: 0.5 },
    dark:     { psychic: 2, ghost: 2, fighting: 0.5, dark: 0.5, steel: 0.5 },
    steel:    { ice: 2, rock: 2, fire: 0.5, water: 0.5, electric: 0.5, steel: 0.5 }
  };

  // Gen 3: physical/special is decided by the move's TYPE.
  G.PHYS_TYPES = { normal: 1, fighting: 1, flying: 1, ground: 1, rock: 1, bug: 1, ghost: 1, poison: 1, steel: 1 };

  G.typeEff = function (moveType, defTypes) {
    var mult = 1;
    var row = G.TYPE_CHART[moveType] || {};
    for (var i = 0; i < defTypes.length; i++) {
      var m = row[defTypes[i]];
      if (m !== undefined) mult *= m;
    }
    return mult;
  };

  G.isPhysical = function (moveType) { return !!G.PHYS_TYPES[moveType]; };
})();
