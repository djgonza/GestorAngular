import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Page, Event } from '../../_models/index';


@Component({
	moduleId: module.id,
	templateUrl: 'page.component.html',
	selector: 'page-component'
})

export class PageComponent {

	@Input() page:Page;
	@Output() pageEvent = new EventEmitter<Event>();

	constructor () {
		
	}

	ngOnInit() {
		console.log('page', this);
	}

	save () {
		console.log('save', this);
	}

}