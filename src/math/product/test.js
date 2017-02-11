const test = require('tape')
const product = require('./')

test('product', t => {
  t.equals(product(1, 2, 3, 4, 5), 120)
  t.equals(product(5, 10, 20, 6), 6000)
  t.end()
})
