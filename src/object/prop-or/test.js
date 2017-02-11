const test = require('tape')
const propOr = require('./')

test('propOr', t => {
  t.equals(propOr('beep', 'foo', {}), 'beep')
  t.equals(propOr('beep', 'foo', { foo: 'bar' }), 'bar')
  t.end()
})
