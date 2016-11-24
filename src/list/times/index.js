module.exports = (fn, count) => {
  var list = []
  for (let i = 0; i < count; i++) {
    list[i] = fn(i)
  }
  return list
}
