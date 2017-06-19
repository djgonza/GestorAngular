System.register(["@angular/core", "@angular/http", "rxjs/Observable", "../_guards/index", "../app.config"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, index_1, app_config_1, BookService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }
        ],
        execute: function () {
            BookService = (function () {
                function BookService(http, config) {
                    this.http = http;
                    this.config = config;
                }
                BookService.prototype.saveBook = function (library, book) {
                    var url = this.config.apiUrl + "/library/" + library + "/books/";
                    var data = {
                        name: book.name,
                        structure: book.structure
                    };
                    return this.http.post(url, data, index_1.Jwt.createHeader())
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                BookService.prototype.updateBook = function (library, book) {
                    var url = this.config.apiUrl + "/library/" + library + "/books/" + book._id;
                    return this.http.put(url, book, index_1.Jwt.createHeader())
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                BookService.prototype.removeBook = function (library, book) {
                    var url = this.config.apiUrl + "/library/" + library + "/books/" + book._id;
                    return this.http.delete(url, index_1.Jwt.createHeader())
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                BookService.prototype.loadNumberOfPages = function (library, book) {
                    var url = this.config.apiUrl + "/library/" + library + "/books/" + book._id + "/numberPages";
                    return this.http.get(url, index_1.Jwt.createHeader())
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                BookService.prototype.savePage = function (library, book, page) {
                    var url = this.config.apiUrl + "/library/" + library + "/books/" + book + "/pages/" + page._id;
                    return this.http.put(url, page, index_1.Jwt.createHeader())
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                BookService.prototype.addPage = function (library, book, page) {
                    var url = this.config.apiUrl + "/library/" + library + "/books/" + book + "/pages";
                    return this.http.post(url, page, index_1.Jwt.createHeader())
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                BookService.prototype.getAllPages = function (library, book) {
                    var url = this.config.apiUrl + "/library/" + library + "/books/" + book + "/pages";
                    return this.http.get(url, index_1.Jwt.createHeader())
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                BookService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
                ], BookService);
                return BookService;
            }());
            exports_1("BookService", BookService);
        }
    };
});
//# sourceMappingURL=book.service.js.map