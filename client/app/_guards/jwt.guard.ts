import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class Jwt {

    constructor() { }

    static createHeader () {
    	// create authorization header with jwt token
		let token = JSON.parse(localStorage.getItem('token'));
		if (token) {
			let headers = new Headers({ 'Authorization': token });
			return new RequestOptions({ headers: headers });
		}
    }
}