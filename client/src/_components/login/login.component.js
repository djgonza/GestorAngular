System.register(["@angular/core", "@angular/router", "../../_services/index"], function (exports_1, context_1) {
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
    var core_1, router_1, index_1, LoginComponent;
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
            }
        ],
        execute: function () {
            LoginComponent = (function () {
                function LoginComponent(route, router, authenticationService, alertService) {
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.alertService = alertService;
                    this.username = "";
                    this.password = "";
                    this.loading = false;
                    this.sended = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    // reset login status
                    this.authenticationService.logout();
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.loading = true;
                    this.authenticationService.login(this.username, this.password)
                        .subscribe(function (token) {
                        _this.router.navigate(['/library']);
                    }, function (error) {
                        _this.alertService.error(error._body);
                        _this.sended = true;
                        _this.loading = false;
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'login-component',
                        templateUrl: 'login.component.html'
                    }),
                    __metadata("design:paramtypes", [router_1.ActivatedRoute,
                        router_1.Router,
                        index_1.AuthenticationService,
                        index_1.AlertService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.component.js.map