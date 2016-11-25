const test = require('tape')
const update = require('./')

test('update', t => {
  let list = update(1, 'foo', [0, 1, 'bar'])
  t.deepEquals([0,'foo', 'bar'], list)
  let p = update(2, 'beep')
  t.deepEquals([1,2,'beep'], p([1,2,3]))

  let a = update(2)
  t.deepEquals([1,2,1], a(1,[1,2,3]))

  t.end()
})
