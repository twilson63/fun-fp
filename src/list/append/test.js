const test = require('tape')
const append = require('./')

test('append', t => {
  const answer = append(4, [1,2,3])

  t.deepEquals([1,2,3,4], answer)

  const append5 = append(5)

  t.deepEquals([1,2,3,4,5], append5(answer))
  t.end()
})
