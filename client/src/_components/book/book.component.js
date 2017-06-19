System.register(["@angular/core", "./index", "../../_services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, index_1, index_2, BookComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            BookComponent = (function () {
                function BookComponent(bookService, alertService) {
                    this.bookService = bookService;
                    this.alertService = alertService;
                    this.bookEvent = new core_1.EventEmitter();
                    this.showModalCreateBook = false;
                    this.showModalEditBook = false;
                    this.showModalRemoveBook = false;
                    this.shownActions = false;
                }
                BookComponent.prototype.selectBook = function (book) {
                    this.bookSelected = book;
                    this.shownActions = false;
                    this.bookEvent.emit(book);
                };
                BookComponent.prototype.showActions = function ($event, book) {
                    this.shownActions = true;
                    $event.stopPropagation();
                };
                BookComponent.prototype.closeModals = function () {
                    this.showModalCreateBook = false;
                    this.showModalEditBook = false;
                    this.showModalRemoveBook = false;
                };
                BookComponent.prototype.saveBook = function (book) {
                    var _this = this;
                    this.bookService.saveBook(this.library, book)
                        .subscribe(function (res) {
                        _this.books.push(new index_1.Book(res._id, res.name, res.library, res.structure));
                        _this.alertService.success("Libro '" + res.name + "' creado Correctamente");
                        _this.closeModals();
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                BookComponent.prototype.updateBook = function (updatedBook) {
                    var _this = this;
                    this.bookService.updateBook(this.library, updatedBook)
                        .subscribe(function (res) {
                        var editedBook = new index_1.Book(res._id, res.name, res.library, res.structure);
                        _this.books[_this.searchBook(editedBook._id)] = editedBook;
                        _this.alertService.success("Libro '" + editedBook.name + "' editado Correctamente");
                        _this.closeModals();
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                BookComponent.prototype.removeBook = function (book) {
                    var _this = this;
                    this.bookService.removeBook(this.library, book)
                        .subscribe(function (res) {
                        _this.books.splice(_this.searchBook(res._id), 1);
                        _this.alertService.success("Libro '" + res.name + "' eliminado Correctamente");
                        _this.closeModals();
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                BookComponent.prototype.searchBook = function (_id) {
                    var index = -1;
                    this.books.map(function (book, bookIndex) {
                        if (_id === book._id)
                            index = bookIndex;
                    });
                    return index;
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], BookComponent.prototype, "library", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], BookComponent.prototype, "books", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], BookComponent.prototype, "bookEvent", void 0);
                BookComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: './book.component.html',
                        selector: 'book-component'
                    }),
                    __metadata("design:paramtypes", [index_2.BookService, index_2.AlertService])
                ], BookComponent);
                return BookComponent;
            }());
            exports_1("BookComponent", BookComponent);
        }
    };
});
//# sourceMappingURL=book.component.js.map