
var simpletags = require('..'),
    assert = require('assert');

// Create Engine

var engine = simpletags.createEngine();

assert.ok(engine);

// Create Item

var itemId = engine.createItem('http://nodejs.org', ['nodejs', 'javascript', 'programming']);
assert.ok(itemId);

// Get Item by id

var item = engine.getItemById(itemId);

assert.ok(item);
assert.deepEqual(item, { id: itemId, data: 'http://nodejs.org', tags: ['nodejs', 'javascript', 'programming'] });

// Get items by tags

var items = engine.getItems(['javascript']);

assert.ok(items);
assert.equal(items.length, 1);
assert.deepEqual(items[0], { id: itemId, data: 'http://nodejs.org', tags: ['nodejs', 'javascript', 'programming'] });

// Get empty items

var items = engine.getItems(['noitem']);
assert.ok(items);
assert.equal(items.length, 0);

