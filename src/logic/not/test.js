const test = require('tape')
const not = require('./')

test('not', t => {
  t.ok(not(!true))
  t.notOk(not(true))
  t.end()
})
