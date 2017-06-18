import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Jwt } from '../_guards/index';
import { AppConfig } from '../app.config';

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

	getUser ():Observable<any> {

		return this.http.get(this.config.apiUrl + '/users', Jwt.createHeader())
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});

	}

	getAllBooks (libraryId:string):Observable<any> {

		let url = `${this.config.apiUrl}/library/${libraryId}/books`;

		return this.http.get(url, Jwt.createHeader())
		.map((res: Response) => {
			let parsedRes = res.json();
			return parsedRes.map((book:any) => {
				return book;
			});
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
		
	}
}