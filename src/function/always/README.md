# always

`always` is a higher order function that will always return the value you provide no matter what arguments or information is passed to the returned function.

# why

In functional programming you want to eliminate as may assignments and mutations as possible, so you end up using composition and passing data from function to
function, you may have some functions that have built in logic conditionals and if the value matches a condition you may want to alter it, otherwise you may just want to return a specific value otherwise. For Example, using a `ifElse` , you may want to always return the value as a given outcome.

`ifElse(equals(1), add(1), always(0))`

This function will take a value and if it equals 1 then it will add 1 otherwise it will return 0.


## example

```
var fn = always('foo')

fn('bar')
#> 'foo'

```

[README](../../../README.md)
