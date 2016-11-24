const test = require('tape')
const addIndex = require('./')
const map = require('../../list/map')

test('addIndex', t => {
  const mapIndex = addIndex(map)


  t.deepEquals([0], mapIndex((v, i) => i, [3]))
  t.deepEquals([0,1,2,3,4], mapIndex((v, i) => i, [3,4,5,6,7]))
  t.deepEquals([3,4,5,6,7], mapIndex((v, i) => v, [3,4,5,6,7]))

  t.end()
})
