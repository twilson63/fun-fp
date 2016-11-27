const curry = require('../../function/curry')

module.exports = curry((prop, value, obj) => {
  let result = {}
  for (p in obj) {
    result[p] = obj[p]
  }
  result[prop] = value
  return result
})
