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
      '.ui.cards > .card .left_aligned_bottom { a: 1 }',
      '.ui.cards > .card [class*="left aligned bottom"] { a: 1 }'
    )
    checkEqual(
      '.ui.bottom_pointing.label:before { a: 1 }',
      '.ui[class*="bottom pointing"].label:before { a: 1 }'
    )
  });
})
