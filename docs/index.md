

<!-- Start lib\index.js -->

## slice(from, to, list)

Return the elements `from` to `to` in a given `list`.

### Params:

* **Int** *from* Starting index
* **Int** *to* Ending index
* **Array** *list* List to take elements from

### Return:

* **Array** The elements `from` to `to`

## drop(n, list)

Slice `n` items from `list`, returning a new array.

### Params:

* **Int** *n* How many elements to drop
* **Array** *list* Array to drop from

### Return:

* **Array** 

## copy

Shallow copy of an array.

### Params:

* **Array** *list* Array that you want to copy

### Return:

* **Array** Copied `list` array

## nth(n, list)

Takes a `list` and return the `n`th item in the list.

### Params:

* **Int** *n* Index
* **Array** *list* Array to operate on

### Return:

* **Any** `n`th element

## head(list)

return the first element in a given array.

### Params:

* **Array** *list* Array to operate on

### Return:

* **Any** First element from the array

## last()

return the last element in a given array.

### Params:

* **Array** ** 

### Return:

* **Any** [Last element]

## tail(list)

Takes a `list` and return a new array containing all
elements except the first.

### Params:

* **Array** *list* 

### Return:

* **Array** 

## concat(a, b)

return a new array containing `a` and `b`.

### Params:

* **Array** *a* 
* **Array** *b* 

### Return:

* **Array** 

## append(item, list)

Append given `item` to `list` returning a new array.

### Params:

* **Any** *item* 
* **Array** *list* 

### Return:

* **Array** 

## prepend(item, list)

Prepend given `item` to `list` returning a new array.

### Params:

* **Any** *item* 
* **Array** *list* 

### Return:

* **Array** 

## reverse(list)

Takes a `list` and return a new array with the items
reversed.

### Params:

* **Array** *list* 

### Return:

* **Array** 

## filter(fn, list)

return a new list containing only items that match a
given function.

### Params:

* **Function** *fn* 
* **Array** *list* 

### Return:

* **Array** 

## map(fn, list)

Calling `fn` on each element in `list` returning a
modified new array.

### Params:

* **Function** *fn* 
* **Array** *list* 

### Return:

* **Array** 

## foldl(initial, combinator, list)

foldl executes the `combinator` function once for each
element present in the array.

`combinator` receives the following arguments:
- previousVal
- currentVal
- index
- list reference

### Params:

* **Any** *initial* 
* **Function** *combinator* 
* **Array** *list* 

## foldr()

Same as foldl expect starting from the last element in
the array

## contains(match, list)

Check if `match` is in `list` returning a Boolean.

### Params:

* **Any** *match* [item to search for in `list`]
* **Array** *list* 

### Return:

* **Boolean** 

## isempty(list)

Checks whether the list has zero elements.

### Params:

* **Array** *list* 

### Return:

* **Boolean** 

## islist(a)

Checks if `a` is an array.

### Params:

* **Array** *a* Array to operate on

### Return:

* **Boolean** True if it is array, false otherwise

<!-- End lib\index.js -->

