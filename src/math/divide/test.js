const test = require('tape')
const divide = require('./')

test('divide', t => {
  t.equals(divide(10, 2), 5)
  t.equals(divide(4)(2), 2)
  t.end()
})
