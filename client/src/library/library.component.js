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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var LibraryComponent = (function () {
    function LibraryComponent(libraryService, bookService, alertService) {
        var _this = this;
        this.libraryService = libraryService;
        this.bookService = bookService;
        this.alertService = alertService;
        //Set library id
        libraryService.getLibrary()
            .subscribe(function (response) {
            var res = response.json();
            _this._id = res._id;
            _this.userId = res.user; //Create new user!!!!!!! y modificar el modelo
        }, function (error) {
            _this.alertService.error(error._body);
        });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    LibraryComponent.prototype.ngOnInit = function () {
        this.loadAllBooks();
    };
    LibraryComponent.prototype.loadAllBooks = function () {
        this.books = this.bookService.getAllBooks();
    };
    LibraryComponent.prototype.bookEvent = function (event) {
        switch (event.getType()) {
            case 'SELECT_BOOK':
                this.selectedBook = event.getData();
                this.selectedBook.pages.length > 0 ? this.selectedPageIndex = 0 : this.selectedPageIndex = null;
                break;
            case 'CLOSE_MODAL':
                this.showModalBook = null;
                break;
            case 'ADD_BOOK':
                console.log('add', event.getData());
                this.showModalBook = new index_1.Book(null, '', [], []);
                break;
            case 'SAVE_BOOK':
                console.log('save', event.getData());
                break;
            case 'REMOVE_BOOK':
                console.log('remove', event.getData());
                break;
            case 'EDIT_BOOK':
                console.log('edit', event.getData());
                this.showModalBook = event.getData();
                break;
            case 'EDITED_BOOK':
                console.log('edited', event.getData());
                break;
        }
    };
    LibraryComponent.prototype.fieldEvent = function (event) {
        switch (event.getType()) {
            case 'UNSELECT_FIELD':
                this.selectedField = null;
                break;
            case 'SELECT_FIELD':
                this.selectedField = event.getData();
                break;
            case 'CLOSE_MODAL':
                this.showModalField = null;
                break;
            case 'ADD_FIELD':
                console.log('add field', event.getData());
                this.showModalField = new index_1.Field(null, '');
                break;
            case 'SAVE_FIELD':
                console.log('save field', event.getData());
                break;
            case 'REMOVE_FIELD':
                console.log('remove field', event.getData());
                break;
            case 'EDIT_FIELD':
                console.log('edit field', event.getData());
                this.showModalField = event.getData();
                break;
            case 'EDITED_FIELD':
                console.log('edited field', event.getData());
                break;
        }
    };
    LibraryComponent.prototype.changePage = function (type) {
        if (type === 'UP') {
            this.selectedPageIndex++;
        }
        else if (type === 'DOWN') {
            this.selectedPageIndex--;
        }
    };
    return LibraryComponent;
}());
LibraryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'library.component.html',
        selector: 'library-component'
    }),
    __metadata("design:paramtypes", [index_2.LibraryService, index_2.BookService, index_2.AlertService])
], LibraryComponent);
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=library.component.js.map