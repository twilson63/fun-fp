const test = require('tape')
const invoker = require('./')

test('invoker', t => {
  const answer = invoker('slice')(0, 1, 'Hello Mate')
  t.deepEquals('H', answer)
  t.end()
})
