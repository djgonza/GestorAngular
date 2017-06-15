var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FieldSchema = require('schemas/field.schema');
var PageSchema = require('schemas/page.schema');

module.exports = new Schema ({
	name: {
		type: String
	},
	pages: [PageSchema],
	fields: [FieldSchema]
});