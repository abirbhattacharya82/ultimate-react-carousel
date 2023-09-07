"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Carousel.css");
var _SliderWrapper = _interopRequireDefault(require("./SliderWrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Carousel() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Carousel"
  }, /*#__PURE__*/_react["default"].createElement(_SliderWrapper["default"], {
    images: []
  }));
}
;
var _default = Carousel;
exports["default"] = _default;