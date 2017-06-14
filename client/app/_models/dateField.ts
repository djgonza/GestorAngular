import { Field } from './field';

export class DateField extends Field {

	value:Date;

	constructor (_id:string, name:string, value:Date) {
		
		super(_id, name);

		this.value = value;
		
	}

	/* Value */
	getValue ():Date {
		return this.value;
	}

	setValue (value:Date):void {
		this.value = value;
	}

}