System.register(["./page.component", "./page.model", "./pageField/index"], function (exports_1, context_1) {
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
            function (page_component_1_1) {
                exportStar_1(page_component_1_1);
            },
            function (page_model_1_1) {
                exportStar_1(page_model_1_1);
            },
            function (index_1_1) {
                exportStar_1(index_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map