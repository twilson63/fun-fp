module.exports = {
  addIndex: require('./function/addindex'),
  compose: require('./function/compose'),
  curry: require('./function/curry'),
  identity: require('./function/identity'),

  byIndex: require('./list/by-index'),
  concat: require('./list/concat'),
  filter: require('./list/filter'),
  find: require('./list/find'),
  head: require('./list/head'),
  map: require('./list/map'),
  reduce: require('./list/reduce'),
  reject: require('./list/reject'),
  reverse: require('./list/reverse'),
  tail: require('./list/tail'),
  times: require('./list/times'),
  update: require('./list/update'),

  and: require('./logic/and'),
  or: require('./logic/or'),
  not: require('./logic/not'),

  add: require('./math/add'),
  subtract: require('./math/subtract'),
  sum: require('./math/sum'),

  has: require('./object/has'),
  keys: require('./object/keys'),
  path: require('./object/path'),
  prop: require('./object/prop'),

  equals: require('./relation/equals'),
  gt: require('./relation/gt'),
  lt: require('./relation/lt'),

  is: require('./type/is'),
  isArray: require('./type/is-array'),
  isNil: require('./type/is-nil')
}
