const test = require('tape')
const flatten = require('./')

test('flatten', t => {
  t.deepEquals([1,2,3,4,5], flatten([[1,2], [3,4], [5]]))
  t.end()
})
