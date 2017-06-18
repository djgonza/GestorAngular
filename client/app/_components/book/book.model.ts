import { BookInterface, StructureInterface } from './index';

export class Book implements BookInterface {

	_id:string;
	name:string;
	library:string;
	structure:StructureInterface[];

	constructor (_id:string, name:string, library:string, structure:StructureInterface[]) {
		this._id = _id;
		this.name = name;
		this.library = library;
		this.structure = structure;
	}

}

export class BookStructure implements StructureInterface {

	ref:string;
	valueType:string;
	name:string;
	_id:string;

	constructor (ref:string, valueType:string, name:string, _id:string) {
		this.ref = ref;
		this.valueType = valueType;
		this.name = name;
		this._id = _id;
	}

}