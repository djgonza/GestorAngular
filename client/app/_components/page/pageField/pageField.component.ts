declare var __moduleName: string;

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	moduleId: __moduleName,
	templateUrl: './pageField.component.html',
	selector: 'page-field-component'
})

export class PageFieldComponent implements OnInit {

	@Input() ref:string;
	@Input() value:any;
	@Input() name:string;
	@Input() valueType:string;
	@Output() valueChanged = new EventEmitter<any>();
	//@Output() 

	constructor () {
	}

	ngOnInit () {
	}

	validate (value:any) {
		this.value = value;
		this.changeValue();
	}

	changeValue () {
		this.valueChanged.emit({value: this.value, ref: this.ref});
	}

}