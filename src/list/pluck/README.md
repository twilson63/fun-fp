# pluck

Create a function that will transform a list of objects into a list of results of a given child node of the object.

```
docs = [{ id: 1, title: 'test'}, {id: 2, title: 'test2'}]
const titles = pluck('title', docs)
```

Result

['test', 'test2']

---

[README](../../../README.md)
