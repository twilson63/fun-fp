const addindex = require('../../function/addindex')
const filter = require('../filter')
const curry = require('../../function/curry')

module.exports = curry(
  addindex(filter)
)((v, i) => i !== 0)
