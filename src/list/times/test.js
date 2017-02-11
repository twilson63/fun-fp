const test = require('tape')
const times = require('./')
const identity = require('../../function/identity')
test('times', t => {
  t.deepEquals([0, 1, 2, 3], times(identity, 4))

  t.end()
})
