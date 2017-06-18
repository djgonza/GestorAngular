declare var __moduleName: string;

import { Component, OnInit, Input } from '@angular/core';

import { UserInterface } from './index';


@Component({
	moduleId: __moduleName,
	templateUrl: './user.component.html',
	selector: 'user-component'
})

export class UserComponent implements UserInterface {

	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;

	constructor () {
		
	}

}