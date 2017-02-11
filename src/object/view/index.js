const curry = require('../../function/curry')

module.exports = (_ => {
  const Const = function (x) {
    return {
      value: x,
      map: function () {
        return this
      }
    }
  }

  return curry((lens, x) => lens(Const)(x).value)
})()
