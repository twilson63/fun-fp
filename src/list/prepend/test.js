const test = require('tape')
const prepend = require('./')

test('append', t => {
  const answer = prepend(4, [1, 2, 3])

  t.deepEquals([4, 1, 2, 3], answer)

  const append5 = prepend(5)

  t.deepEquals([5, 4, 1, 2, 3], append5(answer))
  t.end()
})
