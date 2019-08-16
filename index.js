"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tcolor: red;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RangeWrapper = _styledComponents["default"].div(_templateObject());

var RangeLabel = _styledComponents["default"].label(_templateObject2());

var RangeInput = _styledComponents["default"].input(_templateObject3());

function HtmlRange(_ref) {
  var _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 10 : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      onInputChange = _ref.onInputChange;
  return _react["default"].createElement(RangeWrapper, null, _react["default"].createElement(RangeLabel, null, label), _react["default"].createElement(RangeInput, {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: onInputChange
  }));
}

var _default = HtmlRange;
exports["default"] = _default;
