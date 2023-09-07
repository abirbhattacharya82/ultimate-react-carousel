"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function SliderWrapper(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Slider-Wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Slider"
  }, props.images.map(function (image, index) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      key: index,
      src: image,
      alt: "img".concat(index + 1),
      id: "img".concat(index + 1)
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Slider-Nav"
  }, props.images.map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: index,
      href: "#img".concat(index + 1)
    });
  })));
}
var _default = SliderWrapper;
exports["default"] = _default;