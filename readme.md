
# structs-list

Functions for interacting with arrays in a functional way.

## Overview

All functions are curried.

```js
List.contains(1, [1, 2])
// -> true

List.prepend(0, [1, 2])
// -> [0, 1, 2]

List.isempty([])
// -> true

List.append(3, [1, 2])
// -> [1, 2, 3]

List.concat([1, 2], [3, 4, 5])
// -> [1, .. 5]

List.filter((i) => item % 2 == 0, [1, 2, 3, 4])
// -> [2, 4]

List.drop(2, [1, 2, 4, 8, 16])
// -> [4, 8, 16]

List.head([5, 4, 3])
// -> 5

List.last([5, 4, 3])
// -> 3

List.tail([5, 4, 3])
// -> [4, 3]

List.map((i) => i * 2, [1, 2, 3])
// -> [2, 4, 6]

List.nth(1, [1, 2, 3])
// -> 2
```

## Run tests

```
make test
```