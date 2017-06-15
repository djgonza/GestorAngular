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

router.get('/create', (req, res) => {

	connectionDb.connect();

	User.findById('123')
	.exec()
	.then((user) => {
		console.log(user);
		res.status(200).send(user);
		connectionDb.disconnect();
	})
	.catch((err) => {
		if(err) res.status(400).send(err);
	});
	
});

module.exports = router;