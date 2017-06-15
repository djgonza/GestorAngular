var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FieldSchema = require('schemas/field.schema');

module.exports = new Schema ({
	fields: [FieldSchema]
});