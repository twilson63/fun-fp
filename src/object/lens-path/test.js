const test = require('tape')
const lensPath = require('./')
const view = require('../view')
const set = require('../set')

test('lensPath', t => {
  const v = view(lensPath(['a']), {a: 1, b: 2})
  t.equals(v, 1)
  t.end()
})

test('lensPath with set', t => {
  const o = set(lensPath(['b']), 'test', {a: 1, b: 2})
  t.equals(o.b, 'test')
  t.end()
})
