declare var __moduleName: string;

import { Component, Output, EventEmitter } from '@angular/core';
import { SelectablesValuesType, Structure  } from '../index';


@Component({
	moduleId: __moduleName,
	templateUrl: './modalCreateStructure.component.html',
	selector: 'modal-create-structure-component'
})

export class ModalCreateStructure {

	selectablesValuesType:any[] = SelectablesValuesType;
	valueType:string = '';
	name:string = '';

	valid:boolean;
	validName:boolean = false;
	validType:boolean = false;
	submited:boolean = false;
	@Output() newStructure = new EventEmitter<Structure>();
	@Output() closeModal = new EventEmitter<boolean>();

	validate () {
		if(this.name == '' || this.name.length > 20 || this.valueType == '') {
			this.valid = false;
			return;
		}
		this.valid = true;
	}

	setName (name:string) {
		this.name = name;
		this.validate();
	}

	setType (valueType:string) {
		this.valueType = valueType;
		this.validate();
	}

	close () {
		this.closeModal.emit(true);
	}

	save () {
		if(this.valid){
			this.newStructure.emit(new Structure(this.name, this.valueType, this.name, null));
		}
	}

}