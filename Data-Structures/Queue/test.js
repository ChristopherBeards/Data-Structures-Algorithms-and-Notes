const Queue = require('./index');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can enqueue elements', () => {
  const q = new Queue();
  expect(() => {
    q.enqueue(1);
  }).not.toThrow();
});

test('can dequeue elements', () => {
  const q = new Queue();
  expect(() => {
    q.enqueue(1);
    q.dequeue();
  }).not.toThrow();
});
