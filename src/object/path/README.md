# path

returns value of a nested object node or null

## why?

Path basically provides a way to check each node on the object graph to see if they are valid and returns null if they don't exist. Versus dotNotation which will error if any parent object does not exist.

```
var obj = {}
console.log(obj.movie.poster.url)
```

```
if (obj && obj.movie && obj.movie.poster && obj.movie.poster.url) {
  console.log(obj.movie.poster.url)
}
```

or

```
console.log(path(['movie', 'poster', 'url'], obj))
```

or

```
console.log(pathOr('http://movieposter.notfound.com', ['movie', 'poster', 'url'], obj))
```

## api

## example

[README](../../../README.md)
