"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postcss = require("postcss");

var _postcss2 = _interopRequireDefault(_postcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var rx = /\[class\*="([\w\s]*)"\]/;

  if (rx.test(selector)) {
    var classname = "." + selector.match(rx)[1].replace(/\s/g, sep);
    return convertSelector(selector.replace(rx, classname));
  }

  return selector;
}

/*
  * Processes CSS rules
  * */
function processRules(rule, sep) {
  rule.selector = convertSelector(rule.selector, sep);
}

module.exports = _postcss2.default.plugin("semantic-ui-fixer", function (opts) {
  return function (css) {
    opts = opts || {};

    css.walkRules(function (rule) {
      processRules(rule, opts.sep);
    });
  };
});