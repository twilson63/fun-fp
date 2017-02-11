const test = require('tape')
const lens = require('./')

test('lens', t => {
  lens((v, obj) => 1, (p, v, obj) => null)

  t.end()
})
