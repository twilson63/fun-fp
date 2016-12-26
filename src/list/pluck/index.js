const curry = require('../../function/curry')
const map = require('../map')
const prop = require('../../object/prop')

module.exports = curry((string, list) => map(prop(string), list))
