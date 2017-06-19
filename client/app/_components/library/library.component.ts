declare var __moduleName: string;
import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { LibraryInterface } from './index';
import { Book, User, Structure } from '../index';
import { LibraryService, AlertService } from '../../_services/index';

@Component({
	moduleId: __moduleName,
	templateUrl: './library.component.html',
	selector: 'library-component'
})

export class LibraryComponent implements LibraryInterface, OnInit, OnChanges {

	_id:string;
	user:User;
	books:Book[] = [];
	bookSelected:Book = null;

	constructor(private libraryService: LibraryService, private alertService: AlertService) {
		
		this.load ();
		
	}

	ngOnInit() {
		//console.log('library', this);
	}

	ngOnChanges (changes:any) {
		console.log('library cahnge', changes);
	}

	selectBook (book:Book) {
		this.bookSelected = book;
	}

	show() {
		console.log('library', this);
	}

	load () {
		this.loadUserDetail ();
		this.loadLibrary();
	}

	loadUserDetail () {
		this.libraryService.getUser()
		.subscribe((user) => {
			this.user = new User(user._id, user.username, user.firstName, user.lastName, user.email);
		}, err => {
			this.alertService.error(err);
		});
	}

	loadLibrary () {
		this.libraryService.getLibrary()
		.subscribe((libraryId:string) => {
			this._id = libraryId;
			this.loadBooks(libraryId);
		}, err => {
			this.alertService.error(err);
		});
	}

	loadBooks (libraryId:string) {
		this.libraryService.getAllBooks(this._id)
		.subscribe((books) => {
			books.map((book:any) => {
				let structure = book.structure.map((structure:any) => {
					return new Structure(structure.ref, structure.valueType, structure.name, structure._id);
				});
				this.books.push(new Book(book._id, book.name, book.library, structure));
			});
		}, err => {
			this.alertService.error(err);
		});
	}

}