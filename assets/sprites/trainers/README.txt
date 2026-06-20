TRAINER / PLAYER SPRITES — drop your own battle sprite images here (optional).
=============================================================================

The game ships with hand-drawn baked trainer art, which is ALWAYS the fallback.
If you supply an image for one of the keys below, it is loaded at runtime and
drawn instead — exactly like the creature sprites, and with NO art committed to
this repo (copyrighted; bring your own).

HOW IT WORKS
------------
At boot, for each key the engine tries to load:
    <remoteBase><key>.png   (if remoteBase is set in js/data/sprites_config.js)
    assets/sprites/trainers/<key>.png   (these local files)
On success it replaces that sprite; on failure it keeps the baked art.

A loaded image is trimmed and fit, bottom-anchored, into a 64px box, so any
source size works (Gen-III battle sprites are ~64x64).

IMPORTANT — the deployed (Vercel) site:
Local files here are NOT committed, so they only appear when you run the game
locally. For the live site to show real sprites, host them somewhere CORS-enabled
(your own GitHub repo via the jsDelivr CDN, an image host, etc.) and set
`remoteBase` in js/data/sprites_config.js. There is no stable public CDN of
Gen-III trainer rips, which is why remoteBase is empty by default.

KEYS (filename = <key>.png)
---------------------------
Generic classes (shared by many route/dungeon trainers — class-based, like RSE):
    trainer_youngster   Youngster / Bug Catcher
    trainer_lass        Lass / Picnicker / Swimmer (f)
    trainer_hiker       Hiker / Sailor / Ranger
    trainer_ace         Ace/Cooltrainer / Bird Keeper / Psychic / Elite Four

Named characters (currently SHARE a key — ask to split for distinct art):
    trainer_bram        Roxanne   (Rock gym)
    trainer_maris       Brawly    (Fighting gym)  + Winona (Flying gym)
    trainer_tess        Wattson   (Electric gym)
    trainer_vesper      Flannery  (Fire gym)      + Tate & Liza (Psychic gym)
    trainer_aldric      Norman (Normal gym) + Wallace (Water gym) + Champion Steven
    trainer_kai         Rival (Brendan)
    trainer_aqua        Team Aqua (grunts, Admin Reef, Boss Archie)

Player:
    trainer_player_back The player's back sprite, shown sending out a Pokemon.

(If you want each leader/champion to have a DISTINCT real sprite instead of a
shared one, ask and the shared keys can be split into per-character keys that
still fall back to the same baked art.)
