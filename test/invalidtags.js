
var simpletags = require('..'),
    assert = require('assert');

var engine = simpletags.createEngine();

// Tag cannot be a number

assert.throws( 
    function () { engine.createItem('contract.doc', [ 1 ]); },
    function (err) { assert.equal(err, "invalid tag"); return true; }
);

// Tag cannot be a property with more than one property

assert.throws( 
    function () { engine.createItem('contract.doc', [ { author: 'adam', date: '2013-01-15' } ]); },
    function (err) { assert.equal(err, "invalid tag"); return true; }
);

// Tag cannot be an empty object

assert.throws( 
    function () { engine.createItem('contract.doc', [ { } ]); },
    function (err) { assert.equal(err, "invalid tag"); return true; }
);
