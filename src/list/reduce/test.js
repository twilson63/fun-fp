const test = require('tape')
const { reduce, isNil, is, find, keys } = require('../../')

test('reduce easy test', t => {
  const answer = reduce(function (acc, value) {
    acc.push(value + 1)
    return acc
  }, [], [1, 2, 3, 4])

  t.deepEquals([2, 3, 4, 5], answer)

  t.end()
})

test('reduce array to object', t => {
  const answer = reduce(function (acc, value) {
    if (is(String, value)) {
      acc[value] = null
    } else {
      acc[find(k => isNil(acc[k]), keys(acc))] = value
    }
    return acc
  }, {}, ['one', 1, 'two', 2])

  t.deepEquals({one: 1, two: 2}, answer)

  t.end()
})
