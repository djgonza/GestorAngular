System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Page;
    return {
        setters: [],
        execute: function () {
            Page = (function () {
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
            exports_1("Page", Page);
        }
    };
});
//# sourceMappingURL=page.js.map