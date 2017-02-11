const test = require('tape')
const tap = require('./')

test('tap', t => {
  const answer = tap(function (value) {
    return value + 1
  }, [1, 2, 3, 4])

  t.deepEquals([1, 2, 3, 4], answer)

  t.end()
})
