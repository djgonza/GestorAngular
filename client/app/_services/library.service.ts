import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Jwt } from '../_guards/index';
import { AppConfig } from '../app.config';
import { User, Book, NumberField, DateField, StringField, Page } from '../_models/index';

@Injectable()
export class LibraryService {
	
	constructor(private http: Http, private config: AppConfig) {}

	getLibrary () {
		return this.http.get(this.config.apiUrl + '/library', Jwt.createHeader());
	}

	//getAllBooks ():Book[] { //Revisar
		//this.http.get(this.config.apiUrl + '/users', this.jwt())
		//.map((response: Response) => response.json());
		
	//}

	getBook (_id:string):Book { //Revisar
		return new Book(_id, 'Nombre', [], []);
	}

	updateBook (book:Book):Book { //Revisar
		return book;
	}

	removeBook (_id:string):boolean { //Revisar
		return true;
	}



	/*getAll() {
		return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
	}

	getById(_id: string) {
		return this.http.get(this.config.apiUrl + '/users/' + _id, this.jwt()).map((response: Response) => response.json());
	}

	create(user: User) {
		return this.http.post(this.config.apiUrl + '/users/register', user, this.jwt());
	}

	update(user: User) {
		return this.http.put(this.config.apiUrl + '/users/' + user._id, user, this.jwt());
	}

	delete(_id: string) {
		return this.http.delete(this.config.apiUrl + '/users/' + _id, this.jwt());
	}*/

	// private helper methods

	private jwt() {
		// create authorization header with jwt token
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.token) {
			let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
			return new RequestOptions({ headers: headers });
		}
	}
}