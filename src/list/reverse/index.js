const reduce = require('../reduce')
const concat = require('../concat')

module.exports = (list) =>
  reduce((acc, value) => concat([value], acc), [], list)
