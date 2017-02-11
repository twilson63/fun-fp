const test = require('tape')

const pathOr = require('./')

test('pathOr', t => {
  const foo = pathOr([], ['beep', 'boop'], {})

  t.deepEquals(foo, [])

  const bar = pathOr([], ['beep', 'boop'], {beep: {boop: 'baz'}})

  t.deepEquals(bar, 'baz')

  const bam = pathOr([], ['beep', 'boop'], null)

  t.deepEquals(bam, [])

  t.end()
})
