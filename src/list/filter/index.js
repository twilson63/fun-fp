const reduce = require('../reduce')

module.exports = (fn, array) => reduce((acc, value) =>
  fn(value) ? [...acc, value] : acc , [], array
)
