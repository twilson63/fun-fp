const test = require('tape')
const gte = require('./')

test('gte', t => {
  t.ok(gte(5, 3))
  t.ok(gte(5, 5))
  t.notOk(gte(5, 7))
  t.end()
})
