const test = require('tape')
const reverse = require('./')

test('reverse', t => {
  const answer = reverse([1,2,3,4,5,6,7,8,9])

  t.deepEquals([1,2,3,4,5,6,7,8,9].reverse(), answer)

  t.end()
})
