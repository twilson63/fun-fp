const test = require('tape')
const sum = require('./')

test('sum', t => {
  t.equals(sum([1,2,3]), 6)
  t.end()
})
