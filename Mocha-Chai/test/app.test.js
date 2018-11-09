// const assert = require('assert'); // Built in node assertion library
const assert = require('chai').assert;
const { helloWorld } = require('../app');

// Creates a test
describe('App', function() {
  it('helloWorld should return properly', function() {
    assert.equal(helloWorld(), 'Hello World!');
  });
});
