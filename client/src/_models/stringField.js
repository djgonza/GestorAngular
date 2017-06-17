System.register(["./field"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var field_1, StringField;
    return {
        setters: [
            function (field_1_1) {
                field_1 = field_1_1;
            }
        ],
        execute: function () {
            StringField = (function (_super) {
                __extends(StringField, _super);
                function StringField(_id, name, value) {
                    var _this = _super.call(this, _id, name) || this;
                    _this.value = value;
                    return _this;
                }
                /* Value */
                StringField.prototype.getValue = function () {
                    return this.value;
                };
                StringField.prototype.setValue = function (value) {
                    this.value = value;
                };
                return StringField;
            }(field_1.Field));
            exports_1("StringField", StringField);
        }
    };
});
//# sourceMappingURL=stringField.js.map