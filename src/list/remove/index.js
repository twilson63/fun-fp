const curry = require('../../function/curry')
const reject = require('../reject')
const equals = require('../../relation/equals')

module.exports = curry((value, list) =>
  reject(equals(value), list)
)
