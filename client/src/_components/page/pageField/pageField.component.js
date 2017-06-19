System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, PageFieldComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            PageFieldComponent = (function () {
                //@Output() 
                function PageFieldComponent() {
                    this.valueChanged = new core_1.EventEmitter();
                }
                PageFieldComponent.prototype.ngOnInit = function () {
                };
                PageFieldComponent.prototype.validate = function (value) {
                    this.value = value;
                    this.changeValue();
                };
                PageFieldComponent.prototype.changeValue = function () {
                    this.valueChanged.emit({ value: this.value, ref: this.ref });
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], PageFieldComponent.prototype, "ref", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], PageFieldComponent.prototype, "value", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], PageFieldComponent.prototype, "name", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], PageFieldComponent.prototype, "valueType", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], PageFieldComponent.prototype, "valueChanged", void 0);
                PageFieldComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: './pageField.component.html',
                        selector: 'page-field-component'
                    }),
                    __metadata("design:paramtypes", [])
                ], PageFieldComponent);
                return PageFieldComponent;
            }());
            exports_1("PageFieldComponent", PageFieldComponent);
        }
    };
});
//# sourceMappingURL=pageField.component.js.map