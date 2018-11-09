// const assert = require('assert'); // Built in node assertion library
const assert = require('chai').assert;
const { helloWorld } = require('../app');

// Creates a test
describe('App', () => {
  it('helloWorld should return properly', () => {
    let result = helloWorld();
    assert.equal(result, 'Hello World!');
  });

  it('helloWorld should return a string', () => {
    let result = helloWorld();
    assert.typeOf(result, 'string');
  });
});
