module.exports = function (fn, acc, list) {
  for (var index = 0; index < list.length; index++) {
    acc = fn(acc, list[index])
  }
  return acc
}
