"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var field_1 = require("./field");
var page_1 = require("./page");
{
    return this._id;
}
/* Name */
setName(name, string);
void {
    this: .name = name
};
getName();
string;
{
    return this.name;
}
/* Field */
addField(field, field_1.Field);
void {
    this: .fields.push(field)
};
getField(index, number);
field_1.Field;
{
    return this.fields[index];
}
getFields();
field_1.Field[];
{
    return this.fields;
}
/* Page */
addPage(field, field_1.Field);
void {
    this: .fields.push(field)
};
getPage(index, number);
page_1.Page;
{
    return this.pages[index];
}
getPages();
page_1.Page[];
{
    return this.pages;
}
//# sourceMappingURL=book.js.map