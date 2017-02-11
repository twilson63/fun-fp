const addIndex = require('../../function/add-index')
const filter = require('../filter')
const filterWithIndex = addIndex(filter)

module.exports = list => filterWithIndex((v, i) => i !== 0, list)
