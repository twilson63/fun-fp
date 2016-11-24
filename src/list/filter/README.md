# filter

reduces a list based on a predicate function

## api

`list l = (a -> Boolean) -> l a -> l a`

const filteredList = filter({predicate function}, [array])

## example

```
const even = filter(a => a % 2 === 0, [1,2,3,4])
```

[README](../../../README.md)
