const test = require('tape')
const remove = require('./')

test('remove', t => {
  const answer = remove(2, [1,2,3])

  t.deepEquals([1,3], answer)

  const remove5 = remove(5)

  t.deepEquals([1,2,3,4], remove5([1,2,3,4,5]))

  t.deepEquals([1,2,3], remove(5, [1,2,3]))
  t.end()
})
