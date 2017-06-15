var config = require('config.json');
var express = require('express');
var router = express.Router();
var bookService = require('services/book.service');

// routes
router.get('/', getAllBooks);
router.post('/', create);
router.delete('/:id', deleteBook);
router.put('/:id', updateBook);

module.exports = router;

function getAllBooks(req, res) {
    req.user.id;
    
}

function create(req, res) {
    
}

function deleteBook(req, res) {
    
}

function updateBook(req, res) {
    
}