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
var ModalBook = (function () {
    function ModalBook() {
        this.bookEvent = new core_1.EventEmitter();
    }
    ModalBook.prototype.ngOnInit = function () {
        this.validate(this.book.name);
    };
    ModalBook.prototype.validate = function (name) {
        if (name !== '' && name.length < 25) {
            this.valid = true;
            this.book.setName(name);
            return;
        }
        this.valid = false;
    };
    ModalBook.prototype.save = function () {
        if (!this.book.getId()) {
            this.bookEvent.emit(new index_1.Event('SAVE_BOOK', this.book));
        }
        else {
            this.bookEvent.emit(new index_1.Event('EDITED_BOOK', this.book));
        }
    };
    ModalBook.prototype.close = function () {
        this.bookEvent.emit(new index_1.Event('CLOSE_MODAL', null));
    };
    ModalBook.prototype.getValue = function () {
        return this.book.getName();
    };
    return ModalBook;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalBook.prototype, "book", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ModalBook.prototype, "bookEvent", void 0);
ModalBook = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'modalbook.component.html',
        selector: 'modalbook-component'
    }),
    __metadata("design:paramtypes", [])
], ModalBook);
exports.ModalBook = ModalBook;
//# sourceMappingURL=modalBook.component.js.map