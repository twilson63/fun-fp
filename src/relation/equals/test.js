const test = require('tape')
const equals = require('./')

test('equals', t => {
  t.ok(equals(1, 1))
  t.ok(equals('a', 'a'))
  t.notOk(equals('a', 'b'))
  t.end()
})
