const reduce = require('../../list/reduce')
module.exports = list => reduce((acc, v) => acc + v, 0, list)
