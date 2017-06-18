System.register(["@angular/router", "./_components/index", "./_guards/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, index_1, index_2, appRoutes, routing;
    return {
        setters: [
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
            appRoutes = [
                { path: 'library', component: index_1.LibraryComponent, canActivate: [index_2.AuthGuard] },
                { path: 'login', component: index_1.LoginComponent },
                { path: 'register', component: index_1.RegisterComponent },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map