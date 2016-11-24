const test = require('tape')
const reject = require('./')

test('reject', t => {
  const answer = reject(function (value) {
    return value === 1 ? true : false
  }, [1,2,3,4])

  t.deepEquals([2,3,4], answer)
  t.deepEquals([1,3], reject(a => a % 2 === 0, [1,2,3,4]))
  t.end()
})
