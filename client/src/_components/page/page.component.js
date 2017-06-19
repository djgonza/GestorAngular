System.register(["@angular/core", "../index", "../../_services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, index_1, index_2, PageComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            PageComponent = (function () {
                function PageComponent(bookService, alertService) {
                    this.bookService = bookService;
                    this.alertService = alertService;
                    this.pages = [];
                    this.pageIndex = 0;
                    this.showModalNewPage = false;
                }
                PageComponent.prototype.ngOnInit = function () {
                };
                PageComponent.prototype.ngOnChanges = function (changes) {
                    if (changes.book) {
                        this.book = changes.book.currentValue;
                        this.initBook();
                    }
                };
                PageComponent.prototype.initBook = function () {
                    this.loadAllPages();
                    this.pageIndex = 0;
                };
                PageComponent.prototype.setValueFromPageData = function (event) {
                    var data = this.pages[this.pageIndex].data;
                    var index = data.findIndex(function (data) { return data.ref === event.ref; });
                    data[index].value = event.value;
                };
                PageComponent.prototype.getValueFromPageData = function (ref) {
                    var data = this.pages[this.pageIndex].data;
                    var index = data.findIndex(function (data) { return data.ref === ref; });
                    if (index > -1 && data[index]) {
                        return data[index]['value'];
                    }
                    index = data.push(new index_1.PageField(ref, null)) - 1;
                    return data[index].value;
                };
                PageComponent.prototype.loadAllPages = function () {
                    var _this = this;
                    this.bookService.getAllPages(this.book.library, this.book._id)
                        .subscribe(function (res) {
                        _this.pages = res.map(function (page) {
                            var pageFields = page.data.map(function (field) {
                                return new index_1.PageField(field.ref, field.value);
                            });
                            return new index_1.Page(page._id, page.book, pageFields);
                        });
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                PageComponent.prototype.saveCurrentPage = function () {
                    var _this = this;
                    this.bookService.savePage(this.book.library, this.book._id, this.pages[this.pageIndex])
                        .subscribe(function (res) {
                        _this.alertService.success('Pagina guardada correctamente!');
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                PageComponent.prototype.createNewPage = function () {
                    var _this = this;
                    var page = new index_1.Page(null, this.book._id, []);
                    this.bookService.addPage(this.book.library, this.book._id, page)
                        .subscribe(function (res) {
                        _this.pageIndex = _this.pages.push(new index_1.Page(res._id, res.book, res.data)) - 1;
                        _this.alertService.success('Pagina creada correctamente!');
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                };
                PageComponent.prototype.nextPage = function () {
                    this.pageIndex += 1;
                };
                PageComponent.prototype.previusPage = function () {
                    this.pageIndex -= 1;
                };
                PageComponent.prototype.search = function () {
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", index_1.Book)
                ], PageComponent.prototype, "book", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], PageComponent.prototype, "pages", void 0);
                PageComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: './page.component.html',
                        selector: 'page-component'
                    }),
                    __metadata("design:paramtypes", [index_2.BookService, index_2.AlertService])
                ], PageComponent);
                return PageComponent;
            }());
            exports_1("PageComponent", PageComponent);
        }
    };
});
//# sourceMappingURL=page.component.js.map