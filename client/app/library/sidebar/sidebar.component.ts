import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book, Field, Event } from '../../_models/index';

@Component({
	moduleId: module.id,
	templateUrl: './sidebar.component.html',
	selector: 'sidebar-component'
})

export class SidebarComponent implements OnInit {

	@Input() books:Book[];

	@Input() selectedBook:Book;
	@Output() bookEvent = new EventEmitter<Event>();

	@Input() selectedField:Field;
	@Output() fieldEvent = new EventEmitter<Event>();


	constructor() {
	}

	ngOnInit() {

		
	}

	clickBook (book:Book) {
		this.bookEvent.emit(new Event('SELECT_BOOK', book));
		this.fieldEvent.emit(new Event('UNSELECT_FIELD', null));
	}

	addBook () {
		this.bookEvent.emit(new Event('ADD_BOOK', null));
	}

	editBook () {
		this.bookEvent.emit(new Event('EDIT_BOOK', this.selectedBook));
	}

	removeBook () {
		if(confirm('¿Borrar el libro '+this.selectedBook.getName()+'?'))
			this.bookEvent.emit(new Event('REMOVE_BOOK', this.selectedBook));
		
	}

	clickField (field:Field) {
		this.fieldEvent.emit(new Event('SELECT_FIELD', field));
	}

	addField () {
		this.fieldEvent.emit(new Event('ADD_FIELD', null));
	}

	editField () {
		this.fieldEvent.emit(new Event('EDIT_FIELD', this.selectedField));
	}

	removeField () {
		if(confirm('¿Borrar el campo '+this.selectedField.getName()+'?'))
			this.fieldEvent.emit(new Event('REMOVE_FIELD', this.selectedField));
	}

}