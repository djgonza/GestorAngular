System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Book;
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
        }
    };
});
//# sourceMappingURL=book.model.js.map