const test = require('tape')
const init = require('./')

test('init', t => {
  t.deepEquals(init([4, 5, 6, 7]), [4, 5, 6])

  t.deepEquals(['one', 'two'], init(['one', 'two', 'three']))

  t.end()
})
