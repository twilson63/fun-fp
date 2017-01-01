'use strict';

var curry = require('../../function/curry');
var head = require('../../list/head');
var tail = require('../../list/tail');
var propOr = require('../prop-or');
var assoc = require('../assoc');

var assocPath = module.exports = curry(function (path, value, obj) {
  if (path.length === 0) {
    return value;
  }
  var idx = head(path);

  if (path.length > 1) {
    var nextObj = propOr({}, idx, obj);
    value = assocPath(tail(path), value, nextObj);
  }
  return assoc(idx, value, obj);
});