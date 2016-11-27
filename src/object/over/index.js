const curry = require('../../function/curry')
module.exports = function () {
  const Identity = function (x) {
    return { value: x, map: function (fn) { return Identity(fn(x))}}
  }

  return curry((lens, fn, obj) => {
    return lens(function (y) { return Identity(fn(y))})(obj).value
  })
}()
