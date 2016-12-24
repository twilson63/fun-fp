const test = require('tape')
const coalesce = require('./')

test('coalesce', t => {
  const answer = coalesce(undefined, false, 0)

  t.equals(false, answer)

  t.end()
})
