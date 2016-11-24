const filter = require('../filter')
const head = require('../head')
const compose = require('../../function/compose')

module.exports = function (fn, list) {
  return head(filter(fn, list))
}

//module.exports = compose(head,filter)
