module.exports = {
  addIndex: require('./function/addindex'),
  compose: require('./function/compose'),
  curry: require('./function/curry'),

  concat: require('./list/concat'),
  filter: require('./list/filter'),
  find: require('./list/find'),
  head: require('./list/head'),
  map: require('./list/map'),
  reduce: require('./list/reduce'),
  reject: require('./list/reject'),
  reverse: require('./list/reverse'),
  tail: require('./list/tail'),

  add: require('./math/add'),
  sum: require('./math/sum'),

  has: require('./object/has'),
  keys: require('./object/keys'),
  path: require('./object/path'),
  prop: require('./object/prop'),

  is: require('./type/is'),
  isArray: require('./type/is-array'),
  isNil: require('./type/is-nil')
}
