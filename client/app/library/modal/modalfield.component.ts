import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Field, Event } from '../../_models/index';


@Component({
	moduleId: module.id,
	templateUrl: 'modalfield.component.html',
	selector: 'modalfield-component'
})

export class ModalField {

	@Input() field:Field;
	@Output() fieldEvent = new EventEmitter<Event>();
	private valid:boolean;

	constructor () {
	}

	ngOnInit() {
		this.validate(this.field.name);
	}

	validate (name:string) {
		if(name !== '' && name.length < 25){
			this.valid = true;
			this.field.setName(name);
			return;
		}
		this.valid = false;
	}

	save () {
		if(!this.field.getId()){
			this.fieldEvent.emit(new Event('SAVE_FIELD', this.field));
		}else{
			this.fieldEvent.emit(new Event('EDITED_FIELD', this.field));
		}
	}

	close () {
		this.fieldEvent.emit(new Event('CLOSE_MODAL', null));
	}

	getValue () {
		return this.field.getName();
	}

}