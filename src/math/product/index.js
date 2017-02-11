const reduce = require('../../list/reduce')
const curry = require('../../function/curry')

module.exports = (...list) => reduce((a, b) => a * b, 1, list)
