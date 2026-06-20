// pokemon-gen3 — sprites_config.js
// Configures WHERE the engine loads each creature sprite from, by NATIONAL DEX
// NUMBER. No art is bundled in this repo. At boot the loader requests an image
// per species and falls back to a numbered placeholder if it can't be fetched.
//
// Two sources, tried in order (preferRemote decides which is first):
//   - LOCAL : files you drop in assets/sprites/pokemon/ (front/<dex>.png, ...)
//   - REMOTE: a public sprite database URL (default below)
//
// DEFAULT remote source: the PokeAPI sprite set (Gen 3 / Emerald front sprites)
// served via the jsDelivr CDN, keyed by national dex number. These are official,
// copyrighted creature designs hosted by the community — using them is your
// choice. To disable remote loading, set `remoteBase: ''` (then it uses your
// local files, or placeholders).

(function () {
  G.SPRITE_CFG = {
    // --- your own local files (optional) ---
    localBase:  'assets/sprites/pokemon/',
    localFront: 'front/{dex}.png',
    localBack:  'back/{dex}.png',
    localIcon:  'icon/{dex}.png',
    localShiny: 'shiny/{dex}.png',

    // --- public remote source (Gen 3 Emerald sprites via jsDelivr CDN) ---
    remoteBase:  'https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-iii/emerald/',
    remoteFront: '{dex}.png',
    remoteBack:  'back/{dex}.png',   // not present in this Gen 3 set -> loader auto-flips the front
    remoteIcon:  '{dex}.png',
    remoteShiny: 'shiny/{dex}.png',  // shiny variant (lazy-loaded on demand)

    preferRemote: true,   // true => try the remote source first, local as fallback

    pad: 0,               // zero-pad {dex} to N digits (PokeAPI uses unpadded ids, so 0)
    box: 64,              // sprite box; Gen 3 battlers are 64x64
    crossOrigin: 'anonymous'  // remote host must send CORS headers (jsDelivr does)
  };

  // ----------------------------------------------------------------------
  // TRAINER + player sprites (battle portraits). Same idea as creatures: the
  // engine ships hand-drawn baked art (always the fallback), but if you supply
  // a real image per key it is loaded at runtime and drawn instead. NO trainer
  // art is bundled here. Keys are the G.ART names the battle uses, e.g.
  // 'trainer_bram' (Roxanne), 'trainer_aqua' (Team Aqua), 'trainer_player_back'.
  // See assets/sprites/trainers/README.txt for the full key list.
  //
  // For the DEPLOYED site to show them, remoteBase must point at a CORS-enabled
  // host (your own GitHub repo via jsDelivr, an image host, etc.) — local files
  // only show when you run the game locally. There is no stable public CDN of
  // Gen-III trainer rips, so this is left empty by default (baked art shows).
  G.TRAINER_CFG = {
    localBase:  'assets/sprites/trainers/',
    localFile:  '{key}.png',
    // Public trainer-sprite library: Pokémon Showdown's set. Each art key maps to
    // a Showdown filename below; anything missing or unmapped just keeps the
    // hand-drawn baked art. To disable, set remoteBase: ''.
    // NOTE: this host doesn't send CORS headers, so crossOrigin is left off — the
    // images still load and draw; only the optional transparent-margin trim is
    // skipped (Showdown sprites are already tightly framed).
    remoteBase: 'https://play.pokemonshowdown.com/sprites/trainers/',
    remoteFile: '{name}.png',
    preferRemote: true,
    keyMap: {
      trainer_youngster: 'youngster', trainer_lass: 'lass', trainer_hiker: 'hiker',
      trainer_ace: 'acetrainer',
      trainer_bram: 'roxanne', trainer_maris: 'brawly', trainer_tess: 'wattson',
      trainer_vesper: 'flannery', trainer_norman: 'norman', trainer_winona: 'winona',
      trainer_tate: 'tate', trainer_wallace: 'wallace', trainer_steven: 'steven',
      trainer_sidney: 'sidney', trainer_phoebe: 'phoebe-gen3', trainer_glacia: 'glacia',
      trainer_drake: 'drake-gen3', trainer_kai: 'brendan',
      trainer_aqua: 'aquagrunt', trainer_archie: 'archie-gen6'
    },
    box: 64,                   // portraits fit into a 64-tall box, bottom-anchored
    crossOrigin: ''            // host has no CORS; load uncredentialed (no trim)
  };

  // Candidate URLs for a trainer/player sprite key, in priority order. Remote uses
  // the mapped Showdown name; local uses the raw key (assets/sprites/trainers/).
  G.trainerSpriteUrl = function (key) {
    var cfg = G.TRAINER_CFG, urls = [];
    var name = (cfg.keyMap && cfg.keyMap[key]) || null;
    function addRemote() { if (cfg.remoteBase && name) urls.push(cfg.remoteBase + (cfg.remoteFile || '{name}.png').replace('{name}', name)); }
    function addLocal() { if (cfg.localBase) urls.push(cfg.localBase + (cfg.localFile || '{key}.png').replace('{key}', key)); }
    if (cfg.preferRemote) { addRemote(); addLocal(); } else { addLocal(); addRemote(); }
    return urls;
  };

  // Build the ordered list of candidate URLs for a sprite (front|back|icon).
  G.spriteUrl = function (which, dexId) {
    var cfg = G.SPRITE_CFG;
    var dex = String(dexId);
    if (cfg.pad > 0) while (dex.length < cfg.pad) dex = '0' + dex;
    var cap = which.charAt(0).toUpperCase() + which.slice(1); // Front | Back | Icon
    var localTpl = cfg['local' + cap] || cfg.localFront;
    var remoteTpl = cfg['remote' + cap] || cfg.remoteFront;
    var urls = [];
    function add(base, tpl) { if (base && tpl) urls.push(base + tpl.replace('{dex}', dex)); }
    if (cfg.preferRemote) { add(cfg.remoteBase, remoteTpl); add(cfg.localBase, localTpl); }
    else { add(cfg.localBase, localTpl); add(cfg.remoteBase, remoteTpl); }
    return urls;
  };
})();
