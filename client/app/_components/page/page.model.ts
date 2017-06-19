import { PageInterface, PageFieldInterface } from './index'; 

export class Page implements PageInterface {
	
	_id:string;
	book:string;
	data:PageField[];

	constructor(_id:string, book:string, data:PageField[]) {
		this._id = _id;
		this.book = book;
		this.data = data;
	}
}

export class PageField implements PageFieldInterface {
	
	ref:string;
	value:any;

	constructor(ref:string, value:any) {
		this.ref = ref;
		this.value = value;
	}
}