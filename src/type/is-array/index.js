const is = require('../is')

module.exports = list =>
  is(Object, list) && list.length > -1
