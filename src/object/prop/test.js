const test = require('tape')
const { prop } = require('../../')

const obj = { foo: 'bar' }

test('prop', t => {
  t.equals(prop('foo')(obj), 'bar')
  t.equals(prop('foo', obj), 'bar')
  t.end()
})
