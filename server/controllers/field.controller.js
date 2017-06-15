var config = require('config.json');
var express = require('express');
var router = express.Router();
var fieldService = require('services/field.service');

// routes
router.get('/:bookId', getAllFields);
router.post('/:bookId', addField);
router.delete('/:bookId/:id', deleteField);
router.put('/:bookId/:id', updateField);

module.exports = router;

function getAllFields(req, res) {
    
}

function addField(req, res) {
    
}

function deleteField(req, res) {
    
}

function updateField(req, res) {
    
}