const test = require('tape')
const lensProp = require('./')
const view = require('../view')

test('lensProp', t => {
  const v = view(lensProp('a'), {a: 1, b: 2})
  t.equals(v, 1)
  t.end()
})
