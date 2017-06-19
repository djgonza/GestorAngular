System.register(["@angular/core", "@angular/router", "../index", "../../_services/index"], function (exports_1, context_1) {
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
    var core_1, router_1, index_1, index_2, RegisterComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            RegisterComponent = (function () {
                function RegisterComponent(router, userService, alertService) {
                    this.router = router;
                    this.userService = userService;
                    this.alertService = alertService;
                    this.user = new index_1.User(null, '', '', '', '', '');
                    this.isValidFirstName = false;
                    this.isValidLastName = false;
                    this.isValidUserName = false;
                    this.isValidEmail = false;
                    this.isValidPassword = false;
                    this.isDuplicateUsername = true;
                    this.isSubmited = false;
                    this.isLoanding = false;
                }
                RegisterComponent.prototype.validate = function () {
                    if (this.isValidFirstName &&
                        this.isValidLastName &&
                        this.isValidUserName &&
                        this.isValidEmail &&
                        this.isValidPassword) {
                        return true;
                    }
                    return false;
                };
                RegisterComponent.prototype.validateFirstName = function (value) {
                    this.user.firstName = value;
                    if (value != '') {
                        this.isValidFirstName = true;
                        return;
                    }
                    this.isValidFirstName = false;
                };
                RegisterComponent.prototype.validateLastName = function (value) {
                    this.user.lastName = value;
                    if (value != '') {
                        this.isValidLastName = true;
                        return;
                    }
                    this.isValidLastName = false;
                };
                RegisterComponent.prototype.validateUserName = function (value) {
                    this.user.username = value;
                    if (value != '') {
                        this.isValidUserName = true;
                        return;
                    }
                    this.isValidUserName = false;
                };
                RegisterComponent.prototype.validateEmail = function (value) {
                    this.user.email = value;
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (value != '' && re.test(value)) {
                        this.isValidEmail = true;
                        return;
                    }
                    this.isValidEmail = false;
                };
                RegisterComponent.prototype.validatePassword = function (value) {
                    this.user.password = value;
                    if (value != '' && value.length >= 8) {
                        this.isValidPassword = true;
                        return;
                    }
                    this.isValidPassword = false;
                };
                RegisterComponent.prototype.save = function () {
                    var _this = this;
                    this.isSubmited = true;
                    if (this.validate()) {
                        this.isLoanding = true;
                        this.userService.create(this.user)
                            .subscribe(function (res) {
                            _this.alertService.success('Usuario creado con exito', true);
                            _this.router.navigate(['/login']);
                        }, function (err) {
                            console.log(err.status);
                            if (err.status == 409) {
                                _this.isDuplicateUsername = true;
                                _this.isValidUserName = false;
                                _this.isLoanding = false;
                            }
                            else {
                                _this.alertService.error(err);
                                _this.isLoanding = false;
                            }
                        });
                    }
                };
                RegisterComponent.prototype.login = function () {
                    this.router.navigate(['/login']);
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: 'register.component.html',
                        selector: 'register-component'
                    }),
                    __metadata("design:paramtypes", [router_1.Router, index_2.UserService, index_2.AlertService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    };
});
//# sourceMappingURL=register.component.js.map