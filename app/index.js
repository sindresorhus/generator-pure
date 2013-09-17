'use strict';
var path = require('path');
var chalk = require('chalk');

var Generator = module.exports = function () {
	var cb = this.async();
	var self = this;

	self.prompt([{
		type: 'checkbox',
		name: 'modules',
		message: 'What would you like?\n' + chalk.gray('Generates to a `pure` subfolder'),
		choices:[
			'Buttons',
			'Forms',
			'Grids',
			'Menus',
			'Tables'
		]
	}], function (data) {
		var pattern = path.join('src', '{' + data.modules.join(',') + ',}', 'css', '*.css');

		self.expandFiles(pattern, {cwd: self.sourceRoot(), nocase: true}).forEach(function (el) {
			self.copy(el, path.join('pure', path.basename(el)));
		});

		cb();
	});
};

Generator.name = 'YUI Pure';
