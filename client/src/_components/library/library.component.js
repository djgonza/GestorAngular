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
var index_1 = require("../../_services/index");
var Library = (function () {
    function Library(libraryService, alertService) {
        this.libraryService = libraryService;
        this.alertService = alertService;
        this.load();
    }
    Library.prototype.ngOnInit = function () {
        console.log('library', this);
    };
    Library.prototype.load = function () {
        this.loadUserDetail();
        this.loadLibrary();
    };
    Library.prototype.loadUserDetail = function () {
        var _this = this;
        this.libraryService.getUser()
            .subscribe(function (user) {
            _this.user = user;
        }, function (err) {
        });
    };
    Library.prototype.loadLibrary = function () {
        var _this = this;
        this.libraryService.getLibrary()
            .subscribe(function (libraryId) {
            _this._id = libraryId;
            _this.loadBooks(libraryId);
        }, function (err) {
        });
    };
    Library.prototype.loadBooks = function (libraryId) {
        this.libraryService.getAllBooks(this._id)
            .subscribe(function (books) {
            console.log('loaded books', books);
        }, function (err) {
        });
    };
    return Library;
}());
Library = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'library.component.html',
        selector: 'library-component'
    }),
    __metadata("design:paramtypes", [index_1.LibraryService, index_1.AlertService])
], Library);
exports.Library = Library;
//# sourceMappingURL=library.component.js.map