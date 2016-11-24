const is = require('../../type/is')

module.exports = obj =>
  is(Object, obj) ? Object.keys(obj) : []
