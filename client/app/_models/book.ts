import { Field } from './field';
import { Page } from './page';

export interface Book {
	
	/*{
        "_id": "59441dcf7f7ab00e8ae6746f",
        "library": "59440a7d613fc70da74be2d3",
        "name": "Mi primer libro",
        "__v": 0,
        "structure": [
            {
                "ref": "Mi primer Campo",
                "valueType": "String",
                "name": "Mi primer Campo",
                "_id": "59441dcf7f7ab00e8ae67470"
            }
        ]
    }*/

	_id: string;
	name: string;
	structure: Structure[];

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