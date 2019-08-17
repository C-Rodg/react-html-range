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
  var data = _taggedTemplateLiteral(["\n    --slider-value: ", ";\n    --track-height: ", "\n\t--track-empty-color: ", ";\n\t--track-filled-color: ", ";\n\t--ball-color: ", ";\n\t--ball-size: ", ";\n\t--ball-border: ", ";\n\tdisplay: block;\n\twidth: 100%;\n\tappearance: none;\n\tborder-radius: 2px;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&::-webkit-slider-runnable-track,\n\t&::-webkit-slider-thumb {\n\t\tappearance: none;\n\t}\n\n\t&::-webkit-slider-thumb {\n\t\twidth: var(--ball-size);\n\t\theight: var(--ball-size);\n\t\tborder-radius: 50%;\n\t\tmargin-top: calc( ((var(--ball-size) / 2) * -1) + (var(--track-height) / 2)  );\n\t\tbackground: var(--ball-color);\n\t\tborder: var(--ball-border);\n\t}\n\n\t&::-webkit-slider-runnable-track {\n\t\tborder-radius: 2px;\n\t\theight: var(--track-height);\n\t\tbackground: linear-gradient(\n\t\t\tto right,\n\t\t\tvar(--track-filled-color) calc(var(--slider-value) * 1%),\n\t\t\tvar(--track-empty-color) 0\n\t\t);\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 500;\n\tfont-size: 1rem;\n\tmargin-bottom: 0.7rem;\n\tdisplay: block;\n\ttext-align: left;\n"]);

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

var RangeInput = _styledComponents["default"].input(_templateObject3(), function (props) {
  return props.value;
}, function (props) {
  return props.otherStyles && props.otherStyles.trackHeight ? props.otherStyles.trackHeight : '3px';
}, function (props) {
  return props.otherStyles && props.otherStyles.trackEmptyColor ? props.otherStyles.trackEmptyColor : '#e0e0e0';
}, function (props) {
  return props.otherStyles && props.otherStyles.trackFilledColor ? props.otherStyles.trackFilledColor : '#00697b';
}, function (props) {
  return props.otherStyles && props.otherStyles.ballColor ? props.otherStyles.ballColor : '#444';
}, function (props) {
  return props.otherStyles && props.otherStyles.ballSize ? props.otherStyles.ballSize : '20px';
}, function (props) {
  return props.otherStyles && props.otherStyles.ballBorder ? props.otherStyles.ballBorder : '3px solid #fff';
}); // Component


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
      onInputChange = _ref.onInputChange,
      _ref$styles = _ref.styles;
  _ref$styles = _ref$styles === void 0 ? {} : _ref$styles;
  var _ref$styles$wrapperSt = _ref$styles.wrapperStyles,
      wrapperStyles = _ref$styles$wrapperSt === void 0 ? {} : _ref$styles$wrapperSt,
      _ref$styles$labelStyl = _ref$styles.labelStyles,
      labelStyles = _ref$styles$labelStyl === void 0 ? {} : _ref$styles$labelStyl,
      _ref$styles$inputStyl = _ref$styles.inputStyles,
      inputStyles = _ref$styles$inputStyl === void 0 ? {} : _ref$styles$inputStyl,
      _ref$styles$otherStyl = _ref$styles.otherStyles,
      otherStyles = _ref$styles$otherStyl === void 0 ? {} : _ref$styles$otherStyl;
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
    className: "HtmlRange",
    style: wrapperStyles
  }, label && _react["default"].createElement(RangeLabel, {
    htmlFor: name,
    style: labelStyles
  }, label), _react["default"].createElement(RangeInput, {
    name: name,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: onInputChange,
    ref: rangeElement,
    style: inputStyles,
    otherStyles: otherStyles
  }));
}

var _default = HtmlRange;
exports["default"] = _default;
