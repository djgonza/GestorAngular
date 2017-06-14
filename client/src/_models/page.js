"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Page = (function () {
    function Page(_id, fields) {
        this._id = _id;
        this.fields = fields;
    }
    /* _id */
    Page.prototype.getId = function () {
        return this._id;
    };
    /* Fields */
    Page.prototype.addField = function (field) {
        this.fields.push(field);
    };
    Page.prototype.getField = function (index) {
        return this.fields[index];
    };
    Page.prototype.getFields = function () {
        return this.fields;
    };
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.js.map