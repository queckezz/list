

<!-- Start lib\index.js -->

## slice(from, to, array)

Return the elements `from` to `to` in a given `array`.

### Params:

* **Int** *from* Starting index
* **Int** *to* Ending index
* **Array** *array* Array to take elements from

### Return:

* **Array** The elements `from` to `to`

## drop(n, array)

Slice `n` items from `array` returning the sliced
elements as a new array.

### Params:

* **Int** *n* How many elements to drop
* **Array** *array* Array to drop from

### Return:

* **Array** New Array with the dropped items

## copy

Shallow copy of a given `array`.

### Params:

* **Array** *array* Array that you want to copy

### Return:

* **Array** Copied `array` array

## nth(n, array)

Returns the `n`th element in the given `array`.

### Params:

* **Int** *n* Index
* **Array** *array* Array to operate on

### Return:

* **Any** `n`th element

## head(array)

Returns the first element in the given `array`.

### Params:

* **Array** *array* Array to operate on

### Return:

* **Any** First element from the array

## last(array)

Returns the last element in a given `array`.

### Params:

* **Array** *array* Array to operate on

### Return:

* **Any** Last element from `array`

## tail(array)

Returns all elements in an `array` except the first.

### Params:

* **Array** *array* Array to operate on

### Return:

* **Array** All items except the first

## concat(a, b)

Returns a new array containing both `a` and `b`.

### Params:

* **Array** *a* 
* **Array** *b* 

### Return:

* **Array** 

## append(element, array)

Returns a new `array` with the given `element` appended.

### Params:

* **Any** *element* Element to append
* **Array** *array* Array to operate on

### Return:

* **Array** Array with the given `element` appended

## prepend(element, array)

Returns a new `array` with the given `element`
prepended.

### Params:

* **Any** *element* Element to prepend
* **Array** *array* Array to operate on

### Return:

* **Array** Array with the given `element` prepended

## reverse(array)

Returns a new Array with the given `array`s elements
reversed.

### Params:

* **Array** *array* Array to operate on

### Return:

* **Array** Array with the given `array` reversed

## filter(fn, array)

Returns a new `array` containing only items that match a
given function.

### Params:

* **Function** *fn* Filter function
* **Array** *array* Array to operate on

### Return:

* **Array** Filtered array 

## map(fn, array)

Calling `fn` on each element in `array` returning a
modified new array.

### Params:

* **Function** *fn* 
* **Array** *array* 

### Return:

* **Array** 

## foldl(initial, combinator, array)

foldl executes the `combinator` function once for each
element present in the array.

`combinator` receives the following arguments:
- previousVal
- currentVal
- index
- array reference

### Params:

* **Any** *initial* 
* **Function** *combinator* 
* **Array** *array* 

## foldr()

Same as foldl expect starting from the last element in
the array

## contains(match, array)

Check if `match` is in `array` returning a Boolean.

### Params:

* **Any** *match* [item to search for in `array`]
* **Array** *array* 

### Return:

* **Boolean** 

## isempty(array)

Checks whether the given `array` has zero elements.

### Params:

* **Array** *array* 

### Return:

* **Boolean** 

## isarray(a)

Checks if `a` is an array.

### Params:

* **Array** *a* Array to operate on

### Return:

* **Boolean** True if it is array, false otherwise

<!-- End lib\index.js -->

