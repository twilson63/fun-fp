# fun functional programming

A learning functional library for javascript

## Usage

```
const { map } = require('fun-fp')
const add1 = map(v => v + 1)

console.log(add1([1,2,3]))
```

## Install

```
npm install fun-fp -S
```

## Build src

```
npm run build
```

## Modules

Function

* [addindex](src/function/addIndex/README.md)
* [compose](src/function/compose/README.md)
* [curry](src/function/curry/README.md)

List

* [byIndex](src/list/by-index/README.md)
* [concat](src/list/concat/README.md)
* [flatten](src/list/flatten/README.md)
* [filter](src/list/filter/README.md)
* [find](src/list/find/README.md)
* [head](src/list/head/README.md)
* [map](src/list/map/README.md)
* [reduce](src/list/reduce/README.md)
* [reject](src/list/reject/README.md)
* [reverse](src/list/reverse/README.md)
* [tail](src/list/tail/README.md)
* [tap](src/list/tap/README.md)
* [update](src/list/update/README.md)

Logic

* [and](src/logic/and/README.md)
* [not](src/logic/not/README.md)
* [or](src/logic/or/README.md)

Math

* [add](src/math/add/README.md)
* [subtract](src/math/subtract/README.md)
* [sum](src/math/sum/README.md)

Object

* [assoc](src/object/assoc/README.md)
* [has](src/object/has/README.md)
* [keys](src/object/keys/README.md)
* [lensProp](src/object/lens-prop/README.md)
* [over](src/object/over/README.md)
* [path](src/object/path/README.md)
* [pathOr](src/object/path-or/README.md)
* [prop](src/object/prop/README.md)
* [set](src/object/set/README.md)
* [view](src/object/view/README.md)


Relation

* [equals](src/relation/equals/README.md)
* [gt](src/relation/gt/README.md)
* [lt](src/relation/lt/README.md)

Type

* [is](src/type/is/README.md)
* [isNil](src/type/isNil/README.md)
* [isArray](src/type/isArray/README.md)

## Contributors

[Contributors](https://github.com/twilson63/fun-fp/graphs/contributors)


## Contributing

All contributions are welcome, each function is separated in a topic folder and then a specific folder for that function with a index.js, README.md, and test.js file.

When adding a new function be sure to include it in the src/index.js file as a require.

## License 

MIT

## Thank you

* [RamdaJS](http://ramdajs.com)
* [UnderScoreJS](http://underscorejs.org)
