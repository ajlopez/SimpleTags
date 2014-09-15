
var simpletags = require('..');

var engine;
var itemId;

exports['create engine'] = function (test) {
    engine = simpletags.createEngine();
    test.ok(engine);
    test.done();
}

exports['create item'] = function (test) {
    itemId = engine.createItem('http://nodejs.org', ['nodejs', 'javascript', 'programming']);
    test.ok(itemId);
    test.done();
}

exports['get item by id'] = function (test) {
    var item = engine.getItemById(itemId);

    test.ok(item);
    test.deepEqual(item, { id: itemId, data: 'http://nodejs.org', tags: ['nodejs', 'javascript', 'programming'] });
    test.done();
}

exports['get items by tags'] = function (test) {
    var items = engine.getItems(['javascript']);

    test.ok(items);
    test.equal(items.length, 1);
    test.deepEqual(items[0], { id: itemId, data: 'http://nodejs.org', tags: ['nodejs', 'javascript', 'programming'] });
}

exports['get empty items'] = function (test) {
    var items = engine.getItems(['noitem']);
    test.ok(items);
    test.equal(items.length, 0);
    test.done();
}
