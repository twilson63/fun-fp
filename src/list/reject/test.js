const test = require('tape')
const reject = require('./')
const equals = require('../../relation/equals')

test('reject', t => {
  const answer = reject(equals(1), [1, 2, 3, 4])

  t.deepEquals(answer, [2, 3, 4])
  t.deepEquals(reject(a => a % 2 === 0, [1, 2, 3, 4]), [1, 3])
  t.end()
})
