const test = require('tape')
const add = require('./')

test('add', t => {
  t.equals(add(3,2), 5)
  t.equals(add(4)(2), 6)
  t.end()
})
