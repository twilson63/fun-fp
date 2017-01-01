const curry = require('../../function/curry')
const head = require('../../list/head')
const tail = require('../../list/tail')
const propOr = require('../prop-or')
const assoc = require('../assoc')

const assocPath = module.exports = curry((path, value, obj) => {
  if (path.length === 0) {
    return value
  }
  const idx = head(path)

  if (path.length > 1) {
    const nextObj = propOr({}, idx, obj)
    value = assocPath(tail(path), value, nextObj)
  }
  return assoc(idx, value, obj)
})
