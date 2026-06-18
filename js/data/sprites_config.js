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

    // --- public remote source (Gen 3 Emerald sprites via jsDelivr CDN) ---
    remoteBase:  'https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-iii/emerald/',
    remoteFront: '{dex}.png',
    remoteBack:  'back/{dex}.png',   // not present in this Gen 3 set -> loader auto-flips the front
    remoteIcon:  '{dex}.png',

    preferRemote: true,   // true => try the remote source first, local as fallback

    pad: 0,               // zero-pad {dex} to N digits (PokeAPI uses unpadded ids, so 0)
    box: 64,              // sprite box; Gen 3 battlers are 64x64
    crossOrigin: 'anonymous'  // remote host must send CORS headers (jsDelivr does)
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
