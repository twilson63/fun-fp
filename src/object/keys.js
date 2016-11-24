const is = require('../type/is')

module.exports = function (obj) {
  if (!is(Object, obj)) return []
  return Object.keys(obj)
}
