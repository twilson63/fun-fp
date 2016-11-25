const concat = require('../../list/concat')
const add = require('../../math/add')

module.exports = (fn) => {
  let n = fn.length
  let store = []

  const ifn = (...args) => {
    if (add(args.length, store.length) < n) {
      store = concat(store, args)
      return ifn
    }
    const result = fn.apply(null, concat(store, args))
    store = []
    return result
  }

  return ifn
}
