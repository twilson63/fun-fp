// documentation: see (readme)
// test: set (test)
const add = require('../../math/add')
const inc = add(1)

module.exports = iterator => (origFn, list) => {
  let idx = -1
  const fn = v => {
    idx = inc(idx)
    return origFn(v, idx)
  }
  return iterator(fn, list)
}
