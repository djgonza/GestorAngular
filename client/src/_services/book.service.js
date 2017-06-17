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
var app_config_1 = require("../app.config");
var index_1 = require("../_models/index");
var BookService = (function () {
    function BookService(http, config) {
        this.http = http;
        this.config = config;
    }
    BookService.prototype.getAllBooks = function () {
        var book = new Book('123', 'Mi primer LIbro', [new index_1.NumberField('123', 'Mi primer field', 123)], [new index_1.Page('123', [
                new index_1.NumberField('123', 'Number', 123),
                new index_1.StringField('123', 'String', "hola"),
                new index_1.DateField('123', 'Date', new Date())
            ]),
            new index_1.Page('123', [
                new index_1.NumberField('123', 'Number', 123),
                new index_1.StringField('123', 'String', "hola"),
                new index_1.DateField('123', 'Date', new Date())
            ])]);
        var book1 = new Book('456', 'Mi segundo LIbro', [], []);
        var book2 = new Book('789', 'Mi tercer LIbro', [], []);
        var book3 = new Book('134', 'Mi cuarto LIbro', [], []);
        return [book, book1, book2, book3];
    };
    BookService.prototype.getBook = function (_id) {
        return new Book(_id, 'Nombre', [], []);
    };
    BookService.prototype.updateBook = function (book) {
        return book;
    };
    BookService.prototype.removeBook = function (_id) {
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
    BookService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map