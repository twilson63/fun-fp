const test = require('tape')
const init = require('./')

test('init', t => {

  t.deepEquals([4,5,6], init([4,5,6,7]))

  t.deepEquals(init(['one','two', 'three']),['one', 'two'])

  t.end()
})
