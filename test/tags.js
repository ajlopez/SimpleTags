
var simpletags = require('..'),
    assert = require('assert');

var engine = simpletags.createEngine();
assert.ok(engine);

// Create Item with Object Tags

var itemId = engine.createItem('contract.doc', [ { author: 'adam' }, { date: '2013-01-14' }]);
assert.ok(itemId);
var item = engine.getItemById(itemId);
assert.ok(item);
assert.deepEqual(item, { id: itemId, data: 'contract.doc', tags: [{ author: 'adam' }, { date: '2013-01-14' }] });

