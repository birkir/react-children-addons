"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFlatArray = toFlatArray;

var _react = _interopRequireDefault(require("react"));

var _reactIs = require("react-is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function flattenChildren(children, maxDepth) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return _react.default.Children.toArray(children).reduce(function (acc, node) {
    if ((0, _reactIs.isFragment)(node) && depth < maxDepth) {
      acc.push.apply(acc, _toConsumableArray(flattenChildren(node.props.children, maxDepth, depth + 1)));
    } else {
      if (_react.default.isValidElement(node)) {
        acc.push(_react.default.cloneElement(node, {
          key: "".concat(depth, ".").concat(node.key)
        }));
      }
    }

    return acc;
  }, []);
}

function toFlatArray(children) {
  var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  return flattenChildren(children, maxDepth);
}