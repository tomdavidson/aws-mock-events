const test = require('tape');
const mockEvent = require('./index.js');


test("Can import", t => {
    t.plan(1);
    t.ok(require('./index.js'));
    t.end();
});
