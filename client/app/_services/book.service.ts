import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { User, Book, NumberField, DateField, StringField, Page } from '../_models/index';

@Injectable()
export class BookService {
	
	constructor(private http: Http, private config: AppConfig) {

	}

	getAllBooks ():Book[] { //Revisar
		let book = new Book(
			'123', 
			'Mi primer LIbro', 
			[new NumberField('123', 'Mi primer field', 123)], 
			[new Page('123', 
				[
					new NumberField('123', 'Number', 123), 
					new StringField('123', 'String', "hola"),
					new DateField('123', 'Date', new Date())
				]
			),
			new Page('123', 
				[
					new NumberField('123', 'Number', 123), 
					new StringField('123', 'String', "hola"),
					new DateField('123', 'Date', new Date())
				]
			)]
		);
		let book1 = new Book('456', 'Mi segundo LIbro', [], []);
		let book2 = new Book('789', 'Mi tercer LIbro', [], []);
		let book3 = new Book('134', 'Mi cuarto LIbro', [], []);

		return [book, book1, book2, book3];
	}

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