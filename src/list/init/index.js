const tail = require('../tail')
const reverse = require('../reverse')
const compose = require('../../function/compose')

module.exports = list => {
  var [,...rest] = reverse(list)
  return reverse(rest)
}
