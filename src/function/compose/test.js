const test = require('tape')
const compose = require('./')

test('compose', t => {
  const answer = compose(
    v => 1 + v,
    v => 1 + v
  )(1)

  t.equals(3, answer)

  t.end()
})
