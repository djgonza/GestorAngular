declare var __moduleName: string;

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../index';

@Component({
	moduleId: __moduleName,
	templateUrl: './modalEditBook.component.html',
	selector: 'modal-edit-book-component'
})

export class ModalEditBook implements OnInit {

	@Input() book:Book;
	valid:boolean = false;
	submited:boolean = false;
	@Output() editedBook = new EventEmitter<Book>();
	@Output() closeModal = new EventEmitter<boolean>();


	constructor () {

	}

	ngOnInit () {
		this.book = Object.assign({}, this.book);
	}

	validate (name:string) {
		this.book.name = name;
		this.submited = true;
		if(this.book.name != "" && this.book.name.length < 20) {
			this.valid = true;
			return;
		}
		this.valid = false;
	}

	close () {
		this.closeModal.emit(true);
	}

	save () {
		if(this.valid){
			this.editedBook.emit(this.book);
		}
	}

}