"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library = (function () {
    function Library(_id, user) {
        this._id = _id;
        this.user = user;
    }
    Library.prototype.getId = function () {
        return this._id;
    };
    Library.prototype.getUser = function () {
        return this.user;
    };
    return Library;
}());
exports.Library = Library;
//# sourceMappingURL=library.js.map