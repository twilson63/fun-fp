const test = require('tape')
const { has } = require('../../')

const obj = {
  foo: 'bar'
}

test('prop', t => {
  t.ok(has('foo', obj))
  t.notOk(has('bam', obj))
  t.end()
})
