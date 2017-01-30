# add

The `add` function is a curried binary function that
adds the two values together and returns the result.

## why?

JavaScript has a built in operator that will add two
values together, but it does not compose well if you
want to mix it with other functions, there may be
times you know one number, but not the second number
until some time as the program runs.

## drawbacks


# Example

```
const add5 = add(5)

add5(10) === 15
add5(20) === 25

```

- [source](./index.js)
- [test](./test.js)

[return](../../../README.md#math)
