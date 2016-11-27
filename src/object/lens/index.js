const curry = require('../../function/curry')

module.exports = curry((getter, setter) =>
  functorFn =>
    target => {
      return functorFn(getter(target)).map(focus => setter(focus, target))
    }

)
