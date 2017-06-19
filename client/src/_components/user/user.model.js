System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters: [],
        execute: function () {
            User = (function () {
                function User(_id, username, firstName, lastName, email, password) {
                    this._id = _id;
                    this.username = username;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.password = password;
                }
                return User;
            }());
            exports_1("User", User);
        }
    };
});
//# sourceMappingURL=user.model.js.map