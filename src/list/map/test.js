const test = require('tape')
const map  = require('./')

test('map', t => {
  const answer = map(function (value) {
    return value + 1
  }, [1,2,3,4])

  t.deepEquals([2,3,4,5], answer)

  t.end()
})
