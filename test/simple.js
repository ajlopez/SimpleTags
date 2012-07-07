
require('../').exportsTo(global);
var assert = require('assert');

// Simple H1    
    
assert.equal(h1(), "<h1 />");
assert.equal(h1("Main"), "<h1>Main</h1>");

// Simple H2
    
assert.equal(h2(), "<h2 />");
assert.equal(h2("Main"), "<h2>Main</h2>");

// Simple DIV with style

assert.equal(div({id: 'content', "class": 'row'},"My content"), "<div id='content' class='row'>My content</div>");

// Simple BR with style

assert.equal(br({id: 'break'}), "<br id='break' />");

// Simple DIV with array content

assert.equal(div(['Hello,', ' World']), "<div>Hello, World</div>");

// Simple comment

assert.equal(comment('This is a secret'), "<!--This is a secret-->");