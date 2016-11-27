const test = require('tape')
const curry = require('./')

test('curry', t => {
  const f = curry(function (a,b,c) {
    return [a,b,c]
  })

  const g = f(1)(2)

  t.deepEquals([1,2,3], g(3))
  //
  // const c = f(1)
  // console.log(f(1)(2)(3))
  // console.log(f(1,2,3))
  t.end()
})
