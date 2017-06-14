"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = (function () {
    function Event(type, data) {
        this.type = type;
        this.data = data;
    }
    Event.prototype.getType = function () {
        return this.type;
    };
    Event.prototype.getData = function () {
        return this.data;
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map