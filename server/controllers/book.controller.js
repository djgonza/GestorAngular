var config = require('config.json');
var express = require('express');
var router = express.Router();
var BookService = require('services/book.service');


// routes
router.get('/', getAllBooks);
router.get('/:bookId', getBook);
router.post('/', createBook);
router.put('/:bookId', updateBook);
router.delete('/:bookId', deleteBook);

router.use('/:bookId/pages', require('controllers/book.controller'));

module.exports = router;

function getBook (req, res) {

	BookService.load(req.params.bookId)
	.then(book => {
		res.status(200).send(book);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}

function getAllBooks(req, res) {

	BookService.loadAll(req.params.libraryId)
	.then(books => {
		res.status(200).send(books);
	})
	.catch(err => {
		res.status(401).send(err);
	});
	
}

function createBook(req, res) {
	
	BookService.create(req.params.libraryId, req.body.name, req.body.structure)
	.then(createdBook => {
		res.status(200).send(createdBook);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}

function updateBook(req, res) {
	
	BookService.update (req.params.oldBookId, req.body.newBook)
	.then(editedBook => {
		res.status(200).send(editedBook);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}

function deleteBook(req, res) {
	
	BookService.remove(req.body.bookId)
	.then(validate => {
		res.status(200).send(validate);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}