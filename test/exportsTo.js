
var assert = require('assert');

var obj = {};

require('../').exportsTo(global);

assert.ok(h1);
assert.equal(typeof h1, "function");
assert.ok(h2);
assert.equal(typeof h2, "function");
assert.ok(h3);
assert.equal(typeof h3, "function");
assert.ok(h4);
assert.equal(typeof h4, "function");
assert.ok(h5);
assert.equal(typeof h5, "function");
assert.ok(h6);
assert.equal(typeof h6, "function");
