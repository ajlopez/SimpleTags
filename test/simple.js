
var st = require('../'),
    assert = require('assert');

assert.equal(st.h1(), "<h1 />");
assert.equal(st.h1("Main"), "<h1>Main</h1>");

assert.equal(st.h2(), "<h2 />");
assert.equal(st.h2("Main"), "<h2>Main</h2>");




