System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Field;
    return {
        setters: [],
        execute: function () {
            Field = (function () {
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
            exports_1("Field", Field);
        }
    };
});
//# sourceMappingURL=field.js.map