const over = require('../over')
const curry = require('../../function/curry')

module.exports = curry((lens, v, x) => over(lens, _ => v, x))
