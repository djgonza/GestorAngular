declare var __moduleName: string;
import { Component, OnInit, Input } from '@angular/core';

import { LibraryInterface } from './index';
import { Book, User } from '../index';
import { LibraryService, AlertService } from '../../_services/index';

@Component({
	moduleId: __moduleName,
	templateUrl: './library.component.html',
	selector: 'library-component'
})

export class Library implements LibraryInterface, OnInit {

	_id:string;
	user:User;
	books: Book[];
	selectedBook: Book;

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

}