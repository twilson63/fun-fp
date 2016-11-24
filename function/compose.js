const reverse = require('../list/reverse')

module.exports = function (...fns) {
  return value => reduce((acc, fn) => {
    return fn(acc)
  }, value, reverse(fns))
}
