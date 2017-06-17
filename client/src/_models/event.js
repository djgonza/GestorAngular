System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Event;
    return {
        setters: [],
        execute: function () {
            Event = (function () {
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
            exports_1("Event", Event);
        }
    };
});
//# sourceMappingURL=event.js.map