# multiply

The `multiply` function is a curried binary function that multiplies the two values together and returns the result.

## why?

JavaScript has a built in operator that will multiply two values together, but it does not compose well if you want to mix it with other functions, there may be
times you know one number, but not the second number
until some time as the program runs.

## drawbacks


# Example

```
const multiply5 = multiply(5)

multiply5(10) === 50
multiply5(20) === 100

```

- [source](./index.js)
- [test](./test.js)

[return](../../../README.md#math)
