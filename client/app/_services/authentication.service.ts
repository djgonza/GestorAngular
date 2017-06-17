import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
	constructor(private http: Http, private config: AppConfig) { }

	login(username: string, password: string) {
		return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
			.map((response: Response) => {
				// login successful if there's a jwt token in the response
				let res = response.json();
				if (res.token) {
					// save token
					localStorage.setItem('token', JSON.stringify(res.token));
				}
			})
			.catch((res:Response) => {
				return Observable.throw(res);
			});
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('token');
	}
}