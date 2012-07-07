
var st = require('../'),
    assert = require('assert');

// Simple H1    
    
assert.equal(st.h1(), "<h1 />");
assert.equal(st.h1("Main"), "<h1>Main</h1>");

// Simple H2
    
assert.equal(st.h2(), "<h2 />");
assert.equal(st.h2("Main"), "<h2>Main</h2>");

// Simple DIV with style

assert.equal(st.div({id: 'content', "class": 'row'},"My content"), "<div id='content' class='row'>My content</div>");

