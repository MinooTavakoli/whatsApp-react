"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WhatsApp", {
  enumerable: true,
  get: function get() {
    return _ChatExtension.default;
  }
});
exports.default = void 0;

var _ChatExtension = _interopRequireDefault(require("./components/ChatExtension"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ChatExtension.default;
exports.default = _default;