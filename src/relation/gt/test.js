const test = require('tape')
const gt = require('./')

test('gt', t => {
  t.ok(gt(3, 1))
  t.notOk(gt(2, 3))
  t.end()
})
