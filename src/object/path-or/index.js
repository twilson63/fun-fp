const path = require('../path')
const isNil = require('../../type/is-nil')
const compose = require('../../function/compose')
const always = require('../../function/always')
const identity = require('../../function/identity')
const tap = require('../../list/tap')
const ifElse = require('../../logic/ifElse')

module.exports = (defaultValue, pathList, obj) => {
  const getVal = x => ifElse(isNil,always(defaultValue),identity)(x)
  return compose(
    getVal,
    path(pathList)
  )(obj)
}
