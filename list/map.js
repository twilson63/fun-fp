const reduce = require('./reduce')

module.exports = function (fn, array) {
  return reduce(function (acc, value) {
    acc[acc.length] = fn.call(null, value)
    return acc
  }, [], array)
}
