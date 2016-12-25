const curry = require('../../function/curry')

module.exports = curry((predicate,onTrue,onFalse) => {
  return x => {
    return predicate(x) ? onTrue(x) : onFalse(x)
  }
})
