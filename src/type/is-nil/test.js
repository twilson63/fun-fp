const test = require('tape')
const isNil = require('./')

test('is array', t => {
  t.ok(isNil(null))
  t.ok(isNil(undefined))

  t.notOk(isNil(0))
  t.notOk(isNil(-1))
  t.notOk(isNil(false))
  t.notOk(isNil([]))
  t.end()
})
