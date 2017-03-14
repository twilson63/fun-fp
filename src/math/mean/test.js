const test = require('tape')
const mean = require('./')

test('test 1 mean', t => {
  t.same(mean([1, 2, 3, 4, 5]), 3)
  var array = [22, 13, 1, 34, 8]
  t.same(mean(array), 15.6)
  t.same(mean([0]), 0)
  t.ok(isNaN(mean([])))
  t.end()
})
