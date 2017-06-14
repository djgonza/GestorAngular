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
var index_1 = require("../../_models/index");
var ModalField = (function () {
    function ModalField() {
        this.fieldEvent = new core_1.EventEmitter();
    }
    ModalField.prototype.ngOnInit = function () {
        this.validate(this.field.name);
    };
    ModalField.prototype.validate = function (name) {
        if (name !== '' && name.length < 25) {
            this.valid = true;
            this.field.setName(name);
            return;
        }
        this.valid = false;
    };
    ModalField.prototype.save = function () {
        if (!this.field.getId()) {
            this.fieldEvent.emit(new index_1.Event('SAVE_FIELD', this.field));
        }
        else {
            this.fieldEvent.emit(new index_1.Event('EDITED_FIELD', this.field));
        }
    };
    ModalField.prototype.close = function () {
        this.fieldEvent.emit(new index_1.Event('CLOSE_MODAL', null));
    };
    ModalField.prototype.getValue = function () {
        return this.field.getName();
    };
    return ModalField;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Field)
], ModalField.prototype, "field", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ModalField.prototype, "fieldEvent", void 0);
ModalField = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'modalfield.component.html',
        selector: 'modalfield-component'
    }),
    __metadata("design:paramtypes", [])
], ModalField);
exports.ModalField = ModalField;
//# sourceMappingURL=modalfield.component.js.map