# ifElse

The ifElse function takes three arguments and returns a unary function.

- predicate function - should return a true or false when called
- onTrue function that will be executed when the predicate function returns true
- onFalse function that will be executed when the predicate function return false
Both onTrue and onFalse will receive the value passed into the predicate.## api

Both onTrue and onFalse will receive the value passed into the predicate.

## example

```
defaultBeep = ifElse(isNil, always('beep'), identity)

defaultBeep(null)
#> beep
```

[README](../../../README.md)
