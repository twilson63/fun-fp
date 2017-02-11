const test = require('tape')
const head = require('./')

test('head', t => {
  const answer = head([1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.deepEquals(1, answer)
  t.end()
})
