const test = require('tape')
const identity = require('./')

test('identity', t => {
  t.equals(1, identity(1))
  t.end()
})
