import { Field } from './field';
import { Page } from './page';

export class Book {
	
	private _id: string;
	name: string;
	fields: Field[];
	pages: Page[];

	constructor (_id:string, name:string, fields:Field[], pages:Page[]) {
		this._id = _id;
		this.name = name;
		this.fields = fields;
		this.pages = pages;
	}

	/* _id */
	getId ():string {
		return this._id;
	}

	/* Name */
	setName (name:string):void {
		this.name = name;
	}

	getName ():string {
		return this.name;
	}

	/* Field */
	addField (field:Field):void {
		this.fields.push(field);
	}

	getField (index:number):Field {
		return this.fields[index];
	}

	getFields ():Field[] {
		return this.fields;
	}

	/* Page */
	addPage (field:Field):void {
		this.fields.push(field);
	}

	getPage (index:number):Page {
		return this.pages[index];
	}

	getPages ():Page[]{
		return this.pages;
	}

}