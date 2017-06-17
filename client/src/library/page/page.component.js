System.register(["@angular/core", "../../_models/index"], function (exports_1, context_1) {
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
    var core_1, index_1, PageComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            PageComponent = (function () {
                function PageComponent() {
                    this.pageEvent = new core_1.EventEmitter();
                }
                PageComponent.prototype.ngOnInit = function () {
                    console.log('page', this);
                };
                PageComponent.prototype.save = function () {
                    console.log('save', this);
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", index_1.Page)
                ], PageComponent.prototype, "page", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], PageComponent.prototype, "pageEvent", void 0);
                PageComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        templateUrl: 'page.component.html',
                        selector: 'page-component'
                    }),
                    __metadata("design:paramtypes", [])
                ], PageComponent);
                return PageComponent;
            }());
            exports_1("PageComponent", PageComponent);
        }
    };
});
//# sourceMappingURL=page.component.js.map