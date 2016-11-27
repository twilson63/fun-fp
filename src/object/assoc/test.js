const test = require('tape')
const assoc = require('./')

test('assoc', t => {
  const obj = assoc('c', 2, { a: 1, b: 3})
  t.deepEquals(obj, {a: 1, b: 3, c: 2})

  const t2 = assoc('b')
  t.deepEquals(t2(2, {a: 1}), {a: 1, b: 2})

  const t3 = assoc('b', 4)
  t.deepEquals(t3({a: 1}), {a: 1, b: 4})

  t.end()
})
