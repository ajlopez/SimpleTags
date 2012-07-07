
require('../').exportsTo(global);
var assert = require('assert');

// Simple Text
    
assert.equal(text({ name: 'firstName', value: 'Adam'}), "<input type='text' name='firstName' value='Adam' />");

// Simple Password
    
assert.equal(password({ name: 'password'}), "<input type='password' name='password' />");

// Simple Submit

assert.equal(submit({ name: 'accept', value: 'Accept'}), "<input type='submit' name='accept' value='Accept' />");

// Simple radio buttom

assert.equal(radio({ name: 'ok'}), "<input type='radio' name='ok' />");

// Simple checkbox

assert.equal(checkbox({ name: 'check'}), "<input type='checkbox' name='check' />");
