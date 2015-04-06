
# structs-list

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Test coverage][coveralls-image]][coveralls-url]

Compact functions for interacting with arrays in a functional way. They leverage from already existing functions in ES5.

## Installation

```bash
$ npm install structs-list
```

## Usage

By using a simple prepublish script which moves all functions from `lib/` to the toplevel you can require functions like the following:

```js
var append = require('structs-list/append')
```

Documentation is available [here](./docs/index.md).

## Tests

```bash
$ npm test
```

## Prior work

* [Ramda](https://github.com/ramda/ramda)

## License

[MIT][license-url]

[npm-image]: https://img.shields.io/npm/v/structs-list.svg?style=flat-square
[npm-url]: https://npmjs.org/package/structs-list

[david-image]: http://img.shields.io/david/structs/list.svg?style=flat-square
[david-url]: https://david-dm.org/structs/list

[license-image]: http://img.shields.io/npm/l/structs-list.svg?style=flat-square
[license-url]: ./license

[travis-image]: https://img.shields.io/travis/structs/list.svg?style=flat-square
[travis-url]: https://travis-ci.org/structs/list

[coveralls-image]: https://img.shields.io/coveralls/structs/list/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/structs/list?branch=master