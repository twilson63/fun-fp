const test = require('tape')
const filter = require('./')
const equals = require('../../relation/equals')

test('filter', t => {
  const answer = filter(equals(1), [1, 2, 3, 4])

  t.deepEquals([1], answer)
  t.deepEquals([2, 4], filter(a => a % 2 === 0, [1, 2, 3, 4]))
  t.end()
})
