const curry = require('../../function/curry')
const addIndex = require('../../function/add-index')
const map = require('../map')

module.exports = curry((n, a, list) => {
  const mapIndex = addIndex(map)
  return mapIndex((v, i) => i === n ? a : v, list)
})
