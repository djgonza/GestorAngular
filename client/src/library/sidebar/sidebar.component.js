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
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.bookEvent = new core_1.EventEmitter();
        this.fieldEvent = new core_1.EventEmitter();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.clickBook = function (book) {
        this.bookEvent.emit(new index_1.Event('SELECT_BOOK', book));
        this.fieldEvent.emit(new index_1.Event('UNSELECT_FIELD', null));
    };
    SidebarComponent.prototype.addBook = function () {
        this.bookEvent.emit(new index_1.Event('ADD_BOOK', null));
    };
    SidebarComponent.prototype.editBook = function () {
        this.bookEvent.emit(new index_1.Event('EDIT_BOOK', this.selectedBook));
    };
    SidebarComponent.prototype.removeBook = function () {
        if (confirm('¿Borrar el libro ' + this.selectedBook.getName() + '?'))
            this.bookEvent.emit(new index_1.Event('REMOVE_BOOK', this.selectedBook));
    };
    SidebarComponent.prototype.clickField = function (field) {
        this.fieldEvent.emit(new index_1.Event('SELECT_FIELD', field));
    };
    SidebarComponent.prototype.addField = function () {
        this.fieldEvent.emit(new index_1.Event('ADD_FIELD', null));
    };
    SidebarComponent.prototype.editField = function () {
        this.fieldEvent.emit(new index_1.Event('EDIT_FIELD', this.selectedField));
    };
    SidebarComponent.prototype.removeField = function () {
        if (confirm('¿Borrar el campo ' + this.selectedField.getName() + '?'))
            this.fieldEvent.emit(new index_1.Event('REMOVE_FIELD', this.selectedField));
    };
    return SidebarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SidebarComponent.prototype, "books", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Book)
], SidebarComponent.prototype, "selectedBook", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "bookEvent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Field)
], SidebarComponent.prototype, "selectedField", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "fieldEvent", void 0);
SidebarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './sidebar.component.html',
        selector: 'sidebar-component'
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map