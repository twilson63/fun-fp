# assocPath

shallow clone of object and assigns specified value to path

## api

assocPath(path, value, obj)


## example

const obj = assocPath(['c','f'], 2, { a: 1, b: 3})
#> {a: 1, b: 3, c: { f: 2}}

[README](../../../README.md)
