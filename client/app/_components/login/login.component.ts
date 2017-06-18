declare var __moduleName: string;
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services/index';

@Component({
	moduleId: __moduleName,
	selector: 'login-component',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	
	username:string = "";
	password:string = "";
	loading:boolean = false;
	sended:boolean = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authenticationService: AuthenticationService,
		private alertService: AlertService) { }

	ngOnInit() {
		// reset login status
		this.authenticationService.logout();
	}

	login() {
		this.loading = true;
		this.authenticationService.login(this.username, this.password)
			.subscribe(
				(token:string) => {
					this.router.navigate(['/library']);
				},
				(error:any) => {
					this.alertService.error(error._body);
					this.sended = true;
					this.loading = false;
				});
	}
}
