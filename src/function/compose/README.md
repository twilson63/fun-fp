# compose

Compose takes a set of functions and evaluates them
from right to left, passing the result of each function
into the next function.

## Example

```
const a = n => n + 1
const b = n => n - 2
const c = n => n * 2

const e = compose(a,b,c)

console.log(e(4), ' equals 7')

```

[README](../../../README.md)
