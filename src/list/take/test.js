const test = require('tape')
const take = require('./')

test('take', t => {
  const answer = take(2,[1,2,3,4,5,6,7,8,9])
  t.deepEquals([1,2], answer)
  t.end()
})
