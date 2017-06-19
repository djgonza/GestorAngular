System.register(["@angular/core", "../index"], function (exports_1, context_1) {
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
    var core_1, index_1, ModalCreateStructure;
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
            ModalCreateStructure = (function () {
                function ModalCreateStructure() {
                    this.selectablesValuesType = index_1.SelectablesValuesType;
                    this.valueType = '';
                    this.name = '';
                    this.validName = false;
                    this.validType = false;
                    this.submited = false;
                    this.newStructure = new core_1.EventEmitter();
                    this.closeModal = new core_1.EventEmitter();
                }
                ModalCreateStructure.prototype.validate = function () {
                    if (this.name == '' || this.name.length > 20 || this.valueType == '') {
                        this.valid = false;
                        return;
                    }
                    this.valid = true;
                };
                ModalCreateStructure.prototype.setName = function (name) {
                    this.name = name;
                    this.validate();
                };
                ModalCreateStructure.prototype.setType = function (valueType) {
                    this.valueType = valueType;
                    this.validate();
                };
                ModalCreateStructure.prototype.close = function () {
                    this.closeModal.emit(true);
                };
                ModalCreateStructure.prototype.save = function () {
                    if (this.valid) {
                        this.newStructure.emit(new index_1.Structure(this.name, this.valueType, this.name, null));
                    }
                };
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], ModalCreateStructure.prototype, "newStructure", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], ModalCreateStructure.prototype, "closeModal", void 0);
                ModalCreateStructure = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: './modalCreateStructure.component.html',
                        selector: 'modal-create-structure-component'
                    })
                ], ModalCreateStructure);
                return ModalCreateStructure;
            }());
            exports_1("ModalCreateStructure", ModalCreateStructure);
        }
    };
});
//# sourceMappingURL=modalCreateStructure.component.js.map