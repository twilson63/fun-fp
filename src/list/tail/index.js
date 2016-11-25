const addindex = require('../../function/addindex')
const filter = require('../filter')
const curry = require('../../function/curry')

module.exports = list => addindex(filter)((v, i) => i !== 0, list)
