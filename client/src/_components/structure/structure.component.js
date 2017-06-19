System.register(["@angular/core", "../index", "../../_services/index"], function (exports_1, context_1) {
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
    var core_1, index_1, index_2, StructureComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            StructureComponent = (function () {
                function StructureComponent(bookService, alertService) {
                    this.bookService = bookService;
                    this.alertService = alertService;
                    this.shownActions = false;
                    this.showModalCreateStructure = false;
                }
                StructureComponent.prototype.ngOnInit = function () {
                };
                StructureComponent.prototype.selectStructure = function (structure) {
                    this.structureSelected = structure;
                    this.shownActions = false;
                };
                StructureComponent.prototype.showActions = function ($event, structure) {
                    this.shownActions = true;
                    $event.stopPropagation();
                };
                StructureComponent.prototype.closeModals = function () {
                    this.showModalCreateStructure = false;
                };
                StructureComponent.prototype.createStructure = function (structure) {
                    var _this = this;
                    var temporalBook = Object.assign({}, this.book);
                    temporalBook.structure.push(structure);
                    this.bookService.updateBook(temporalBook.library, temporalBook)
                        .subscribe(function (res) {
                        var newStructure = res.structure.map(function (structure) {
                            return new index_1.Structure(structure.ref, structure.valueType, structure.name, structure._id);
                        });
                        _this.book.structure = newStructure;
                        _this.closeModals();
                        _this.alertService.success("Campo '" + structure.name + "' creado con exito");
                    }, function (err) {
                    });
                };
                StructureComponent.prototype.editStructure = function () {
                    console.log("edit");
                };
                StructureComponent.prototype.removeStructure = function () {
                    console.log("remove");
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", index_1.Book)
                ], StructureComponent.prototype, "book", void 0);
                StructureComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: './structure.component.html',
                        selector: 'structure-component'
                    }),
                    __metadata("design:paramtypes", [index_2.BookService, index_2.AlertService])
                ], StructureComponent);
                return StructureComponent;
            }());
            exports_1("StructureComponent", StructureComponent);
        }
    };
});
//# sourceMappingURL=structure.component.js.map