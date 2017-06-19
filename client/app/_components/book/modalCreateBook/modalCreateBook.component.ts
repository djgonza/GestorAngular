declare var __moduleName: string;

import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../index';

@Component({
	moduleId: __moduleName,
	templateUrl: './modalCreateBook.component.html',
	selector: 'modal-create-book-component'
})

export class ModalCreateBook {

	name:string;
	valid:boolean = false;
	submited:boolean = false;
	@Output() newBook = new EventEmitter<Book>();
	@Output() closeModal = new EventEmitter<boolean>();


	constructor () {

	}

	validate (name:string) {
		this.name = name;
		this.submited = true;
		if(this.name != "" && this.name.length < 20) {
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
			this.newBook.emit(new Book(null, this.name, null, []));
		}
	}

}