var config = require('config.json');
var express = require('express');
var Q = require('q');
var connectionDb = require('middleware/connectionDb');
var libraryService =  require('services/library.service');
var router = express.Router();

var User = require('models/user.model');

// routes
router.use('/books', require('./book.controller'));
router.use('/field', require('./field.controller'));
router.use('/page', require('./page.controller'));

module.exports = router;