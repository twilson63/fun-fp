const reverse = require('../../list/reverse')

module.exports = (method) => {
  return (...args) => {
    var [data,...rest] = reverse(args)
    return data[method].apply(data, reverse(rest))
  }
}
