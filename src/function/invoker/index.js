const init = require('../../list/init')
const reverse = require('../../list/reverse')
const path = require('../../object/path')
const byIndex = require('../../list/by-index')



module.exports = (method) => {
  return (...args) => {
    var [data,...rest] = reverse(args)
    return data[method].apply(data, reverse(rest))
  }
}
