"use strict";

module.exports = function (name, obj) {
  return obj.hasOwnProperty(name) ? obj[name] : null;
};