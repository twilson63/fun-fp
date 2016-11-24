const filter = require('./filter')
const head = require('./head')

module.exports = function (fn, list) {
  return head(filter(fn, list))
}
