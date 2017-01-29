# addIndex

addIndex is an unary higher order function that takes a list iterator as an argument and returns a new list iterator that adds a secondary argument to the iterator
function that is called for each item in the list. The
secondary argument is the index value of the item in the list.

## Why

There are some use cases where one may want to know the index of the item in the list while mapping or filtering through the list. This higher order function empowers the developer to add this feature to any iterator command, like map, filter, etc.

## Drawbacks

This function uses the apply method and passes null as the context, so if you are working with functions that need context, this may not be the best choice for you. Also, this is not tuned for performance so there may be more performant solutions.

## Architecture

Uses es2015 let and const declarations, double arrow functions and rest operator to make code easy to read.

## Example

```
const filterWithIndex = addIndex(filter)
const tail = filterWithIndex((v, i) => i !== 0)
tail([1,2,3,4])
#> [2,3,4]
```

[README](../../../README.md#function)
