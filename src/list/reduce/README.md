# reduce

reduce takes a function, default value and a list as input, then iterates over the list, applying the function, until 
the iteration is finished and one value or result is returned. The function takes an accumulator and a value as inputs,
then returns the next accumulator as output.

The purpose of the reduce is to return a single value, a perfect example is the sum function, if you have a list of 
numbers, and you want to add them together, you can reduce them with a simple add function.

sum([1,2,3,4]) === reduce((a,b) => a + b, 0, [1,2,3,4])

## api

```
function reduce (fn, default, list) {
  ...
}
```

## example

```
const sum = list => reduce((a,b) => a + b, 0, list)
```

[README](../../../README.md)
