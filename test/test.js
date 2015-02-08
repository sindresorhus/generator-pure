/*global describe beforeEach it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('Pure generator', function () {
	beforeEach(function (cb) {
		var deps = ['../../app'];

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				cb(err);
				return;
			}

			this.gen = helpers.createGenerator('pure:app', deps);
			cb();
		}.bind(this));
	});

	it('generates expected files', function (cb) {
		var expected = [path.join('pure', 'buttons.css')];

		helpers.mockPrompt(this.gen, {modules: ['Buttons']});

		this.gen.run(function () {
			helpers.assertFile(expected);
			cb();
		});
	});
});
