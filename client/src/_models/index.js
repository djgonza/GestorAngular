System.register(["./user", "./book", "./page", "./field", "./dateField", "./stringField", "./numberField", "./event"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (user_1_1) {
                exportStar_1(user_1_1);
            },
            function (book_1_1) {
                exportStar_1(book_1_1);
            },
            function (page_1_1) {
                exportStar_1(page_1_1);
            },
            function (field_1_1) {
                exportStar_1(field_1_1);
            },
            function (dateField_1_1) {
                exportStar_1(dateField_1_1);
            },
            function (stringField_1_1) {
                exportStar_1(stringField_1_1);
            },
            function (numberField_1_1) {
                exportStar_1(numberField_1_1);
            },
            function (event_1_1) {
                exportStar_1(event_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map