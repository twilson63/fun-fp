const path = require('../path')
const isNil = require('../../type/is-nil')
const compose = require('../../function/compose')
const always = require('../../function/always')
const identity = require('../../function/identity')
const tap = require('../../list/tap')
const ifElse = require('../../logic/ifElse')

module.exports = (defaultValue, pathList, obj) =>
  compose(
      ifElse(isNil,always(defaultValue),identity),
      path(pathList)
  )(obj)
