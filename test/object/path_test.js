const test = require('tape')
const { path } = require('../../')

const obj = {
  foo: {
    bar: {
      baz: 'bam'
    }
  }
}

test('prop', t => {
  t.equals(path(['foo','bar', 'baz'], obj), 'bam')
  t.equals(path(['foo','bar', 'beep'], obj), null)
  t.equals(path(['flop','bar', 'beep'], obj), null)

  t.end()
})
