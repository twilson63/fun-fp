const reduce = require('./reduce')

module.exports = function (...lists) {
  return reduce((acc, value) => {
    return acc.concat(value)  
  }, [], lists)
}
