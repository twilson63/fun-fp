const prop = require('../prop')
const curry = require('../../function/curry')

module.exports = curry((defaultValue, key, obj) =>
  prop(key, obj) || defaultValue
)
