'use strict';

var path = require('../path');
var isNil = require('../../type/is-nil');
var compose = require('../../function/compose');
var always = require('../../function/always');
var identity = require('../../function/identity');
var tap = require('../../list/tap');
var ifElse = require('../../logic/ifElse');

module.exports = function (defaultValue, pathList, obj) {
    return compose(ifElse(isNil, always(defaultValue), identity), path(pathList))(obj);
};