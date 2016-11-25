const test = require('tape')
const and = require('./')

test('and', t => {
  t.ok(and(true, true))
  t.notOk(and(true, false))
  t.end()
})
