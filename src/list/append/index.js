const curry = require('../../function/curry')
const concat = require('../concat')
module.exports = curry((value, list) => concat(list, [value]))
