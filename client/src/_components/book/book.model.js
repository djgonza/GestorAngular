System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Book, BookStructure;
    return {
        setters: [],
        execute: function () {
            Book = (function () {
                function Book(_id, name, library, structure) {
                    this._id = _id;
                    this.name = name;
                    this.library = library;
                    this.structure = structure;
                }
                return Book;
            }());
            exports_1("Book", Book);
            BookStructure = (function () {
                function BookStructure(ref, valueType, name, _id) {
                    this.ref = ref;
                    this.valueType = valueType;
                    this.name = name;
                    this._id = _id;
                }
                return BookStructure;
            }());
            exports_1("BookStructure", BookStructure);
        }
    };
});
//# sourceMappingURL=book.model.js.map