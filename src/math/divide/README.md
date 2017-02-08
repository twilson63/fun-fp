# divide

The `divide` function is a curried binary function that divides the two values
and returns the result.

## why?

JavaScript has a built in operator that will divide two values together,
but it does not compose well if you want to mix it with other functions.
There may be times you know one number, but not the second number until some
time as the program runs.

## drawbacks

# Example

```
const divide20 = divide(20)

divide20(2) === 10
divide20(5) === 4
```
- [source](./index.js)
- [test](./test.js)

[return](../../../README.md#math)
