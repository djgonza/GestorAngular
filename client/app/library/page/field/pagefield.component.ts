import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Field, NumberField, StringField, DateField, Event } from '../../../_models/index';


@Component({
	moduleId: module.id,
	templateUrl: 'pagefield.component.html',
	selector: 'pagefield-component'
})

export class PageFieldComponent {

	@Input() field:Field;
	@Output() pageFieldEvent = new EventEmitter<Event>();
	private type:string;
	private valid:boolean;

	constructor () {
		console.log('field', this);

	}

	ngOnInit() {
		if (this.field instanceof NumberField) {
			this.type = 'NUMBER';
			this.field = <NumberField> this.field;
		}
		if (this.field instanceof StringField) {
			this.type = 'STRING';
			this.field = <StringField> this.field;
		}
		if (this.field instanceof DateField) {
			this.type = 'DATE';
			this.field = <DateField> this.field;
		}
		console.log('field', this);
	}

	validate (value:any) {
		if(this.type === 'NUMBER' && this.validateNumber(value)){
			this.field.value = value;
		}
		if(this.type === 'STRING' && this.validateString(value)){
			this.field.value = value;
		}
		if(this.type === 'DATE' && this.validateDate(value)){
			this.field.value = new Date(value);
		}
	}

	validateNumber (value:any) {
		if(Number(value)){
			return true;
		} 
		return false;
	}

	validateString (value:any) {
		if(String(value)){
			return true;
		} 
		return false;
	}

	validateDate (value:any) {
		let date = Date.parse(value);
		if(Number(date)){
			return true;
		} 
		return false;
	}

}