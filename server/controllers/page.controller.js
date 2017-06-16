var config = require('config.json');
var express = require('express');
var router = express.Router();
var PageService = require('services/page.service');

// routes
router.get('/', getAllPages);
router.get('/:pageId', getPage);
router.post('/', createPage);
router.put('/:pageId', updatePage);
router.delete('/:pageId', deletePage);

module.exports = router;

function getAllPages(req, res) {
	
	PageService.loadAll(req.params.bookId)
	.then(pages => {
		res.status(200).send(pages);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}

function getPage (req, res) {

	PageService.load(req.params.pageId)
	.then(page => {
		res.status(200).send(page);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}

function createPage(req, res) {
	
	PageService.create (req.params.bookId, req.body.data)
	.then(page => {
		res.status(200).send(page);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}

function updatePage(req, res) {
	
	PageService.update (req.params.pageId, req.body.newPage)
	.then(page => {
		res.status(200).send(page);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}

function deletePage(req, res) {
	
	PageService.remove (req.params.pageId)
	.then(validate => {
		res.status(200).send(validate);
	})
	.catch(err => {
		res.status(401).send(err);
	});

}