const test = require('tape')
const subtract = require('./')

test('subtract', t => {
  t.equals(subtract(3, 1), 2)
  t.equals(subtract(4)(2), 2)
  t.end()
})
