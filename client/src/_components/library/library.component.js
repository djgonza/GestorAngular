System.register(["@angular/core", "../index", "../../_services/index"], function (exports_1, context_1) {
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
    var core_1, index_1, index_2, LibraryComponent;
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
            LibraryComponent = (function () {
                function LibraryComponent(libraryService, alertService) {
                    this.libraryService = libraryService;
                    this.alertService = alertService;
                    this.books = [];
                    this.load();
                }
                LibraryComponent.prototype.ngOnInit = function () {
                    //console.log('library', this);
                };
                LibraryComponent.prototype.show = function () {
                    console.log('library', this);
                };
                LibraryComponent.prototype.load = function () {
                    this.loadUserDetail();
                    this.loadLibrary();
                };
                LibraryComponent.prototype.loadUserDetail = function () {
                    var _this = this;
                    this.libraryService.getUser()
                        .subscribe(function (user) {
                        _this.user = new index_1.User(user._id, user.username, user.firstName, user.lastName, user.email);
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                LibraryComponent.prototype.loadLibrary = function () {
                    var _this = this;
                    this.libraryService.getLibrary()
                        .subscribe(function (libraryId) {
                        _this._id = libraryId;
                        _this.loadBooks(libraryId);
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                LibraryComponent.prototype.loadBooks = function (libraryId) {
                    var _this = this;
                    this.libraryService.getAllBooks(this._id)
                        .subscribe(function (books) {
                        books.map(function (book) {
                            _this.books.push(new index_1.Book(book._id, book.name, book.library, book.structure));
                        });
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                LibraryComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: './library.component.html',
                        selector: 'library-component'
                    }),
                    __metadata("design:paramtypes", [index_2.LibraryService, index_2.AlertService])
                ], LibraryComponent);
                return LibraryComponent;
            }());
            exports_1("LibraryComponent", LibraryComponent);
        }
    };
});
//# sourceMappingURL=library.component.js.map