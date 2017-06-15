var config = require('config.json');
var express = require('express');
var router = express.Router();
var pageService = require('services/page.service');

// routes
router.get('/:bookId', getAllPages);
router.post('/:bookId', addPage);
router.delete('/:bookId/:id', deletePage);
router.put('/:bookId/:id', updatePage);

module.exports = router;

function getAllPages(req, res) {
    
}

function addPage(req, res) {
    
}

function deletePage(req, res) {
    
}

function updatePage(req, res) {
    
}