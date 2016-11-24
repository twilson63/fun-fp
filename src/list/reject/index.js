const reduce = require('../reduce')

module.exports = (fn, list) =>
  reduce(
    (acc, value) => !fn(value) ? [...acc, value] : acc
    , [], list
  )
