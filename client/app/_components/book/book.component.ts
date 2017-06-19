declare var __moduleName: string;

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from './index';
import { BookService, AlertService } from '../../_services/index';

@Component({
	moduleId: __moduleName,
	templateUrl: './book.component.html',
	selector: 'book-component'
})

export class BookComponent {

	@Input() library:string;
	@Input() books:Book[];
	bookSelected:Book;
	@Output() bookEvent = new EventEmitter<Book>();
	showModalCreateBook:boolean = false;
	showModalEditBook:boolean = false;
	showModalRemoveBook:boolean = false;
	shownActions:boolean = false

	constructor (private bookService: BookService, private alertService: AlertService) {

	}

	selectBook (book:Book) {
		this.bookSelected = book;
		this.shownActions = false;
		this.bookEvent.emit(book);
	}

	showActions ($event:MouseEvent, book:Book) {
		this.shownActions = true;
		$event.stopPropagation();
	}

	closeModals () {
		this.showModalCreateBook = false;
		this.showModalEditBook = false;
		this.showModalRemoveBook = false;
	}

	saveBook (book:Book) {
		this.bookService.saveBook (this.library, book)
		.subscribe((res:any) => {
			this.books.push(new Book(res._id, res.name, res.library, res.structure));
			this.alertService.success(`Libro '${res.name}' creado Correctamente`);
			this.closeModals();
		}, (err:any) => {
			this.alertService.error(err)
		});
	}

	updateBook (updatedBook:Book) {
		this.bookService.updateBook(this.library, updatedBook)
		.subscribe((res:any) => {
			let editedBook = new Book(res._id, res.name, res.library, res.structure);
			this.books[this.searchBook(editedBook._id)] = editedBook;
			this.alertService.success(`Libro '${editedBook.name}' editado Correctamente`);
			this.closeModals();
		}, (err:any) => {
			this.alertService.error(err)
		});
	}

	removeBook (book:Book) {
		this.bookService.removeBook(this.library, book)
		.subscribe((res:any) => {
			this.books.splice(this.searchBook(res._id), 1);
			this.alertService.success(`Libro '${res.name}' eliminado Correctamente`);
			this.closeModals();
		}, (err:any) => {
			this.alertService.error(err)
		});
	}

	searchBook (_id:string):number {
		var index = -1;
		this.books.map((book:Book, bookIndex:number) => {
			if(_id === book._id) index = bookIndex;
		});
		return index;
	}

}