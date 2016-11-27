# pathOr

pathOr takes a defaultValue, a path list and a source object. If the function is
unable to extract a value from the path list as it traverses the source object, the
default value is returned.

## api

pathOr(defaultValue, pathList, object)

## example

const items = pathOr([], ['items'], null)

items === []

[README](../../../README.md)
