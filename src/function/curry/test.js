const test = require('tape')
const curry = require('./')

test('curry', t => {
  const f = curry(function (a,b,c) {
    return [a,b,c]
  })

  const g = f(1,2)

  t.deepEquals([1,2,3], g(3))
  t.end()
})
