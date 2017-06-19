declare var __moduleName: string;

import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Book, Page, PageField } from '../index';
import { BookService, AlertService } from '../../_services/index';

@Component({
	moduleId: __moduleName,
	templateUrl: './page.component.html',
	selector: 'page-component'
})

export class PageComponent implements OnInit, OnChanges {

	@Input() book:Book;
	@Input() pages:Page[] = [];
	pageIndex:number = 0;
	showModalNewPage:boolean = false; 

	constructor (private bookService: BookService, private alertService: AlertService) {
	}

	ngOnInit () {
	}

	ngOnChanges (changes: SimpleChanges) {
		if(changes.book) {
			this.book = changes.book.currentValue;
			this.initBook();
		}
	}

	initBook () {
		this.loadAllPages();
		this.pageIndex = 0;
	}

	setValueFromPageData (event:any) {
		let data = this.pages[this.pageIndex].data;
		let index = data.findIndex(data => data.ref === event.ref);
		data[index].value = event.value;
	}

	getValueFromPageData (ref:string) {
		let data = this.pages[this.pageIndex].data;
		let index = data.findIndex(data => data.ref === ref);
		if(index > -1 && data[index]){
			return data[index]['value'];
		}
		index = data.push(new PageField(ref, null)) - 1;
		return data[index].value;

	}

	loadAllPages () {
		this.bookService.getAllPages(this.book.library, this.book._id)
		.subscribe((res:any) => {
			this.pages = res.map((page:any) => {
				let pageFields = page.data.map((field:any) => {
					return new PageField(field.ref, field.value);
				});
				return new Page(page._id, page.book, pageFields);
			});
		}, (err:any) => {
			this.alertService.error(err);
		});
	}

	saveCurrentPage () {
		this.bookService.savePage(this.book.library, this.book._id, this.pages[this.pageIndex])
		.subscribe((res:any) => {
			this.alertService.success('Pagina guardada correctamente!');
		}, (err:any) => {
			this.alertService.error(err);
		});
	}

	createNewPage () {
		let page =  new Page(null, this.book._id, []);
		this.bookService.addPage(this.book.library, this.book._id, page)
		.subscribe((res:any) => {
			this.pageIndex = this.pages.push(new Page(res._id, res.book, res.data)) -1;
			this.alertService.success('Pagina creada correctamente!');
		}, (err:any) => {
			this.alertService.error(err);
		});
	}

	nextPage () {
		this.pageIndex += 1;
	}

	previusPage () {
		this.pageIndex -= 1;
	}

	search () {

	}


}