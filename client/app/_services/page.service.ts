import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { User, Page } from '../_models/index';

@Injectable()
export class PageService {
	
	constructor(private http: Http, private config: AppConfig) {

	}

	getAllPages ():Page[] { //Revisar
		let page = new Page('123', []);
		let page1 = new Page('123', []);
		let page2 = new Page('123', []);
		let page3 = new Page('123', []);

		return [page, page1, page2, page3];
	}

	getPage (_id:string):Page { //Revisar
		return new Page(_id, []);
	}

	updatePage (page:Page):Page { //Revisar
		return page;
	}

	removePage (_id:string):boolean { //Revisar
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