const test = require('tape')
const lt = require('./')

test('lt', t => {
  t.ok(lt(1, 3))
  t.notOk(lt(4, 3))
  t.end()
})
