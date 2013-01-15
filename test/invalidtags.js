
var simpletags = require('..'),
    assert = require('assert');

var engine = simpletags.createEngine();

// Tag cannot be a number

assert.throws( 
    function () { engine.createItem('contract.doc', [ 1 ]); },
    function (err) { assert.equal(err, "invalid tag"); return true; }
);

