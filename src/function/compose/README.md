# compose

fn(a,b,c) === v => a(b(c(v)))

The `compose` function takes one or more unary functions as arguments and returns a function
which will take a single argument. When that function
is invoked it will pass the value to the right most
function and invoke it, then pass the value returned
by the last function to the next to last function and
so on, until all functions have been invoked and return
the final value.

## why?

Using the compose function can greatly reduce the amount of parenthesis.

## drawbacks

There is no drawbacks to this function, it can take some time to wrap your head around how it works, but once you do, you can create pipe lines of data transformations using the compose function, combined
with a map.


## Example

```

const calc = compose(
  add(1),
  subtract(2),
  multiply(2)
)

console.log(calc(4), ' equals 7')

```

- [source](./index.js)
- [test](./test.js)

[return](../../../README.md#function)
