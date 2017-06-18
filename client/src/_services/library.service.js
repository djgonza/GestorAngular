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
    var core_1, http_1, Observable_1, index_1, app_config_1, LibraryService;
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
            LibraryService = (function () {
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
                        return res.json();
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                LibraryService.prototype.getAllBooks = function (libraryId) {
                    var url = this.config.apiUrl + "/library/" + libraryId + "/books";
                    return this.http.get(url, index_1.Jwt.createHeader())
                        .map(function (res) {
                        var parsedRes = res.json();
                        return parsedRes.map(function (book) {
                            return book;
                        });
                    })
                        .catch(function (err) {
                        return Observable_1.Observable.throw(err);
                    });
                };
                LibraryService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
                ], LibraryService);
                return LibraryService;
            }());
            exports_1("LibraryService", LibraryService);
        }
    };
});
//# sourceMappingURL=library.service.js.map