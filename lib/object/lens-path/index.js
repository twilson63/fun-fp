'use strict';

var path = require('../path');
var assocPath = require('../assoc-path');
var lens = require('../lens');

module.exports = function (k) {
  return lens(path(k), assocPath(k));
};