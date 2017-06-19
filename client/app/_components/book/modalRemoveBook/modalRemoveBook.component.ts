declare var __moduleName: string;

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../index';

@Component({
	moduleId: __moduleName,
	templateUrl: './modalRemoveBook.component.html',
	selector: 'modal-remove-book-component'
})

export class ModalRemoveBook {

	@Input() book:Book;
	@Output() removeBook = new EventEmitter<Book>();
	@Output() closeModal = new EventEmitter<boolean>();


	constructor () {

	}

	close () {
		this.closeModal.emit(true);
	}

	remove () {
		this.removeBook.emit(this.book);
	}

}