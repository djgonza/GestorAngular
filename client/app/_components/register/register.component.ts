declare var __moduleName: string;
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../index';
import { UserService, AlertService } from '../../_services/index';


@Component({
	moduleId: __moduleName,
	templateUrl: 'register.component.html',
	selector: 'register-component'
})

export class RegisterComponent {

	user:User = new User(null,'','','','','');
	isValidFirstName:boolean = false;
	isValidLastName:boolean = false;
	isValidUserName:boolean = false;
	isValidEmail:boolean = false;
	isValidPassword:boolean = false;
	isDuplicateUsername:boolean = true;
	isSubmited:boolean = false;
	isLoanding:boolean = false;

	constructor (private router: Router, private userService: UserService, private alertService:AlertService) {

	}

	validate () {
		if(this.isValidFirstName && 
			this.isValidLastName &&
			this.isValidUserName &&
			this.isValidEmail &&
			this.isValidPassword){
			return true;
		}

		return false;
	}

	validateFirstName (value:string) {
		this.user.firstName = value;
		if(value != ''){
			this.isValidFirstName = true;
			return;
		}
		this.isValidFirstName = false;
	}

	validateLastName (value:string) {
		this.user.lastName = value;
		if(value != ''){
			this.isValidLastName = true;
			return;
		}
		this.isValidLastName = false;
	}

	validateUserName (value:string) {
		this.user.username = value;
		if(value != ''){
			this.isValidUserName = true;
			return;
		}
		this.isValidUserName = false;
		
	}

	validateEmail (value:string) {
		this.user.email = value;
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(value != '' && re.test(value)){
			this.isValidEmail = true;
			return;
		}
		this.isValidEmail = false;
		
	}

	validatePassword (value:string) {
		this.user.password = value;
		if(value != '' && value.length >= 8){
			this.isValidPassword = true;
			return;
		}
		this.isValidPassword = false;
	}

	save () {
		this.isSubmited = true;
		if(this.validate()){
			this.isLoanding = true;
			this.userService.create(this.user)
			.subscribe((res:any) => {
				this.alertService.success('Usuario creado con exito', true);
				this.router.navigate(['/login']);
			}, (err:any) => {
				console.log(err.status);
				if(err.status == 409){
					this.isDuplicateUsername = true;
					this.isValidUserName = false;
					this.isLoanding = false;
				}else{
					this.alertService.error(err);
					this.isLoanding = false;
				}
			});
		}
	}

	login () {
		this.router.navigate(['/login']);
	}

} 