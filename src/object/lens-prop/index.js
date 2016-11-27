const prop = require('../prop')
const assoc = require('../assoc')
const lens = require('../lens')

module.exports = k => lens(prop(k), assoc(k))
