const test = require('tape')
const contains = require('./')

test('contains', t => {
  const answer = contains(4, [1,2,3])

  t.equals(false, answer)

  const contains5 = contains(5)

  t.equals(true, contains5([1,2,3,5]))
  t.end()
})
