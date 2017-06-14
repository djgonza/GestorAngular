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
Object.defineProperty(exports, "__esModule", { value: true });
var field_1 = require("./field");
var NumberField = (function (_super) {
    __extends(NumberField, _super);
    function NumberField(_id, name, value) {
        var _this = _super.call(this, _id, name) || this;
        _this.value = value;
        return _this;
    }
    /* Value */
    NumberField.prototype.getValue = function () {
        return this.value;
    };
    NumberField.prototype.setValue = function (value) {
        this.value = value;
    };
    return NumberField;
}(field_1.Field));
exports.NumberField = NumberField;
//# sourceMappingURL=numberField.js.map