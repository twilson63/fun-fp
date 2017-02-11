const test = require('tape')
const tail = require('./')

test('tail', t => {
  t.deepEquals(tail([4, 5, 6, 7]), [5, 6, 7])

  t.deepEquals(tail(['one', 'two', 'three']), ['two', 'three'])

  t.end()
})
