const tail = require('../tail')
const reverse = require('../reverse')
const compose = require('../../function/compose')

module.exports = list =>
  compose(
    reverse,
    tail,
    reverse
  )(list)
