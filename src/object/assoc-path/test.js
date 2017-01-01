const test = require('tape')
const assocPath = require('./')


test('assocPath', t => {
  t.deepEquals(assocPath(['beep','boop','bam'], 'foo', {}), {beep:{boop:{bam: 'foo'}}} )
  t.deepEquals(assocPath(['beep','boop','bam'], 'bar', {beep:{boop:{bam: 'foo'}}}), {beep:{boop:{bam: 'bar'}}} )

  t.end()
})
