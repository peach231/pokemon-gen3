// pokemon-gen3 — hoenn_dex.js
// The native Hoenn regional Pokédex (Ruby/Sapphire/Emerald): 202 entries,
// starters first, with cross-generation evolution lines grouped together.
// This drives the in-game Dex order/numbering and is the type source of truth
// for these species. Types use the game's 17-type set (no Fairy), so a few
// later-gen Fairy additions (Marill, Azurill, Jigglypuff line) stay as they
// were in Gen 3. The full National Dex (386) remains defined elsewhere; species
// not in this list are kept as bonus/unobtainable entries after #202.

(function () {
  var DEX = [
    ['treecko', 'grass'], ['grovyle', 'grass'], ['sceptile', 'grass'],
    ['torchic', 'fire'], ['combusken', 'fire/fighting'], ['blaziken', 'fire/fighting'],
    ['mudkip', 'water'], ['marshtomp', 'water/ground'], ['swampert', 'water/ground'],
    ['poochyena', 'dark'], ['mightyena', 'dark'],
    ['zigzagoon', 'normal'], ['linoone', 'normal'],
    ['wurmple', 'bug'], ['silcoon', 'bug'], ['beautifly', 'bug/flying'],
    ['cascoon', 'bug'], ['dustox', 'bug/poison'],
    ['lotad', 'water/grass'], ['lombre', 'water/grass'], ['ludicolo', 'water/grass'],
    ['seedot', 'grass'], ['nuzleaf', 'grass/dark'], ['shiftry', 'grass/dark'],
    ['taillow', 'normal/flying'], ['swellow', 'normal/flying'],
    ['wingull', 'water/flying'], ['pelipper', 'water/flying'],
    ['ralts', 'psychic'], ['kirlia', 'psychic'], ['gardevoir', 'psychic'],
    ['surskit', 'bug/water'], ['masquerain', 'bug/flying'],
    ['shroomish', 'grass'], ['breloom', 'grass/fighting'],
    ['slakoth', 'normal'], ['vigoroth', 'normal'], ['slaking', 'normal'],
    ['abra', 'psychic'], ['kadabra', 'psychic'], ['alakazam', 'psychic'],
    ['nincada', 'bug/ground'], ['ninjask', 'bug/flying'], ['shedinja', 'bug/ghost'],
    ['whismur', 'normal'], ['loudred', 'normal'], ['exploud', 'normal'],
    ['makuhita', 'fighting'], ['hariyama', 'fighting'],
    ['goldeen', 'water'], ['seaking', 'water'],
    ['magikarp', 'water'], ['gyarados', 'water/flying'],
    ['azurill', 'normal'], ['marill', 'water'], ['azumarill', 'water'],
    ['geodude', 'rock/ground'], ['graveler', 'rock/ground'], ['golem', 'rock/ground'],
    ['nosepass', 'rock'],
    ['skitty', 'normal'], ['delcatty', 'normal'],
    ['zubat', 'poison/flying'], ['golbat', 'poison/flying'], ['crobat', 'poison/flying'],
    ['tentacool', 'water/poison'], ['tentacruel', 'water/poison'],
    ['sableye', 'dark/ghost'], ['mawile', 'steel'],
    ['aron', 'steel/rock'], ['lairon', 'steel/rock'], ['aggron', 'steel/rock'],
    ['machop', 'fighting'], ['machoke', 'fighting'], ['machamp', 'fighting'],
    ['meditite', 'fighting/psychic'], ['medicham', 'fighting/psychic'],
    ['electrike', 'electric'], ['manectric', 'electric'],
    ['plusle', 'electric'], ['minun', 'electric'],
    ['magnemite', 'electric/steel'], ['magneton', 'electric/steel'],
    ['voltorb', 'electric'], ['electrode', 'electric'],
    ['volbeat', 'bug'], ['illumise', 'bug'],
    ['oddish', 'grass/poison'], ['gloom', 'grass/poison'], ['vileplume', 'grass/poison'], ['bellossom', 'grass'],
    ['doduo', 'normal/flying'], ['dodrio', 'normal/flying'],
    ['roselia', 'grass/poison'],
    ['gulpin', 'poison'], ['swalot', 'poison'],
    ['carvanha', 'water/dark'], ['sharpedo', 'water/dark'],
    ['wailmer', 'water'], ['wailord', 'water'],
    ['numel', 'fire/ground'], ['camerupt', 'fire/ground'],
    ['slugma', 'fire'], ['magcargo', 'fire/rock'], ['torkoal', 'fire'],
    ['grimer', 'poison'], ['muk', 'poison'], ['koffing', 'poison'], ['weezing', 'poison'],
    ['spoink', 'psychic'], ['grumpig', 'psychic'],
    ['sandshrew', 'ground'], ['sandslash', 'ground'],
    ['spinda', 'normal'], ['skarmory', 'steel/flying'],
    ['trapinch', 'ground'], ['vibrava', 'ground/dragon'], ['flygon', 'ground/dragon'],
    ['cacnea', 'grass'], ['cacturne', 'grass/dark'],
    ['swablu', 'normal/flying'], ['altaria', 'dragon/flying'],
    ['zangoose', 'normal'], ['seviper', 'poison'],
    ['lunatone', 'rock/psychic'], ['solrock', 'rock/psychic'],
    ['barboach', 'water/ground'], ['whiscash', 'water/ground'],
    ['corphish', 'water'], ['crawdaunt', 'water/dark'],
    ['baltoy', 'ground/psychic'], ['claydol', 'ground/psychic'],
    ['lileep', 'rock/grass'], ['cradily', 'rock/grass'],
    ['anorith', 'rock/bug'], ['armaldo', 'rock/bug'],
    ['igglybuff', 'normal'], ['jigglypuff', 'normal'], ['wigglytuff', 'normal'],
    ['feebas', 'water'], ['milotic', 'water'],
    ['castform', 'normal'],
    ['staryu', 'water'], ['starmie', 'water/psychic'],
    ['kecleon', 'normal'],
    ['shuppet', 'ghost'], ['banette', 'ghost'],
    ['duskull', 'ghost'], ['dusclops', 'ghost'],
    ['tropius', 'grass/flying'], ['chimecho', 'psychic'], ['absol', 'dark'],
    ['vulpix', 'fire'], ['ninetales', 'fire'],
    ['pichu', 'electric'], ['pikachu', 'electric'], ['raichu', 'electric'],
    ['psyduck', 'water'], ['golduck', 'water'],
    ['wynaut', 'psychic'], ['wobbuffet', 'psychic'],
    ['natu', 'psychic/flying'], ['xatu', 'psychic/flying'],
    ['girafarig', 'normal/psychic'],
    ['phanpy', 'ground'], ['donphan', 'ground'],
    ['pinsir', 'bug'], ['heracross', 'bug/fighting'],
    ['rhyhorn', 'ground/rock'], ['rhydon', 'ground/rock'],
    ['snorunt', 'ice'], ['glalie', 'ice'],
    ['spheal', 'ice/water'], ['sealeo', 'ice/water'], ['walrein', 'ice/water'],
    ['clamperl', 'water'], ['huntail', 'water'], ['gorebyss', 'water'],
    ['relicanth', 'water/rock'], ['corsola', 'water/rock'],
    ['chinchou', 'water/electric'], ['lanturn', 'water/electric'],
    ['luvdisc', 'water'],
    ['horsea', 'water'], ['seadra', 'water'], ['kingdra', 'water/dragon'],
    ['bagon', 'dragon'], ['shelgon', 'dragon'], ['salamence', 'dragon/flying'],
    ['beldum', 'steel/psychic'], ['metang', 'steel/psychic'], ['metagross', 'steel/psychic'],
    ['regirock', 'rock'], ['regice', 'ice'], ['registeel', 'steel'],
    ['latias', 'dragon/psychic'], ['latios', 'dragon/psychic'],
    ['kyogre', 'water'], ['groudon', 'ground'], ['rayquaza', 'dragon/flying'],
    ['jirachi', 'steel/psychic'], ['deoxys', 'psychic']
  ];

  G.HOENN_DEX = DEX.map(function (e) { return e[0]; });   // ordered keys (#1..#202)
  G.HOENN_NO = {};                                         // key -> Hoenn number
  G.HOENN_TYPES = {};                                      // key -> [types] (truth)
  for (var i = 0; i < DEX.length; i++) {
    G.HOENN_NO[DEX[i][0]] = i + 1;
    G.HOENN_TYPES[DEX[i][0]] = DEX[i][1].split('/');
  }
})();
