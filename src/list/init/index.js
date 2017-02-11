const reject = require('../reject')
const addIndex = require('../../function/addIndex')
const equals = require('../../relation/equals')

const rejectWithIndex = addIndex(reject)

module.exports = list => rejectWithIndex(
  (v, i) =>
    equals(list.length - 1, i)
  , list
)
