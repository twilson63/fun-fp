const add = require('../../math/add')
const inc = add(1)

module.exports = iterator => (origFn, list) => {
  let idx = -1
  const fn = v => {
    idx = inc(idx)
    return origFn.apply(null, [v, idx])
  }
  return iterator.apply(null, [fn, list])
}
