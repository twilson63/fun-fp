const curry = require('../../function/curry')
module.exports = curry((name, obj) => obj[name])
