
require('../').exportsTo(global);
var assert = require('assert');

// Simple Text
    
assert.equal(text({ name: 'firstName', value: 'Adam'}), "<input type='text' name='firstName' value='Adam' />");
