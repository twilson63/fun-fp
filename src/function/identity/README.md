# identity

`identity` is a function that returns the value of the argumemt passed in.

## why?

You may be thinking, why do I need a function like this? But you will find when composing functions together, this function becomes very handy. It is also handy for implementing some of the other functional utilities in this library.

## Drawbacks

There is no real drawback, other than it is very simple to write your own identity functions, all it does is return the value passed in.

`function identity (x) { return x }`

## Example

```
1 === identity(1)
```

- [source](./index.js)
- [test](./test.js)

[return](../../../README.md#function)
