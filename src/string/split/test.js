const test = require('tape')
const split = require('./')

test('invoker', t => {
  const answer = split('l','Alex')
  t.deepEquals(['A','ex'], answer)
  t.end()
})
