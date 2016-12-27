const curry = require('../../function/curry')

module.exports = curry(function(predicate,onTrue,onFalse){
  return function(x){
    return predicate(x) ? onTrue(x) : onFalse(x)
  }
})
