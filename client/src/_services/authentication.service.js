System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/Rx", "../app.config"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, app_config_1, AuthenticationService;
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
            function (_1) {
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }
        ],
        execute: function () {
            AuthenticationService = (function () {
                function AuthenticationService(http, config) {
                    this.http = http;
                    this.config = config;
                }
                AuthenticationService.prototype.login = function (username, password) {
                    return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
                        .map(function (response) {
                        // login successful if there's a jwt token in the response
                        var res = response.json();
                        if (res.token) {
                            // save token
                            localStorage.setItem('token', JSON.stringify(res.token));
                        }
                    })
                        .catch(function (res) {
                        return Observable_1.Observable.throw(res);
                    });
                };
                AuthenticationService.prototype.logout = function () {
                    // remove user from local storage to log user out
                    localStorage.removeItem('token');
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    };
});
//# sourceMappingURL=authentication.service.js.map