import { BookInterface, Structure } from '../index';

export class Book implements BookInterface {

	_id:string;
	name:string;
	library:string;
	structure:Structure[];

	constructor (_id:string, name:string, library:string, structure:Structure[]) {
		this._id = _id;
		this.name = name;
		this.library = library;
		this.structure = structure;
	}

}