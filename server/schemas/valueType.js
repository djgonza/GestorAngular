var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema ({
	prototype: {
		type: String,
		required: true
	}
});