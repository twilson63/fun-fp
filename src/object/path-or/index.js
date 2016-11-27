const path = require('../path')
const isNil = require('../../type/is-nil')

module.exports = (defaultValue, pathList, obj) => {
  const pathValue = path(pathList, obj)
  return isNil(pathValue) ? defaultValue : pathValue
}
