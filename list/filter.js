const reduce = require('./reduce')

module.exports = function (fn, array) {
  return reduce(function (acc, value) {
    fn.call(null, value) ? acc.push(value) : null
    return acc
  }, [], array)
}
