
var simpletags = require('..');

var engine = simpletags.createEngine();

exports['tag cannot be a number'] = function (test) {
    test.throws( 
        function () { engine.createItem('contract.doc', [ 1 ]); },
        function (err) { test.equal(err, "invalid tag"); return true; }
    );
    
    test.done();
}

exports['tag cannot be a property with more than one property'] = function (test) {
    test.throws( 
        function () { engine.createItem('contract.doc', [ { author: 'adam', date: '2013-01-15' } ]); },
        function (err) { test.equal(err, "invalid tag"); return true; }
    );
    
    test.done();
}
    
exports['tag cannot be an empty object'] = function (test) {
    test.throws( 
        function () { engine.createItem('contract.doc', [ { } ]); },
        function (err) { test.equal(err, "invalid tag"); return true; }
    );
    
    test.done();
}
