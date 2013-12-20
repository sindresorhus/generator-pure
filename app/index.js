'use strict';

var chalk = require('chalk');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function () {
	yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.askUser = function () {

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
