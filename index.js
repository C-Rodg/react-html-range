"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t--slider-value: 10;\n\tdisplay: block;\n\twidth: 100%;\n\tappearance: none;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&::-webkit-slider-runnable-track,\n\t&::-webkit-slider-thumb {\n\t\tappearance: none;\n\t}\n\n\t&::-webkit-slider-thumb {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tborder-radius: 50%;\n\t\tmargin-top: -9px;\n\t\tbackground: #999;\n\t\tborder: 3px solid #fff;\n\t}\n\n\t&::-webkit-slider-runnable-track {\n\t\tborder-radius: 2px;\n\t\theight: 3px;\n\t\tbackground: linear-gradient(\n\t\t\tto right #00697b calc(var(--slider-value) * 1%),\n\t\t\t#e0e0e0 0\n\t\t);\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 500;\n\tfont-size: 1rem;\n"]);

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

// Styles
var RangeWrapper = _styledComponents["default"].div(_templateObject());

var RangeLabel = _styledComponents["default"].label(_templateObject2());

var RangeInput = _styledComponents["default"].input(_templateObject3()); // Component


function HtmlRange(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$min = _ref.min,
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
  var rangeElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var inputEl = rangeElement.current;
    var inputMin = inputEl.getAttribute('min');
    var inputMax = inputEl.getAttribute('max');
    var inputValue = inputEl.value;
    var actualized = (inputMax - inputMin) / 100;
    inputEl.style.setProperty('--slider-value', (inputValue - inputMin) / actualized);
  }, [value]);
  return _react["default"].createElement(RangeWrapper, {
    className: "HtmlRange"
  }, _react["default"].createElement(RangeLabel, {
    htmlFor: name
  }, label), _react["default"].createElement(RangeInput, {
    name: name,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: onInputChange,
    ref: rangeElement
  }));
}

var _default = HtmlRange;
exports["default"] = _default;
