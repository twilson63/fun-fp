module.exports = (Ctor, value) =>
  value != null && value.constructor === Ctor || value instanceof Ctor
