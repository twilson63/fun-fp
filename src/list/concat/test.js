const test = require('tape')
const concat = require('./')

test('concat', t => {
  const answer = concat([1,2,3], [4,5,6], [7,8,9])

  t.deepEquals([1,2,3,4,5,6,7,8,9], answer)

  t.end()
})
