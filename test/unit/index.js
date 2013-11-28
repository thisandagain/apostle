var test = require('tap').test,
    apostle = require(__dirname + '/../../lib/index.js')('TEST');

apostle({
    email:      'andrewsliwinski@acm.org',
    template:   'test',
    values:     {
        foo: 'bar'
    }
}, function (err, result) {
    console.dir(err);
    console.dir(result);

    test('unit', function (t) {
        t.equal(err, null, 'error object is null');
        t.type(result, 'object', 'result is an object');
        t.end();
    });
});