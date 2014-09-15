
var simpletags = require('..');

var engine;
var itemId;

exports['create engine'] = function (test) {
    engine = simpletags.createEngine();
    test.ok(engine);
    test.done();
}

exports['create item with object tags'] = function (test) {
    itemId = engine.createItem('contract.doc', [ { author: 'adam' }, { date: '2013-01-14' }]);
    test.ok(itemId);
    var item = engine.getItemById(itemId);
    test.ok(item);
    test.deepEqual(item, { id: itemId, data: 'contract.doc', tags: [{ author: 'adam' }, { date: '2013-01-14' }] });
}

exports['create item with object as tag'] = function (test) {
    var itemId2 = engine.createItem('contract2.doc', { author: 'eve', date: '2013-01-10' });
    test.ok(itemId2);
    var item = engine.getItemById(itemId2);
    test.ok(item);
    test.deepEqual(item, { id: itemId2, data: 'contract2.doc', tags: [{ author: 'eve' }, { date: '2013-01-10' }] });
    test.done();
}

exports['retrieve items with object tags'] = function (test) {
    var items = engine.getItems([ { author: 'adam' } ]);
    test.ok(items);
    test.equal(items.length, 1);
    test.deepEqual(items[0], { id: itemId, data: 'contract.doc', tags: [{ author: 'adam' }, { date: '2013-01-14' }] });
    test.done();
}

exports['empty items with object tags'] = function (test) {
    var items = engine.getItems([ { author: 'adam' }, { date: '2013-01-13' } ]);
    test.ok(items);
    test.equal(items.length, 0);
    test.done();
}

exports['retrieve items with object tags'] = function (test) {
    var items = engine.getItems([ { author: 'adam' } ]);
    test.ok(items);
    test.equal(items.length, 1);
    test.deepEqual(items[0], { id: itemId, data: 'contract.doc', tags: [{ author: 'adam' }, { date: '2013-01-14' }] });
    test.done();
}

exports['create and retrieve item with two author tags'] = function (test) {
    var itemId = engine.createItem( 'eden.doc', [ { author: 'adam' }, { author: 'eve' } ]);
    test.ok(itemId);
    var items = engine.getItems([ { author: 'adam' }, { author: 'eve' } ]);
    test.ok(items);
    test.equal(items.length, 1);
    test.deepEqual(items[0], { id: itemId, data: 'eden.doc', tags: [ { author: 'adam' }, { author: 'eve' } ] });
    test.done();
}

