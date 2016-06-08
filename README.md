# Semantic UI fixer 
semantic-ui-fixer is a simple postcss plugin that converts Sementic UI attribute selectors into multiple class selectors.

## Example
Before:
```css
  /* ... */
  .ui.cards > .card [class*="left aligned bottom"] { a: 1 } 
  /* ... */
```
After:
```css
  /* ... */
  .ui.cards > .card .left.aligned.bottom { a: 1 }
  /* ... */
```

## Quick Start
1. Download this repo 
2. In the repo dir, type `sudo npm install`, then `sudo npm link`
3. In your project dir, type `sudo npm link semantic-ui-fixer`
4. In your gulpfile.js,

```js
// this requires postcss plugin. => `sudo npm install gulp-postcss --save-dev` first 
var postcss = require("gulp-postcss");
var suf = require("semantic-ui-fixer");

// in your build pipeline,
// ....
  .pipe(postcss([suf]))
// ....
```

## Extended Details
### seperator

```js
// in your build pipeline,
// ....
  .pipe(postcss([suf({sep: "__"})])) 
// ....
```

Before:
```css
  /* ... */
  .ui.cards > .card [class*="left aligned bottom"] { a: 1 } 
  /* ... */
```
After:
```css
  /* ... */
  .ui.cards > .card .left__aligned__bottom { a: 1 }
  /* ... */
```

