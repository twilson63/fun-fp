const curry = require('../../function/curry')

module.exports = curry((prop, value, obj) => {
  let result = {}
  for (let p in obj) {
    result[p] = obj[p]
  }
  result[prop] = value
  return result
})
