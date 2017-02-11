const filter = require('../filter')
const head = require('../head')

module.exports = (fn, list) => head(filter(fn, list))
