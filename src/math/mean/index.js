const curry = require('../../function/curry');
const sum = require('../sum')

module.exports = curry((list) => sum(list) / list.length)
