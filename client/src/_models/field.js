"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Field = (function () {
    function Field(_id, name) {
        this._id = _id;
        this.name = name;
    }
    /* _id */
    Field.prototype.getId = function () {
        return this._id;
    };
    /* Name */
    Field.prototype.setName = function (name) {
        this.name = name;
    };
    Field.prototype.getName = function () {
        return this.name;
    };
    return Field;
}());
exports.Field = Field;
//# sourceMappingURL=field.js.map