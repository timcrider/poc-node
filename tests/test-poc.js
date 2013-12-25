var nu = require('nodeunit');

exports.poc = nu.testCase({
	'Example poc test' : function(t) {
		t.equal(true, true, 'Testing example (force true)');
		t.done();
	}
});
