const test = require('tape')
const pluck = require('./')

test('pluck', t => {
  const docs = [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }]
  const titles = pluck('title', docs)
  t.deepEquals(['test', 'test2'], titles)
  t.end()
})

test('pluck curry', t => {
  const getTitles = pluck('title')
  const docs = [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }]
  const titles = getTitles(docs)
  t.deepEquals(['test', 'test2'], titles)
  t.end()
})
