import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	model: any = {};
	loading = false;

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
		this.authenticationService.login(this.model.username, this.model.password)
			.subscribe(
				token => {
					this.router.navigate(['/library']);
				},
				error => {
					this.alertService.error(error._body);
					this.loading = false;
				});
	}
}
