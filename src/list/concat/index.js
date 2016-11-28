const reduce = require('../reduce')

module.exports = function (...lists) {
  return reduce((acc, value) => {
    acc.push(...value)
    return acc
  }, [], lists)
}
