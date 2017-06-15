var config = require('config.json');
var express = require('express');
var router = express.Router();

// routes
router.use('/books', require('./book.controller'));
router.use('/field', require('./field.controller'));
router.use('/page', require('./page.controller'));

module.exports = router;