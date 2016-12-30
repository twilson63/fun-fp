const init = require('../../list/init')
const path = require('../../object/path')
const byIndex = require('../../list/by-index')



module.exports = (arity, method) => {
  return (...args) => {
    let data = byIndex(arity,args)
    return data[method].apply(data, init(args))
  }
}
