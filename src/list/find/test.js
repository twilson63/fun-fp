const test = require('tape')
const find = require('./')

test('find', t => {
  t.equals(2,find(v => v === 2, [1,2,3]))
  t.end()
})
