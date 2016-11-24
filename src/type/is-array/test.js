const test = require('tape')
const isArray = require('./')

test('is array', t => {
  t.ok(isArray([]))
  t.ok(isArray([1,2,3]))
  t.notOk(isArray(true))
  t.notOk(isArray({}))
  t.notOk(isArray("foo"))

  t.end()
})
