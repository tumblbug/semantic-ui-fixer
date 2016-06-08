# Semantic UI fixer 
attribute selectors(e.g `*=`) -> class selectors

# Basic Usages 
before:
```css
  .ui.cards > .card [class*="left aligned bottom"] { a: 1 } 
```
after:
```css
  .ui.cards > .card .left_aligned_bottom { a: 1 }
```

# Quick Start
1. Download this repository
2. In repo dir, type `sudo npm install`, then `sudo npm link`
3. In your project dir, type `sudo npm link semantic-ui-fixer`
4. In your gulpfile.js,

```js
// this requires postcss plugin. => `sudo npm install gulp-postcss --save-dev` first 
var postcss = require("gulp-postcss");
var suf = require("semantic-ui-fixer");

// in your build pipeline,
// ....
  .pipe(postcss(suf))
// ....
```
