System.register(["@angular/core", "../../../_services/index"], function (exports_1, context_1) {
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
    var core_1, index_1, StructureComponent;
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
            StructureComponent = (function () {
                function StructureComponent(bookService, alertService) {
                    this.bookService = bookService;
                    this.alertService = alertService;
                    this.showModalCreateBook = false;
                    this.showModalEditBook = false;
                    this.showModalRemoveBook = false;
                    this.shownActions = false;
                }
                StructureComponent.prototype.ngOnInit = function () {
                    //console.log('book', this);
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], StructureComponent.prototype, "library", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], StructureComponent.prototype, "books", void 0);
                StructureComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: './structure.component.html',
                        selector: 'structure-component'
                    }),
                    __metadata("design:paramtypes", [index_1.BookService, index_1.AlertService])
                ], StructureComponent);
                return StructureComponent;
            }());
            exports_1("StructureComponent", StructureComponent);
        }
    };
});
//# sourceMappingURL=structure.component.js.map