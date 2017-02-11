const test = require('tape')
const contains = require('./')

test('contains', t => {
  const answer = contains(4, [1, 2, 3])

  t.equals(answer, false)

  const contains5 = contains(5)

  t.equals(contains5([1, 2, 3, 5]), true)
  t.end()
})
