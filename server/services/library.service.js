var config = require('config.json');
var Q = require('q');
var mongoose = require('mongoose');
var Library = require('models/library.model');
var User = require('models/user.model');
mongoose.Promise = global.Promise;

var service = {};

service.getLibrary = getLibrary;
service.create = create;
service.setBook = setBook;
service.updateBook = updateBook;
service.deleteBook = deleteBook;

module.exports = service;

function getLibrary (userId) {

	var deferred = Q.defer();

    User.findById(userId)
    .exec()
    .then((user) => {
    	deferred.resolve(user.library);
    })
    .catch((err) => {
    	deferred.reject(err.name + ': ' + err.message);
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
    
	let deferred = Q.defer();

	getLibrary()
	.then(library => {

		library.books.push(book._id);
		library
		.save()
		.then(savedLibrary => {
			deferred.resolve(createdLibrary);
		})
		.catch(err => {
			deferred.reject(err.name + ': ' + err.message);
		});

	})
	.catch(err => {
		deferred.reject(err.name + ': ' + err.message);
	});

	return deferred.promise;

}

function updateBook (libraryId, book) {

	let deferred = Q.defer();

	getLibrary()
	.then(library => {

		let bookIndex = library.books.indexOf(book._id);
		library.books[bookIndex] = book;

		library
		.save()
		.then(savedLibrary => {
			deferred.resolve(createdLibrary);
		})
		.catch(err => {
			deferred.reject(err.name + ': ' + err.message);
		});

	})
	.catch(err => {
		deferred.reject(err.name + ': ' + err.message);
	});

	return deferred.promise;

}

function deleteBook (libraryId, book) {

	let deferred = Q.defer();

	getLibrary()
	.then(library => {

		let bookIndex = library.books.indexOf(book._id);
		library.books.splice(bookIndex, 1);

		library
		.save()
		.then(savedLibrary => {
			deferred.resolve(createdLibrary);
		})
		.catch(err => {
			deferred.reject(err.name + ': ' + err.message);
		});

	})
	.catch(err => {
		deferred.reject(err.name + ': ' + err.message);
	});

	return deferred.promise;

}