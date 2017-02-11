const reduce = require('../../list/reduce')

module.exports = (...list) => reduce((a, b) => a * b, 1, list)
