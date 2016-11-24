const test = require('tape')
const byIndex = require('./')

test('byIndex', t => {
  t.equals(4, byIndex(1, [1, 4]))
  const first = byIndex(0)
  t.equals(1, first([1,3]))
  t.end()
})
