const test = require('tape')
const lensProp = require('./')
const view = require('../view')
const set = require('../set')

test('lensProp', t => {
  const v = view(lensProp('a'), {a: 1, b: 2})
  t.equals(v, 1)
  t.end()
})

test('lensProp with set', t => {
  const o = set(lensProp('b'), 'test', {a: 1, b: 2})
  t.equals(o.b, 'test')
  t.end()
})
