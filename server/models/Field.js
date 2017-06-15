var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Field', new Schema({

	name: {
		type: String,
		required: true
	},
	type: {
		type: String,
		requires: true
	},
	value: {
		type: mixed
	}

}));