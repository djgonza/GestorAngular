import { Field } from './field';

export class Page {

	private _id:string;
	private fields:Field[];

	constructor (_id:string, fields:Field[]) {

		this._id = _id;
		this.fields = fields;
		
	}

	/* _id */
	getId ():string {
		return this._id;
	}

	/* Fields */
	addField (field:Field):void {
		this.fields.push(field);
	}

	getField (index:number):Field {
		return this.fields[index];
	}

	getFields ():Field[] {
		return this.fields;
	}

}