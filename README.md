# SimpleTags

Simple engine to manage items, with arbitrary data and associated tags.

## Installation

Via npm on Node:

```
npm install simpletags
```

Reference in your program:

```js
var simpletags = require('simpletags');
```

## Usage

Create engine
```js
var engine = simpletags.createEngine();
```

Create item in engine:
```js
var itemId = engine.createItem('http://nodejs.org', [ 'nodejs', 'javascript', 'engine', 'programming' ]);
```
An item has
- `data`: Arbitrary value you supplied
- `tags`: An array of tags. A tag could be a non-empty string or an object with only one property with non-empty value.

Once created, the item has an associated id, supplied by the engine.

An example with object and string tags:
```js
var itemId = engine.createItem('contract.doc', [ 'legal', 'document', { author: 'adam' } ]);
```

Search items by tags:
```js
var items = engine.getItems([ 'nodejs', 'javascript', 'engine', 'programming' ]);
```
The return value is an array of items. Each item is a simple object with `id`, `data`, and `tags` properties.

Get item by id:
```js
var item = engine.getItemById(itemId);
```
The return value is a simple object, with `id`, `data`, and `tags` properties.

## Samples

TBD

## To do

- Update an item.
- Remove an item.
- Better internal tag structure and search algorithm.

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleTags) and submit
[pull requests](https://github.com/ajlopez/SimpleTags/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
