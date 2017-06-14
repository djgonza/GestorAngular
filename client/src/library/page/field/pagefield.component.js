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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../../_models/index");
var PageFieldComponent = (function () {
    function PageFieldComponent() {
        this.pageFieldEvent = new core_1.EventEmitter();
        console.log('field', this);
    }
    PageFieldComponent.prototype.ngOnInit = function () {
        if (this.field instanceof index_1.NumberField) {
            this.type = 'NUMBER';
            this.field = this.field;
        }
        if (this.field instanceof index_1.StringField) {
            this.type = 'STRING';
            this.field = this.field;
        }
        if (this.field instanceof index_1.DateField) {
            this.type = 'DATE';
            this.field = this.field;
        }
        console.log('field', this);
    };
    PageFieldComponent.prototype.validate = function (value) {
        if (this.type === 'NUMBER' && this.validateNumber(value)) {
            this.field.value = value;
        }
        if (this.type === 'STRING' && this.validateString(value)) {
            this.field.value = value;
        }
        if (this.type === 'DATE' && this.validateDate(value)) {
            this.field.value = new Date(value);
        }
    };
    PageFieldComponent.prototype.validateNumber = function (value) {
        if (Number(value)) {
            return true;
        }
        return false;
    };
    PageFieldComponent.prototype.validateString = function (value) {
        if (String(value)) {
            return true;
        }
        return false;
    };
    PageFieldComponent.prototype.validateDate = function (value) {
        var date = Date.parse(value);
        if (Number(date)) {
            return true;
        }
        return false;
    };
    return PageFieldComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Field)
], PageFieldComponent.prototype, "field", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PageFieldComponent.prototype, "pageFieldEvent", void 0);
PageFieldComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'pagefield.component.html',
        selector: 'pagefield-component'
    }),
    __metadata("design:paramtypes", [])
], PageFieldComponent);
exports.PageFieldComponent = PageFieldComponent;
//# sourceMappingURL=pagefield.component.js.map