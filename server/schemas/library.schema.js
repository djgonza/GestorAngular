var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = require('schemas/book.schema');

module.exports = new Schema ({
	books: [BookSchema]
});