System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Page, PageField;
    return {
        setters: [],
        execute: function () {
            Page = (function () {
                function Page(_id, book, data) {
                    this._id = _id;
                    this.book = book;
                    this.data = data;
                }
                return Page;
            }());
            exports_1("Page", Page);
            PageField = (function () {
                function PageField(ref, value) {
                    this.ref = ref;
                    this.value = value;
                }
                return PageField;
            }());
            exports_1("PageField", PageField);
        }
    };
});
//# sourceMappingURL=page.model.js.map