var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

module.exports = mongoose.model('User', new Schema({

	name: {
		type: String,
		required: true
	},
	secondName:{
		type: String
	},
	password:{
		type: String,
		required: true,
		set: bcrypt.hashSync(password, 10);
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
		type: ObjectId
	}

}));