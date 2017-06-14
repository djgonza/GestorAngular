import { Field } from './field';

export class StringField extends Field {

	value:string;

	constructor (_id:string, name:string, value:string) {
		
		super(_id, name);

		this.value = value;
		
	}

	/* Value */
	getValue ():string {
		return this.value;
	}

	setValue (value:string):void {
		this.value = value;
	}


}