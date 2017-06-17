import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Jwt } from '../_guards/index';
import { AppConfig } from '../app.config';
import { Library, User, NumberField, DateField, StringField, Page } from '../_models/index';

import { Book } from '../_components';

@Injectable()
export class LibraryService {
	
	constructor(private http: Http, private config: AppConfig) {}

	getLibrary (): Observable<string> {
		return this.http.get(this.config.apiUrl + '/library', Jwt.createHeader())
		.map((res: Response) => {
			return res.json()._id;
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
	}

	getUser ():Observable<User> {

		return this.http.get(this.config.apiUrl + '/users', Jwt.createHeader())
		.map((res: Response) => {
			var user = res.json();
			return new User(user._id, user.username, user.firstName, user.lastName, user.email);
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});

	}

	getAllBooks (libraryId:string):Observable<Book[]> {

		console.log(libraryId);

		let url = `${this.config.apiUrl}/library/${libraryId}/books`;

		return this.http.get(url, Jwt.createHeader())
		.map((res: Response) => {
			console.log('res gab', res.json());
			let parsedRes = res.json();
			return parsedRes.map((book:any) => {
				//return new Book(book);
			});
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
		
	}
}