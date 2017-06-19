import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Jwt } from '../_guards/index';
import { AppConfig } from '../app.config';

import { Book, Page } from '../_components';

@Injectable()
export class BookService {
	
	constructor(private http: Http, private config: AppConfig) {}

	saveBook (library:string, book:Book): Observable<Book> {
		let url = `${this.config.apiUrl}/library/${library}/books/`;
		let data = {
			name: book.name,
			structure: book.structure
		}
		return this.http.post(url, data, Jwt.createHeader())
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
	}

	updateBook (library:string, book:Book) {
		let url = `${this.config.apiUrl}/library/${library}/books/${book._id}`;
		return this.http.put(url, book, Jwt.createHeader())
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
	}

	removeBook (library:string, book:Book) {
		let url = `${this.config.apiUrl}/library/${library}/books/${book._id}`;
		return this.http.delete(url, Jwt.createHeader())
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
	}

	loadNumberOfPages (library:string, book:Book) {
		let url = `${this.config.apiUrl}/library/${library}/books/${book._id}/numberPages`;
		return this.http.get(url, Jwt.createHeader())
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
	}

	savePage(library:string, book:string, page:Page) {
		let url = `${this.config.apiUrl}/library/${library}/books/${book}/pages/${page._id}`;
		return this.http.put(url, page, Jwt.createHeader())
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
	}

	addPage (library:string, book:string, page:Page) {
		let url = `${this.config.apiUrl}/library/${library}/books/${book}/pages`;
		return this.http.post(url, page, Jwt.createHeader())
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
	}

	getAllPages(library:string, book:string) {
		let url = `${this.config.apiUrl}/library/${library}/books/${book}/pages`;
		return this.http.get(url, Jwt.createHeader())
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response | any) => {
			return Observable.throw(err);
		});
	} 

}