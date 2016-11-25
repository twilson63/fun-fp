"use strict";

module.exports = function (fn, count) {
  var list = [];
  for (var i = 0; i < count; i++) {
    list[i] = fn(i);
  }
  return list;
};