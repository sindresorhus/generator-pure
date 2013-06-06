'use strict';

var Generator = module.exports = function () {
	var cb = this.async();

	this.prompt([{
		name: 'path',
		message: 'Where would you like to generate it?',
		default: 'css/pure'
	}], function (props) {
		this.directory('src', props.path);

		cb();
	}.bind(this));
};

Generator.name = 'YUI Pure';
