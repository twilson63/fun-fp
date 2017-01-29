# invoker

takes two arguments, an arity or number of args for a given named function and the named function. The invoker then returns a function that takes the arguments and target as the last param.

## example

```

var split = invoker('split')

split('','HELLO') //=> ['H','E','L','L','O']

```

[README](../../../README.md#function)
