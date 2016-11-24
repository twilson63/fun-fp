module.exports = function (iterator) {
  return function (fn, list) {
    let idx = 0
    const origFn = fn
    fn = function () {
      const result = origFn.apply(null, [arguments[0], idx])
      idx += 1
      return result
    }
    return iterator.apply(null, [fn, list])
  }
}
