import { Field } from './field';

export class NumberField extends Field {

	value:number;

	constructor (_id:string, name:string, value:number) {
		
		super(_id, name);
		this.value = value;
		
	}

	/* Value */
	getValue ():number {
		return this.value;
	}

	setValue (value:number):void {
		this.value = value;
	}



}