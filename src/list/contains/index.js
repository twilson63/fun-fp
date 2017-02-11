const curry = require('../../function/curry')
const equals = require('../../relation/equals')
const find = require('../find')

module.exports = curry((value, list) =>
  Boolean(find(equals(value), list)))
