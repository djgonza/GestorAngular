var config = require('config.json');
var Q = require('q');
var mongoose = require('mongoose');
var connectionDb = require('middleware/connectionDb');
var Library = require('models/library.model');
var User = require('models/user.model');
mongoose.Promise = global.Promise;

var service = {};

service.getLibrary = getLibrary;
service.create = create;
service.setBook = setBook;
service.deleteBook = deleteBook;

module.exports = service;

function getLibrary (userId) {

	var deferred = Q.defer();

	connectionDb.connect();

    User.findById(userId)
    .exec()
    .then((user) => {
    	deferred.resolve(user.library);
    	connectionDb.disconnect();
    })
    .catch((err) => {
    	deferred.reject(err.name + ': ' + err.message);
    	connectionDb.disconnect();
    });

    return deferred.promise;

}

function create () {

	let deferred = Q.defer();

	new Library()
		.save()
		.then(createdLibrary => {
			deferred.resolve(createdLibrary);
		})
		.catch(err => {
			deferred.reject(err.name + ': ' + err.message);
		});

	return deferred.promise;

}

function setBook (libraryId, book) {
    
    connectionDb.connect();

    Library.findById(libraryId, (err, library) => {
		
		if (err) return handleError(err);

		library.books.push(book._id);
		library.save((err) => {
			if (err) return handleError(err);
		}).then((library) => {
			connectionDb.disconnect();
			console.log(library);
			return library;
		});

	});

}

function deleteBook (libraryId, book) {
    
	connectionDb.connect();

	Library.findById(libraryId, (err, library) => {
		
		if (err) return handleError(err);

		var bookIndex = library.books.indexOf(book._id);
		library.books.splice(bookIndex, 1);
		library.save((err) => {
			if (err) return handleError(err);
		}).then((library) => {
			connectionDb.disconnect();
			console.log(library);
			return library;
		});

	});

}