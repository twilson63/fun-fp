const test = require('tape')
const { is } = require('../../')

test('is type', t => {
  t.ok(is(Object, {}))
  t.notOk(is(Object, null))

  t.ok(is(String, 'hello'))
  t.notOk(is(String, false))

  t.ok(is(Number, 2))
  t.notOk(is(Number, {}))

  t.ok(is(Boolean, false))
  t.notOk(is(Boolean, null))

  t.end()
})
