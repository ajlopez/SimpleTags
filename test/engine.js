
var simpletags = require('..'),
    assert = require('assert');

// Create Engine

var engine = simpletags.createEngine();

assert.ok(engine);

// Create Item

var itemId = engine.createItem('http://nodejs.org', ['nodejs', 'javascript', 'programming']);
assert.ok(itemId);

