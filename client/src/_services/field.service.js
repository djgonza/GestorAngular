System.register(["@angular/core", "@angular/http", "../app.config", "../_models/index"], function (exports_1, context_1) {
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
    var core_1, http_1, app_config_1, index_1, FieldService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            FieldService = (function () {
                function FieldService(http, config) {
                    this.http = http;
                    this.config = config;
                }
                FieldService.prototype.getAllFields = function (bookId) {
                    var field = new index_1.DateField('123', 'Mi primer Field Date', new Date());
                    var field1 = new index_1.StringField('123', 'Mi segundo Field String', 'El valor');
                    var field2 = new index_1.NumberField('123', 'Mi tercer Field Number', 123);
                    return [field, field1, field2];
                };
                FieldService.prototype.getField = function (_id) {
                    return new index_1.NumberField(_id, 'Nombre', 345);
                };
                FieldService.prototype.updateField = function (field) {
                    return field;
                };
                FieldService.prototype.removeField = function (_id) {
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
                FieldService.prototype.jwt = function () {
                    // create authorization header with jwt token
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (currentUser && currentUser.token) {
                        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
                        return new http_1.RequestOptions({ headers: headers });
                    }
                };
                FieldService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
                ], FieldService);
                return FieldService;
            }());
            exports_1("FieldService", FieldService);
        }
    };
});
//# sourceMappingURL=field.service.js.map