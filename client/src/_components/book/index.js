System.register(["./book.component", "./book.model", "./modalCreateBook/index", "./modalEditBook/index", "./modalRemoveBook/index"], function (exports_1, context_1) {
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
            function (book_component_1_1) {
                exportStar_1(book_component_1_1);
            },
            function (book_model_1_1) {
                exportStar_1(book_model_1_1);
            },
            function (index_1_1) {
                exportStar_1(index_1_1);
            },
            function (index_2_1) {
                exportStar_1(index_2_1);
            },
            function (index_3_1) {
                exportStar_1(index_3_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map