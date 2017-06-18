declare var __moduleName: string;
import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../_services/index';

@Component({
	moduleId: __moduleName,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}