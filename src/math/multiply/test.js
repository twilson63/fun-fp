const test = require('tape')
const multiply = require('./')

test('multiply', t => {
  t.equals(multiply(3,2), 6)
  t.equals(multiply(4)(2), 8)
  t.end()
})
