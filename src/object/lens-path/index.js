const path = require('../path')
const assocPath = require('../assoc-path')
const lens = require('../lens')

module.exports = k => lens(path(k), assocPath(k))
