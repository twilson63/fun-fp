# subtract

The `subtract` function is a curried binary function that subtracts the two values together and returns the result.

## why?

JavaScript has a built in operator that will subtract two values together, but it does not compose well if you want to mix it with other functions, there may be
times you know one number, but not the second number
until some time as the program runs.

## drawbacks


# Example

```
const subtract5 = subtract(5)

subtract5(10) === 5
subtract5(20) === 15

```

- [source](./index.js)
- [test](./test.js)

[return](../../../README.md#math)
