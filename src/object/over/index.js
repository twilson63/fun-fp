const curry = require('../../function/curry')
module.exports = (function () {
  const Identity = (x) => (
    { value: x, map: (fn) => Identity(fn(x)) }
  )

  return curry((lens, fn, obj) => {
    return lens(function (y) { return Identity(fn(y)) })(obj).value
  })
}())
