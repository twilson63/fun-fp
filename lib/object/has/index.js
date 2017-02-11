"use strict";

module.exports = function (name, obj) {
  return Boolean(obj.hasOwnProperty(name));
};