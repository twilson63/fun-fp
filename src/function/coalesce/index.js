const coalesce = module.exports = (first, ...rest) =>
    typeof first !== 'undefined'
    ? first
    : coalesce(...rest, null)
