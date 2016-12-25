const test = require('tape')
const always = require('./')

test('ifElse', t => {
  const answer = always('yes')('blah')
  t.deepEquals('yes', answer)
  t.end()
})
