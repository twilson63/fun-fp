const curry = require('../../function/curry')

module.exports = curry((value, list) => [value, ...list])
