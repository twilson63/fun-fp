const test = require('tape')
const lensProp = require('../lens-prop')
const view = require('./')

test('view', t => {
  var result = view(lensProp('foo'), { foo: 'bar' })
  t.equals(result, 'bar')
  t.end()
})
