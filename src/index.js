import postcss from "postcss"

function make_css_class(str) {
  var rx = /\[class\*="(.*)"\]/;
  var classname = "." + str.match(rx)[1].replace(/\s/g, "_");
  return str.replace(rx, classname);
}

function processRules(rule) {
  rule.selector = make_css_class(rule.selector) 
}

export default postcss.plugin("semantic-ui-fixer", (opts) => {
  return (css) => {
    opts = opts || {};
    css.walkRules((rule) => {
      processRules(rule)
    })
  }
}); 
