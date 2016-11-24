const reverse = require('../../list/reverse')
const reduce = require('../../list/reduce')

module.exports = function (...fns) {
  return value => reduce((acc, fn) => {
    return fn(acc)
  }, value, reverse(fns))
}
