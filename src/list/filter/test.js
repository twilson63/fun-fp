const test = require('tape')
const filter = require('./')

test('filter', t => {
  const answer = filter(function (value) {
    return value === 1 ? true : false
  }, [1,2,3,4])

  t.deepEquals([1], answer)
  t.deepEquals([2,4], filter(a => a % 2 === 0, [1,2,3,4]))
  t.end()
})
