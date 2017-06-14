import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { User, Field, DateField, StringField, NumberField } from '../_models/index';

@Injectable()
export class FieldService {
	
	constructor(private http: Http, private config: AppConfig) {

	}

	getAllFields (bookId:string):Field[] { //Revisar
		let field = new DateField('123', 'Mi primer Field Date', new Date());
		let field1 = new StringField('123', 'Mi segundo Field String', 'El valor');
		let field2 = new NumberField('123', 'Mi tercer Field Number', 123);

		return [field, field1, field2];
	}

	getField (_id:string):Field { //Revisar
		return new NumberField(_id, 'Nombre', 345);
	}

	updateField (field:Field):Field { //Revisar
		return field;
	}

	removeField (_id:string):boolean { //Revisar
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