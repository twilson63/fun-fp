const test = require('tape')
const always = require('./')

test('always', t => {
  const answer = always('yes')('blah')
  t.equals('yes', answer)
  t.equals(always(0)(null), 0)
  t.equals(always([])(2).length, 0)
  t.end()
})
