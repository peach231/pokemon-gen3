// pokemon-gen3 — trainers.js
// Trainer roster (Gen 3 / Hoenn-flavored). party entries: { sp, level } — moves
// come from the species learnset. Rival parties use _starter/_starter2/_starter3
// placeholders resolved at battle time to the line that counters the player's
// starter. Trainer IDs are referenced by map NPCs, so they are kept stable.

(function () {
  var T = G.TRAINERS = {};
  function tr(id, def) { def.id = id; T[id] = def; }

  // ------------------------------------------------------------- rival -----
  tr('rival1', {
    name: 'Brendan', cls: 'Rival', sprite: 'trainer_kai', ai: 'basic', money: 200,
    party: [{ sp: '_starter', level: 5 }],
    intro: "Heading out already? Let's see what that starter can do!",
    defeat: 'Not bad. Mine just needs more training.', music: 'battle'
  });
  tr('rival2', {
    name: 'Brendan', cls: 'Rival', sprite: 'trainer_kai', ai: 'basic', money: 500,
    party: [{ sp: 'zigzagoon', level: 12 }, { sp: '_starter', level: 14 }],
    intro: "Perfect timing. I've been itching for a rematch!",
    defeat: 'Argh, so close! Next time for sure.', music: 'battle'
  });
  tr('rival3', {
    name: 'Brendan', cls: 'Rival', sprite: 'trainer_kai', ai: 'smart', money: 900,
    party: [{ sp: 'swellow', level: 22 }, { sp: 'lombre', level: 23 }, { sp: '_starter2', level: 25 }],
    intro: 'Two badges and a real team now. Show me yours!',
    defeat: 'You keep getting stronger. So will I.', music: 'battle'
  });
  tr('rival4', {
    name: 'Brendan', cls: 'Rival', sprite: 'trainer_kai', ai: 'smart', money: 1800,
    party: [{ sp: 'swellow', level: 34 }, { sp: 'magneton', level: 34 }, { sp: 'ludicolo', level: 35 }, { sp: '_starter3', level: 37 }],
    intro: 'The League is just ahead. One more battle before you go!',
    defeat: '...Go on. Become Champion. I’ll be right behind you.', music: 'battle'
  });

  // ------------------------------------------------------- early routes ----
  tr('r1_tom', { name: 'Youngster Tom', sprite: 'trainer_youngster', ai: 'basic', money: 60, party: [{ sp: 'poochyena', level: 3 }], intro: 'My shorts are comfy and my team is MIGHTY!', defeat: 'Mighty-ish. Mighty-adjacent.', music: 'battle' });
  tr('r1_ana', { name: 'Lass Ana', sprite: 'trainer_lass', ai: 'basic', money: 70, party: [{ sp: 'zigzagoon', level: 4 }], intro: 'We have been practicing all week!', defeat: 'Back to practice, I suppose.', music: 'battle' });

  tr('r2_ben', { name: 'Youngster Ben', sprite: 'trainer_youngster', ai: 'basic', money: 120, party: [{ sp: 'poochyena', level: 8 }, { sp: 'taillow', level: 8 }], intro: 'This route is MY turf!', defeat: 'Turf under renovation.', music: 'battle' });
  tr('r2_mia', { name: 'Lass Mia', sprite: 'trainer_lass', ai: 'basic', money: 120, party: [{ sp: 'zigzagoon', level: 9 }], intro: "Isn't my team just adorable?", defeat: 'Still adorable. Just not the winningest.', music: 'battle' });
  tr('r2_cliff', { name: 'Hiker Cliff', sprite: 'trainer_hiker', ai: 'basic', money: 160, party: [{ sp: 'geodude', level: 9 }, { sp: 'machop', level: 10 }], intro: 'HAH! I found these rocks myself!', defeat: 'The rocks need more seasoning.', music: 'battle' });

  // ------------------------------------------------------ petalburg woods --
  tr('vf_iggy', { name: 'Bug Catcher Iggy', sprite: 'trainer_youngster', ai: 'basic', money: 150, party: [{ sp: 'wurmple', level: 10 }, { sp: 'silcoon', level: 10 }, { sp: 'cascoon', level: 11 }], intro: 'Bugs! Bugs! BUGS!', defeat: 'Bugs...', music: 'battle' });
  tr('vf_fern', { name: 'Lass Fern', sprite: 'trainer_lass', ai: 'basic', money: 150, party: [{ sp: 'shroomish', level: 12 }], intro: 'The forest shares its secrets with me.', defeat: 'It kept that one to itself.', music: 'battle' });
  tr('vf_orin', { name: 'Ace Orin', sprite: 'trainer_ace', ai: 'basic', money: 220, party: [{ sp: 'beautifly', level: 13 }], intro: 'A Beautifly raised under the old canopy. Behold.', defeat: 'Beheld and beaten. Well fought.', music: 'battle' });

  // -------------------------------------------------- GYM 1: Roxanne (Rock)
  tr('gym1_bram', {
    name: 'Roxanne', cls: 'leader', sprite: 'trainer_bram', ai: 'smart', money: 1200,
    party: [{ sp: 'geodude', level: 11 }, { sp: 'nosepass', level: 13 }],
    intro: 'I am Roxanne, the Rustboro Gym Leader. I became a Leader so I might apply what I learned.',
    defeat: 'So... I lost. My rocks crumbled. You are wonderfully strong!',
    reward: { badge: 0, flag: 'badge1', text: 'Roxanne handed over the STONE BADGE!' },
    music: 'gym'
  });

  // ------------------------------------------------------------ route 3 ----
  tr('r3_lou', { name: 'Swimmer Lou', sprite: 'trainer_lass', ai: 'basic', money: 200, party: [{ sp: 'wingull', level: 15 }, { sp: 'marill', level: 15 }], intro: 'The tide brought me a challenger!', defeat: 'And the tide takes my pride right out.', music: 'battle' });
  tr('r3_gus', { name: 'Hiker Gus', sprite: 'trainer_hiker', ai: 'basic', money: 240, party: [{ sp: 'geodude', level: 15 }, { sp: 'graveler', level: 16 }], intro: 'Coastal rocks are the chewiest!', defeat: 'Chewed up and spat out, huh.', music: 'battle' });
  tr('r3_zee', { name: 'Youngster Zee', sprite: 'trainer_youngster', ai: 'basic', money: 200, party: [{ sp: 'magnemite', level: 15 }, { sp: 'electrike', level: 15 }], intro: 'My team glows in the dark!', defeat: 'Glow now, win later.', music: 'battle' });
  tr('r3_kym', { name: 'Battle Girl Kym', sprite: 'trainer_ace', ai: 'smart', money: 320, party: [{ sp: 'machop', level: 17 }], intro: 'Footwork. It always comes down to footwork.', defeat: 'You... have better footwork.', music: 'battle' });

  // ----------------------------------------------- GYM 2: Brawly (Fighting)
  tr('gym2_maris', {
    name: 'Brawly', cls: 'leader', sprite: 'trainer_maris', ai: 'smart', money: 2000,
    party: [{ sp: 'machop', level: 16 }, { sp: 'makuhita', level: 19 }],
    intro: 'Brawly of Dewford! A big wave is coming — ride it or be swept under!',
    defeat: 'Whoah! You rode the wave better than I did!',
    reward: { badge: 1, flag: 'badge2', text: 'Brawly handed over the KNUCKLE BADGE!' },
    music: 'gym'
  });

  // ----------------------------------------------------------- cave --------
  tr('hd_rok', { name: 'Hiker Rok', sprite: 'trainer_hiker', ai: 'basic', money: 280, party: [{ sp: 'geodude', level: 17 }, { sp: 'graveler', level: 18 }], intro: 'You hear that? The cave approves of me.', defeat: 'The cave is reconsidering.', music: 'battle' });
  tr('hd_nyx', { name: 'Ace Nyx', sprite: 'trainer_ace', ai: 'basic', money: 300, party: [{ sp: 'sableye', level: 18 }, { sp: 'duskull', level: 18 }], intro: 'The dark has teeth down here.', defeat: 'And you pulled them. Impressive.', music: 'battle' });
  tr('hd_moe', { name: 'Youngster Moe', sprite: 'trainer_youngster', ai: 'basic', money: 240, party: [{ sp: 'aron', level: 17 }, { sp: 'whismur', level: 18 }], intro: 'I got lost three days ago. Fight me anyway!', defeat: 'Worth it. Which way is out?', music: 'battle' });

  // --------------------------------------------- GYM 3: Wattson (Electric)
  tr('gym3_tess', {
    name: 'Wattson', cls: 'leader', sprite: 'trainer_tess', ai: 'smart', money: 2900,
    party: [{ sp: 'electrike', level: 22 }, { sp: 'magnemite', level: 23 }, { sp: 'manectric', level: 26 }],
    intro: 'Wahahahah! I am Wattson of Mauville! My electric creatures will give you a SHOCK!',
    defeat: 'Wahahah! You zapped me good! Take this!',
    reward: { badge: 2, flag: 'badge3', text: 'Wattson handed over the DYNAMO BADGE!' },
    music: 'gym'
  });

  // ------------------------------------------------------------ route 4 ----
  tr('r4_tia', { name: 'Lass Tia', sprite: 'trainer_lass', ai: 'basic', money: 360, party: [{ sp: 'plusle', level: 23 }, { sp: 'minun', level: 24 }], intro: 'Sparkles ARE a strategy!', defeat: 'Sparkles, regroup!', music: 'battle' });
  tr('r4_vin', { name: 'Youngster Vin', sprite: 'trainer_youngster', ai: 'basic', money: 340, party: [{ sp: 'seviper', level: 23 }, { sp: 'gulpin', level: 24 }], intro: 'Careful. My team bites AND stings.', defeat: 'They also lose, apparently.', music: 'battle' });
  tr('r4_hank', { name: 'Hiker Hank', sprite: 'trainer_hiker', ai: 'basic', money: 380, party: [{ sp: 'numel', level: 25 }], intro: 'Me and Numel dug this road!', defeat: 'Back to the shovel.', music: 'battle' });
  tr('r4_lux', { name: 'Ace Lux', sprite: 'trainer_ace', ai: 'smart', money: 480, party: [{ sp: 'manectric', level: 25 }, { sp: 'linoone', level: 26 }], intro: 'Style and substance. I brought both.', defeat: 'Substance defeated. Style intact.', music: 'battle' });

  // ------------------------------------------------- GYM 4: Flannery (Fire)
  tr('gym4_vesper', {
    name: 'Flannery', cls: 'leader', sprite: 'trainer_vesper', ai: 'smart', money: 4100,
    party: [{ sp: 'numel', level: 28 }, { sp: 'torkoal', level: 31 }, { sp: 'camerupt', level: 34 }],
    intro: "I'm Flannery, Leader of Lavaridge! I'll show you the hot-blooded power I've trained up!",
    defeat: '...I tried too hard to act tough. You beat me fair and square.',
    reward: { badge: 3, flag: 'badge4', text: 'Flannery handed over the HEAT BADGE!' },
    music: 'gym'
  });

  // --------------------------------------- ELITE FOUR (the Summit gauntlet)
  tr('sp_rex', {
    name: 'Sidney', cls: 'Elite Four', sprite: 'trainer_ace', ai: 'smart', money: 5600,
    party: [{ sp: 'mightyena', level: 42 }, { sp: 'cacturne', level: 42 }, { sp: 'sharpedo', level: 43 }, { sp: 'crawdaunt', level: 44 }, { sp: 'absol', level: 46 }],
    intro: "I'm Sidney of the Elite Four. I like that look you're giving me. Let's go!",
    defeat: 'Well, listen to what the loser has to say. You won fair and square.', music: 'champion'
  });
  tr('sp_isa', {
    name: 'Phoebe', cls: 'Elite Four', sprite: 'trainer_ace', ai: 'smart', money: 5800,
    party: [{ sp: 'duskull', level: 43 }, { sp: 'banette', level: 44 }, { sp: 'sableye', level: 45 }, { sp: 'dusclops', level: 46 }],
    intro: "I'm Phoebe of the Elite Four. My ghosts and I trained on Mt. Pyre. Ready?",
    defeat: 'Oh, darn. I lost. There must be a reason you grew so strong.', music: 'champion'
  });
  tr('sp_olm', {
    name: 'Glacia', cls: 'Elite Four', sprite: 'trainer_hiker', ai: 'smart', money: 6000,
    party: [{ sp: 'snorunt', level: 44 }, { sp: 'sealeo', level: 45 }, { sp: 'glalie', level: 46 }, { sp: 'walrein', level: 48 }],
    intro: "I am Glacia of the Elite Four. Show me — burn through my icy cold with your passion!",
    defeat: 'You and your creatures... how hot your spirits burn! Wonderful.', music: 'champion'
  });
  tr('sp_ada', {
    name: 'Drake', cls: 'Elite Four', sprite: 'trainer_ace', ai: 'smart', money: 6400,
    party: [{ sp: 'shelgon', level: 46 }, { sp: 'altaria', level: 47 }, { sp: 'flygon', level: 48 }, { sp: 'salamence', level: 50 }],
    intro: 'I am Drake of the Elite Four! Do you have what it takes to command dragons? Show me!',
    defeat: 'Superb! You deserve to face the Champion now.', music: 'champion'
  });

  // ------------------------------------------------------------ champion ---
  tr('champion', {
    name: 'Champion Steven', cls: 'champion', sprite: 'trainer_aldric', ai: 'smart', money: 12000,
    party: [
      { sp: 'claydol', level: 47 }, { sp: 'cradily', level: 48 },
      { sp: 'armaldo', level: 48 }, { sp: 'golem', level: 49 },
      { sp: 'aggron', level: 50 }, { sp: 'metagross', level: 52 }
    ],
    intro: "I'm Steven, the Champion. I collect rare stones... and challengers worth remembering. Come!",
    defeat: 'I, the Champion, fall in defeat... That was an excellent battle. A new Champion is born!',
    music: 'champion'
  });

  // starter-counter cycle: rival takes the type-advantaged starter.
  // player grass(treecko) -> fire(torchic); fire -> water(mudkip); water -> grass(treecko)
  var COUNTER = { treecko: 'torchic', torchic: 'mudkip', mudkip: 'treecko' };
  var STAGE2 = { torchic: 'combusken', mudkip: 'marshtomp', treecko: 'grovyle' };
  var STAGE3 = { torchic: 'blaziken', mudkip: 'swampert', treecko: 'sceptile' };

  G.trainerParty = function (def) {
    var starterKey = G.flags.starter || 'treecko';
    var rivalBase = COUNTER[starterKey] || 'torchic';
    return def.party.map(function (p) {
      var key = p.sp;
      if (key === '_starter') key = rivalBase;
      if (key === '_starter2') key = STAGE2[rivalBase];
      if (key === '_starter3') key = STAGE3[rivalBase];
      return G.makeMon(key, p.level);
    });
  };
})();
