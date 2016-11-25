const test = require('tape')
const or = require('./')

test('or', t => {
  t.ok(or(true, true))
  t.ok(or(false, true))
  t.notOk(or(false, false))
  t.end()
})
