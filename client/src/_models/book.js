"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = (function () {
    function Book(_id, name, fields, pages) {
        this._id = _id;
        this.name = name;
        this.fields = fields;
        this.pages = pages;
    }
    /* _id */
    Book.prototype.getId = function () {
        return this._id;
    };
    /* Name */
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.getName = function () {
        return this.name;
    };
    /* Field */
    Book.prototype.addField = function (field) {
        this.fields.push(field);
    };
    Book.prototype.getField = function (index) {
        return this.fields[index];
    };
    Book.prototype.getFields = function () {
        return this.fields;
    };
    /* Page */
    Book.prototype.addPage = function (field) {
        this.fields.push(field);
    };
    Book.prototype.getPage = function (index) {
        return this.pages[index];
    };
    Book.prototype.getPages = function () {
        return this.pages;
    };
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map