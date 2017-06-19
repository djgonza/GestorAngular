import { Book, PageField } from '../index';

export interface PageInterface {

	_id:string;
	book:string;
	data:PageField[];

}

export interface PageFieldInterface {
	ref:string;
	value:any;
}