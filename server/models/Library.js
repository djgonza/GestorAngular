var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Library', new Schema({

	books: {
		type: Array,
		default: []
	}

}));