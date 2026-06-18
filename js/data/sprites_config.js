// pokemon-gen3 — sprites_config.js
// Configures WHERE the engine loads real creature sprite images from. The game
// itself ships no copyrighted creature art; you supply the sprite files (or
// point this at a sprite source you have rights to use) and they are loaded by
// NATIONAL DEX NUMBER at boot. Anything missing falls back to a numbered
// placeholder so the game always runs.
//
// File-name convention (default):
//   assets/sprites/pokemon/front/252.png      front, ~64x64, transparent bg
//   assets/sprites/pokemon/back/252.png        back  (optional; auto-flipped if absent)
//   assets/sprites/pokemon/icon/252.png        party/menu icon (optional)
// {dex} is the species' national dex id, zero-padded to `pad` digits (252 -> "252").
//
// To pull from a remote sprite set instead of local files, set `remoteBase` to a
// directory URL whose files are named the same way (front/{dex}.png, ...) and set
// `preferRemote: true`. Sourcing the assets is up to you.

(function () {
  G.SPRITE_CFG = {
    localBase:   'assets/sprites/pokemon/',   // root for local sprite files
    remoteBase:  null,                          // e.g. 'https://example.com/sprites/' (front/{dex}.png ...)
    preferRemote: false,                        // true => try remoteBase before localBase

    front: 'front/{dex}.png',
    back:  'back/{dex}.png',
    icon:  'icon/{dex}.png',

    pad: 3,        // zero-pad {dex} to this many digits ("1" -> "001"); 0 = no padding
    box: 64,       // logical sprite box (Gen 3 battlers are 64x64); all sprites fit here
    crossOrigin: 'anonymous'  // set on <img> when loading remoteBase (needs CORS-friendly host)
  };

  // Resolve a {dex} template against a numeric dex id, honoring `pad`.
  G.spriteUrl = function (which, dexId) {
    var cfg = G.SPRITE_CFG;
    var tpl = cfg[which] || cfg.front;
    var dex = String(dexId);
    if (cfg.pad > 0) while (dex.length < cfg.pad) dex = '0' + dex;
    var rel = tpl.replace('{dex}', dex);
    var bases = [];
    if (cfg.preferRemote && cfg.remoteBase) bases.push(cfg.remoteBase);
    if (cfg.localBase) bases.push(cfg.localBase);
    if (!cfg.preferRemote && cfg.remoteBase) bases.push(cfg.remoteBase);
    // primary URL + ordered fallbacks (loader tries each until one loads)
    return bases.map(function (b) { return b + rel; });
  };
})();
