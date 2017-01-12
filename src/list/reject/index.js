const curry = require('../../function/curry')
const reduce = require('../reduce')

module.exports = curry((fn, list) =>
  reduce(
    (acc, value) => !fn(value) ? [...acc, value] : acc
    , [], list
  )
)
