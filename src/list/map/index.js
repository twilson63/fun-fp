const reduce = require('../reduce')

module.exports = (fn, array) =>
  reduce((acc, value) => [...acc, fn(value)], [], array)
