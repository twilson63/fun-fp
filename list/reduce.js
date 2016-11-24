module.exports = function (fn, acc, array) {
  for (var index = 0; index < array.length; index++) {
    acc = fn.call(null, acc, array[index])
  }
  return acc
}
