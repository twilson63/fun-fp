const reduce = require('../../list/reduce')
const prop = require('../prop')
const is = require('../../type/is')

module.exports = (list, obj) =>
  reduce((acc, value) =>
    is(Object, acc) ? prop(value, acc) : acc
  , obj, list)
