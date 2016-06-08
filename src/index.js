import postcss from "postcss"

/*
  * Converts an attribute selector into class selector
  * @param {String} selector 
  * @param {String} sep  
  * @return {String} 
  * @example
  * // returns '.ui.cards > .card .left_aligned_bottom'
  * convertSelector('.ui.cards > .card [class*="left aligned bottom"]');
  * */
function convertSelector(selector, sep) {
  sep = sep || ".";
  let rx = /\[class\*="([\w\s]*)"\]/;

  if (rx.test(selector)) {
    let classname = "." + selector.match(rx)[1].replace(/\s/g, sep);
    return convertSelector(selector.replace(rx, classname));
  }

  return selector;
}

/*
  * Processes CSS rules
  * */
function processRules(rule, sep) {
  rule.selector = convertSelector(rule.selector, sep) 
}

export default postcss.plugin("semantic-ui-fixer", (opts) => {
  return (css) => {
    opts = opts || {};

    css.walkRules((rule) => {
      processRules(rule, opts.sep)
    })
  }
}); 
