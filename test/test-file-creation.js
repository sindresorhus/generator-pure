/*global describe beforeEach it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('Pure generator', function () {
	beforeEach(function (cb) {
		var deps = ['../../app'];

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				return cb(err);
			}

			this.gen = helpers.createGenerator('pure:app', deps);
			cb();
		}.bind(this));
	});

	it('generates expected files', function (cb) {
		var expected = ['base', 'buttons'];

		//helpers.mockPrompt(this.gen, { path: 'css/pure' });

		this.gen.run({}, function () {
			helpers.assertFiles(expected);
			cb();
		});
	});
});
