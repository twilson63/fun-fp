const test = require('tape')
const gte = require('./')

test('greaterOrEqual', t => {
  t.ok(gte(5, 3))
	t.ok(gte(5, 5))
  t.notOk(gte(5, 7))
  t.end()
})
