"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapFlat = mapFlat;

var _toFlatArray = require("./toFlatArray");

function mapFlat(children, fn, maxDepth) {
  return (0, _toFlatArray.toFlatArray)(children, maxDepth).map(fn);
}