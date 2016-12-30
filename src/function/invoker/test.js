const test = require('tape')
const invoker = require('./')

test('invoker', t => {
  const answer = invoker(1,'split')(',','1,2')
  t.deepEquals(['1','2'], answer)
  t.end()
})
