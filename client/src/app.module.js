System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "@angular/forms", "./_components/index", "./_guards/index", "./_services/index", "./app.routing", "./app.config"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, http_1, forms_1, index_1, index_2, index_3, app_routing_1, app_config_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            forms_1.FormsModule,
                            app_routing_1.routing
                        ],
                        declarations: [
                            index_1.AppComponent,
                            index_1.LoginComponent,
                            index_1.RegisterComponent,
                            index_1.LibraryComponent,
                            index_1.AlertComponent,
                            index_1.BookComponent,
                            index_1.UserComponent,
                            index_1.ModalCreateBook,
                            index_1.ModalEditBook,
                            index_1.ModalRemoveBook,
                            index_1.StructureComponent,
                            index_1.ModalCreateStructure,
                            index_1.PageComponent,
                            index_1.PageFieldComponent
                        ],
                        providers: [
                            app_config_1.AppConfig,
                            index_2.AuthGuard,
                            index_2.Jwt,
                            index_3.AlertService,
                            index_3.AuthenticationService,
                            index_3.LibraryService,
                            index_3.UserService,
                            index_3.BookService
                        ],
                        bootstrap: [index_1.AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map