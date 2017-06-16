var config = require('config.json');
var express = require('express');
var Q = require('q');
var connectionDb = require('middleware/connectionDb');
var libraryService =  require('services/library.service');
var router = express.Router();

var User = require('models/user.model');

// routes
router.use('/:libraryId/books', require('controllers/book.controller'));

module.exports = router;





