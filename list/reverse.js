const reduce = require('./reduce')
const concat = require('./concat')

module.exports = function (list) {
  return reduce((acc, value) => concat([value], acc), [], list)
}
