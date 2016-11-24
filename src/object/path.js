const reduce = require('../list/reduce')
const prop = require('./prop')
const is = require('../type/is')

module.exports = function (list, obj) {
  return reduce(function (acc, value) {
    return is(Object, acc) ? prop(value, acc) : acc
  }, obj, list)
}
