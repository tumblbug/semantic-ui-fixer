"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postcss = require("postcss");

var _postcss2 = _interopRequireDefault(_postcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function make_css_class(str) {
  var rx = /\[class\*="(.*)"\]/;
  var classname = "." + str.match(rx)[1].replace(/\s/g, "_");
  return str.replace(rx, classname);
}

function processRules(rule) {
  rule.selector = make_css_class(rule.selector);
}

module.exports = _postcss2.default.plugin("semantic-ui-fixer", function (opts) {
  return function (css) {
    opts = opts || {};
    css.walkRules(function (rule) {
      processRules(rule);
    });
  };
});