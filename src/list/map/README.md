# map

A map function is a function that takes a mapper function and a list. The map function iterates on the list of values and invokes the mapper function for each value in the list capturing the results and storing them into a new list. Then returning the new list.

> A mapper function is a pure function that takes in a value and always returns out a value.

## api

map([mapperFn], [list]) //=> [list]

## example

`map(x => x + 2, [1,2,3,4]) // #> [3, 4, 5, 6]`

[README](../../../README.md)
