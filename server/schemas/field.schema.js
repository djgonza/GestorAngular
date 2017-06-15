var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema ({
	name: {
		type: String
	},
	type: {
		type: String
	},
	value: {
		type: Schema.Types.Mixed
	}
});