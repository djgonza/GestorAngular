var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LibrarySchema = require('schemas/library.schema');
var bcrypt = require('bcryptjs');

module.exports = new Schema({

	username: {
		type: String,
		required: true
	},
	secondName:{
		type: String
	},
	password:{
		type: String,
		required: true,
		set: (password) => { return bcrypt.hashSync(password, 10); }
	},
	email: {
		type: String,
		required: true
	},
	createdAt: { 
		type: Date, 
		default: Date.now,
	},
	library: {
		type: Schema.Types.ObjectId
	}

});