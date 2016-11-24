const addIndex = require('../../function/addIndex')
const filter = require('../filter')
const curry = require('../../function/curry')

module.exports = curry(
  addIndex(filter)
)((v, i) => i !== 0)
