# coalesce

The coalesce function takes an arbitrary number of arguments and returns the first value that is not undefined. If all parameters evaluate to undefined, then it returns null.

It works like the MySQL COALESCE operator, but on javascript value type `undefined` rather than MySQL value type `NULL`. 

It does not behave like a simple boolean check; values such as `null`, `''` (empty string), `false`, and `0` all may be evaluated as boolean false, but this function will return them. And so, it has a different result than simply using the `||` (or) operator to chain and evaluate multiple variables.

## Example

```
let a = undefined
let b = 1
let c = 0
let d = null
let e = 'foo'
let f = ''
let g = false

coalesce(a, b) // returns 1
coalesce(b, c) // returns 1
coalesce(a, c, d) // returns 0
coalesce(d, e, f, g) // returns null
coalesce(a, f, g) // returns ''
coalesce(a, g) // returns false
``` 
