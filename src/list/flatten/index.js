const reduce = require('../reduce')
module.exports = (list) =>
  reduce((acc, value) => [...acc, ...value], [], list)
