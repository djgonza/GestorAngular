import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book, Event } from '../../_models/index';


@Component({
	moduleId: module.id,
	templateUrl: 'modalbook.component.html',
	selector: 'modalbook-component'
})

export class ModalBook {

	@Input() book:Book;
	@Output() bookEvent = new EventEmitter<Event>();
	private valid:boolean;

	constructor () {
	}

	ngOnInit() {
		this.validate(this.book.name);
	}

	validate (name:string) {
		if(name !== '' && name.length < 25){
			this.valid = true;
			this.book.setName(name);
			return;
		}
		this.valid = false;
	}

	save () {
		if(!this.book.getId()){
			this.bookEvent.emit(new Event('SAVE_BOOK', this.book));
		}else{
			this.bookEvent.emit(new Event('EDITED_BOOK', this.book));
		}
	}

	close () {
		this.bookEvent.emit(new Event('CLOSE_MODAL', null));
	}

	getValue () {
		return this.book.getName();
	}

}