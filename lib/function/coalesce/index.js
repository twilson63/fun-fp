'use strict';

var coalesce = module.exports = function (first) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    return typeof first !== 'undefined' ? first : coalesce.apply(undefined, rest.concat([null]));
};