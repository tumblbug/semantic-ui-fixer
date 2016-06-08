import chai, { assert } from "chai"
import postcss from "postcss"
import suf from "../index.js" 

let checkEqual = (output, input, opts) => {
	let processor = postcss([ suf(opts) ]);
	assert.equal(
		output,
		processor
		.process(input)
		.css
		.replace(/\n/g, " ")
		.replace(/\s\s+/g, " ")
	);
}

describe("semantic-ui-fixer", () => {
  it("converts attribute selectors to class selectors", () => {
    checkEqual(
      '.ui.column.grid > .eleven.wide.large.screen.column { a: 1}',
      '.ui.column.grid > [class*="eleven wide large screen"].column { a: 1}'
    );
    checkEqual(
      '.ui.column.grid > .eleven_wide_large_screen.column { a: 1}',
      '.ui.column.grid > [class*="eleven wide large screen"].column { a: 1}',
      {sep: "_"}
    );
    checkEqual(
      '.ui.computer.only.grid.grid.grid:not(.tablet) { a: 1 }',
      '.ui[class*="computer only"].grid.grid.grid:not(.tablet) { a: 1 }' 
    );
    checkEqual(
      '.ui.inverted.divided.grid:not(.vertically.divided) > .column:not(.row) { a: 1 }',
      '.ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row) { a: 1 }'
    );
    checkEqual(
      '.ui.test.multiple .attribute.selector { a: 1 }',
      '.ui[class*="test multiple"] [class*="attribute selector"] { a: 1 }'
    )
  });
})
