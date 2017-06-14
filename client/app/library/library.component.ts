import { Component, OnInit, Input } from '@angular/core';

import { User, Book, Field, Page, Event } from '../_models/index';
import { BookService, FieldService } from '../_services/index';

@Component({
	moduleId: module.id,
	templateUrl: 'library.component.html',
	selector: 'library-component'
})

export class LibraryComponent implements OnInit {
	
	private bookService: BookService;
	private currentUser: User;
	private books: Book[];
	private selectedBook: Book;
	private selectedField: Field;
	private showModalBook:Book;
	private showModalField:Field;
	private selectedPageIndex:number;

	constructor(bookService:BookService) {
		
		this.bookService = bookService;
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

	}

	ngOnInit() {
		this.loadAllBooks();
	}

	loadAllBooks () {
		this.books = this.bookService.getAllBooks();
	}

	bookEvent (event:Event) {

		switch (event.getType()) {
			case 'SELECT_BOOK':
				this.selectedBook = event.getData();
				this.selectedBook.pages.length > 0 ? this.selectedPageIndex = 0 : this.selectedPageIndex = null;
				break;
			case 'CLOSE_MODAL':
				this.showModalBook = null;
				break;
			case 'ADD_BOOK':
				console.log('add', event.getData());
				this.showModalBook = new Book(null, '', [], []);
				break;
			case 'SAVE_BOOK':
				console.log('save', event.getData());
				break;
			case 'REMOVE_BOOK':
				console.log('remove', event.getData());
				break;
			case 'EDIT_BOOK':
				console.log('edit', event.getData());
				this.showModalBook = event.getData();
				break;
			case 'EDITED_BOOK':
				console.log('edited', event.getData());
				break;
		}
		
		
	}

	fieldEvent (event:Event) {

		switch (event.getType()) {
			case 'UNSELECT_FIELD':
				this.selectedField = null;
				break;
			case 'SELECT_FIELD':
				this.selectedField = event.getData();
				break;
			case 'CLOSE_MODAL':
				this.showModalField = null;
				break;
			case 'ADD_FIELD':
				console.log('add field', event.getData());
				this.showModalField = new Field(null, '');
				break;
			case 'SAVE_FIELD':
				console.log('save field', event.getData());
				break;
			case 'REMOVE_FIELD':
				console.log('remove field', event.getData());
				break;
			case 'EDIT_FIELD':
				console.log('edit field', event.getData());
				this.showModalField = event.getData();
				break;
			case 'EDITED_FIELD':
				console.log('edited field', event.getData());
				break;
		}

	}

	changePage (type:string) {
		if(type === 'UP') {
			this.selectedPageIndex++;
		}else if (type === 'DOWN') {
			this.selectedPageIndex--;
		}
	}

}