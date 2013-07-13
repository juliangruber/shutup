var test = require('tape');
var shutup = require('..');
var EventEmitter = require('events').EventEmitter;

test('silent', function (t) {
  var ee = shutup(new EventEmitter());
  var max = EventEmitter.defaultMaxListeners || 10;
  var error = console.error;
  console.error = function () {
    console.error = error;
    t.fail();
  };
  for (var i = 0; i <= max; i++) {
    ee.on('foo', function () {});
  }
  t.ok(true);
  t.end();
});
