module.exports = function (Ctor, value) {
  return value != null && value.constructor === Ctor || value instanceof Ctor
}
