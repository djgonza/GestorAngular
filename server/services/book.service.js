var config = require('config.json');
var mongoose = require('mongoose');
var Book = require('models/book.model');
mongoose.Promise = global.Promise;

var service = {};

service.create = create;
service.update = update;

module.exports = service;

function create (name, pages, fields) {

	return new Book({
		name: name,
		pages: pages,
		fields: fields
	});

}

function update (oldBook, newBook) {
    
	return Object.assign(newBook, oldBook);

}