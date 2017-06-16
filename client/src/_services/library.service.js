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
var index_1 = require("../_guards/index");
var app_config_1 = require("../app.config");
var index_2 = require("../_models/index");
var LibraryService = (function () {
    function LibraryService(http, config) {
        this.http = http;
        this.config = config;
    }
    LibraryService.prototype.getLibrary = function () {
        return this.http.get(this.config.apiUrl + '/library', index_1.Jwt.createHeader());
    };
    //getAllBooks ():Book[] { //Revisar
    //this.http.get(this.config.apiUrl + '/users', this.jwt())
    //.map((response: Response) => response.json());
    //}
    LibraryService.prototype.getBook = function (_id) {
        return new index_2.Book(_id, 'Nombre', [], []);
    };
    LibraryService.prototype.updateBook = function (book) {
        return book;
    };
    LibraryService.prototype.removeBook = function (_id) {
        return true;
    };
    /*getAll() {
        return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this.config.apiUrl + '/users/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.config.apiUrl + '/users/register', user, this.jwt());
    }

    update(user: User) {
        return this.http.put(this.config.apiUrl + '/users/' + user._id, user, this.jwt());
    }

    delete(_id: string) {
        return this.http.delete(this.config.apiUrl + '/users/' + _id, this.jwt());
    }*/
    // private helper methods
    LibraryService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return LibraryService;
}());
LibraryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], LibraryService);
exports.LibraryService = LibraryService;
//# sourceMappingURL=library.service.js.map