'use strict';

var Generator = module.exports = function () {
	var cb = this.async();

	this.directory('src', 'css/pure');

	/*this.prompt([{
		name: 'path',
		message: 'Where would you like to generate it?',
		default: 'css/pure'
	}], function (err, props) {
		if (err) {
			return this.emit('error', err);
		}

		this.directory('src', props.path);

		cb();
	}.bind(this));*/
};

Generator.name = 'YUI Pure';
