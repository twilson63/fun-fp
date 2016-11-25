const reduce = require('../reduce')
module.exports = (...args) =>
  reduce((acc, value) => [...acc, ...value], [], args)
