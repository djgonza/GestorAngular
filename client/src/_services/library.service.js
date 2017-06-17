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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var index_1 = require("../_guards/index");
var app_config_1 = require("../app.config");
var index_2 = require("../_models/index");
var LibraryService = (function () {
    function LibraryService(http, config) {
        this.http = http;
        this.config = config;
    }
    LibraryService.prototype.getLibrary = function () {
        return this.http.get(this.config.apiUrl + '/library', index_1.Jwt.createHeader())
            .map(function (res) {
            return res.json()._id;
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    LibraryService.prototype.getUser = function () {
        return this.http.get(this.config.apiUrl + '/users', index_1.Jwt.createHeader())
            .map(function (res) {
            var user = res.json();
            return new index_2.User(user._id, user.username, user.firstName, user.lastName, user.email);
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    LibraryService.prototype.getAllBooks = function (libraryId) {
        console.log(libraryId);
        var url = this.config.apiUrl + "/library/" + libraryId + "/books";
        return this.http.get(url, index_1.Jwt.createHeader())
            .map(function (res) {
            console.log('res gab', res.json());
            var parsedRes = res.json();
            return parsedRes.map(function (book) {
                return new Book(book);
            });
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    LibraryService.prototype.getBook = function (_id) {
        return new Book(_id, 'Nombre', [], []);
    };
    LibraryService.prototype.updateBook = function (book) {
        return book;
    };
    LibraryService.prototype.removeBook = function (_id) {
        return true;
    };
    return LibraryService;
}());
LibraryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], LibraryService);
exports.LibraryService = LibraryService;
//# sourceMappingURL=library.service.js.map