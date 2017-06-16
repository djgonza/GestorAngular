import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class Jwt {

    constructor() { }

    static createHeader () {
    	// create authorization header with jwt token
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.token) {
			let headers = new Headers({ 'Authorization': currentUser.token });
			return new RequestOptions({ headers: headers });
		}
    }
}