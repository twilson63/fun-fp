const test = require('tape')
const set = require('./')
const lensProp = require('../lens-prop')
test('set', t => {
  const obj = {a: 1, b: 2}
  const obj2 = set(lensProp('b'), 3, obj)
  t.deepEquals(obj2, {a: 1, b: 3})
  t.end()
})
