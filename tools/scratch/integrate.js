// One-shot integrator: splice the finalized turtle/eagle recipe bodies from the
// scratch files into tools/recipes.js, replacing the matching R.<key> = {...}
// blocks (brace-matched, comment/string-aware). Leaves all other recipes intact.
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const recipesPath = path.join(ROOT, 'tools', 'recipes.js');

// brace-match starting at the index of a '{' ; returns index of the matching '}'
function matchBrace(src, openIdx) {
  let depth = 0, i = openIdx;
  let inS = null, inLine = false, inBlock = false;
  for (; i < src.length; i++) {
    const c = src[i], n = src[i + 1];
    if (inLine) { if (c === '\n') inLine = false; continue; }
    if (inBlock) { if (c === '*' && n === '/') { inBlock = false; i++; } continue; }
    if (inS) { if (c === '\\') { i++; continue; } if (c === inS) inS = null; continue; }
    if (c === '/' && n === '/') { inLine = true; i++; continue; }
    if (c === '/' && n === '*') { inBlock = true; i++; continue; }
    if (c === '"' || c === "'" || c === '`') { inS = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return i; }
  }
  throw new Error('unbalanced braces from ' + openIdx);
}

// extract the {...} body following `<anchor>` (which ends right before the '{')
function extractBody(src, anchorRegex, label) {
  const m = anchorRegex.exec(src);
  if (!m) throw new Error('anchor not found: ' + label);
  const open = src.indexOf('{', m.index + m[0].length - 1);
  if (open < 0) throw new Error('no brace after anchor: ' + label);
  const close = matchBrace(src, open);
  return { start: open, end: close, body: src.slice(open, close + 1) };
}

function loadBodies(scratchFile, keys) {
  const src = fs.readFileSync(path.join(__dirname, scratchFile), 'utf8');
  const out = {};
  for (const k of keys) {
    const re = new RegExp('\\n\\s*' + k + '\\s*:\\s*\\{');
    out[k] = extractBody(src, re, scratchFile + ':' + k).body;
  }
  return out;
}

const turtle = loadBodies('turtle_final.js', ['sproutle', 'verdoise', 'gaiadome']);
const eagle = loadBodies('eagle_final.js', ['aquilet', 'streagle', 'torrentalon']);
const panther = loadBodies('pyranther_final.js', ['pyranther']);
const umbra = loadBodies('umbranther_final.js', ['umbranther']);
const ram = loadBodies('ram_final.js', ['bouldram', 'ferrobex']);
const bodies = Object.assign({}, turtle, eagle, panther, umbra, ram);

let recipes = fs.readFileSync(recipesPath, 'utf8');
for (const key of Object.keys(bodies)) {
  const re = new RegExp('R\\.' + key + '\\s*=\\s*\\{');
  const m = re.exec(recipes);
  if (!m) throw new Error('R.' + key + ' not found in recipes.js');
  const open = recipes.indexOf('{', m.index);
  const close = matchBrace(recipes, open);
  recipes = recipes.slice(0, open) + bodies[key] + recipes.slice(close + 1);
  console.log('spliced R.' + key + ' (' + bodies[key].length + ' chars)');
}

fs.writeFileSync(recipesPath, recipes);
console.log('wrote ' + recipesPath);
