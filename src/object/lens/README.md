# lens

A lens takes a getter and setter function and returns a functor that can
be mapped over to apply a function inside the lens container and return
a new result.

## api

lens(getter, setter)

## example

```
const lensProp = compose(lens, prop)

set(lensProp('beep'), 'bam', { beep: 'boop'})
#> {beep: 'bam'}
```
