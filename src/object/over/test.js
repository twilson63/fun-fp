const test = require('tape')
const view = require('../view')
const lensProp = require('../lens-prop')
const over = require('./')

test('lensProp', t => {
  const v = view(lensProp('b'), {a: 1, b: 2})
  t.equals(v, 2)
  t.end()
})

test('over', t => {
  const o = over(lensProp('a'), function (v) {
    console.log(v)
    return 3
  }, {a: 1, b: 2})
  console.log(o)
  t.equals(o.a, 3)
  t.end()
})
