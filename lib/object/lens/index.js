'use strict';

var curry = require('../../function/curry');

module.exports = curry(function (getter, setter) {
  return function (functorFn) {
    return function (target) {
      return functorFn(getter(target)).map(function (focus) {
        return setter(focus, target);
      });
    };
  };
});