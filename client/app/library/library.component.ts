import { Component, OnInit, Input } from '@angular/core';

import { Library, User, Book, Field, Page, Event } from '../_models/index';
import { AlertService, LibraryService, FieldService } from '../_services/index';

@Component({
	moduleId: module.id,
	//templateUrl: 'library.component.html',
	selector: 'library-component'
})

export class LibraryComponent implements OnInit {

	_id:string;
	user:User;
	books: Book[];
	selectedBook: Book;
	
	private selectedField: Field;
	private showModalBook:Book;
	private showModalField:Field;
	private selectedPageIndex:number;

	constructor(private libraryService: LibraryService, private alertService: AlertService) {
		
		this.load ();
		
	}

	ngOnInit() {
		console.log('library', this);
	}

	load () {
		this.loadUserDetail ();
		this.loadLibrary();
	}

	loadUserDetail () {
		this.libraryService.getUser()
		.subscribe((user:User) => {
			this.user = user;
		}, err => {

		});
	}

	loadLibrary () {
		this.libraryService.getLibrary()
		.subscribe((libraryId:string) => {
			this._id = libraryId;
			this.loadBooks(libraryId);
		}, err => {

		});
	}

	loadBooks (libraryId:string) {
		this.libraryService.getAllBooks(this._id)
		.subscribe((books:Book[]) => {
			console.log('loaded books', books);
		}, err => {

		});
	}

	changePage (type:string) {
		if(type === 'UP') {
			this.selectedPageIndex++;
		}else if (type === 'DOWN') {
			this.selectedPageIndex--;
		}
	}

}