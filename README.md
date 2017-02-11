# fun functional programming

[![Build Status](https://travis-ci.org/twilson63/fun-fp.svg?branch=master)](https://travis-ci.org/twilson63/fun-fp)

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

- [Function](#function)
- [List](#list)
- [Logic](#logic)
- [Math](#math)
- [Object](#object)
- [Relation](#relation)
- [String](#string)
- [Type](#type)

#### Function

* [addindex](src/function/addIndex/README.md)
* [always](src/function/always/README.md)
* [coalesce](src/function/coalesce/README.md)
* [compose](src/function/compose/README.md)
* [curry](src/function/curry/README.md)
* [identity](src/function/identity/README.md)
* [invoker](src/function/invoker/README.md)

#### List

* [append](src/list/append/README.md)
* [byIndex](src/list/by-index/README.md)
* [concat](src/list/concat/README.md)
* [contains](src/list/contains/README.md)
* [flatten](src/list/flatten/README.md)
* [filter](src/list/filter/README.md)
* [find](src/list/find/README.md)
* [head](src/list/head/README.md)
* [init](src/list/init/README.md)
* [map](src/list/map/README.md)
* [prepend](src/list/prepend/README.md)
* [reduce](src/list/reduce/README.md)
* [remove](src/list/remove/README.md)
* [reject](src/list/reject/README.md)
* [reverse](src/list/reverse/README.md)
* [tail](src/list/tail/README.md)
* [tap](src/list/tap/README.md)
* [update](src/list/update/README.md)

#### Logic

* [and](src/logic/and/README.md)
* [ifElse](src/logic/ifElse/README.md)
* [not](src/logic/not/README.md)
* [or](src/logic/or/README.md)

#### Math

* [add](src/math/add/README.md)
* [divide](src/math/divide/README.md)
* [mean](src/math/mean/README.md)
* [multiply](src/math/multiply/README.md)
* [product](src/math/product/README.md)
* [subtract](src/math/subtract/README.md)
* [sum](src/math/sum/README.md)

#### Object

* [assoc](src/object/assoc/README.md)
* [assocPath](src/object/assoc-path/README.md)
* [has](src/object/has/README.md)
* [keys](src/object/keys/README.md)
* [lensPath](src/object/lens-path/README.md)
* [lensProp](src/object/lens-prop/README.md)
* [over](src/object/over/README.md)
* [path](src/object/path/README.md)
* [pathOr](src/object/path-or/README.md)
* [prop](src/object/prop/README.md)
* [propOr](src/object/prop-or/README/md)
* [set](src/object/set/README.md)
* [view](src/object/view/README.md)


#### Relation

* [equals](src/relation/equals/README.md)
* [gt](src/relation/gt/README.md)
* [lt](src/relation/lt/README.md)

#### String

* [split](src/string/split/README.md)

#### Type

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

## Code of Conduct

[CODE_OF_CONDUCT](./CODE_OF_CONDUCT.md)
