var config = require('config.json');
var mongoose = require('mongoose');
var Book = require('./../models/Book');
mongoose.Promise = global.Promise;

var service = {};

service.getAll = getAll;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function getAll(userId) {
      
    mongoose.connect(config.connectionString);

    //Buscamos la libreria
    //Buscamos los libros de la libreria

    mongoose.connection.close();

}

function create () {

}

function _delete () {
    
}

function update () {
    
}