module.exports = (name, obj) =>
  obj.hasOwnProperty(name) ? obj[name] : null
