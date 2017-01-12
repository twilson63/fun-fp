const curry = require('../../function/curry')
const equals = require('../../relation/equals')
const find = require('../find')

module.exports = curry((value, list) =>
  find(equals(value), list) ? true : false )
