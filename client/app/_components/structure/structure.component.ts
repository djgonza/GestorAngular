declare var __moduleName: string;

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book, Structure } from '../index';
import { AlertService, BookService } from '../../_services/index';

@Component({
	moduleId: __moduleName,
	templateUrl: './structure.component.html',
	selector: 'structure-component'
})

export class StructureComponent implements OnInit {

	@Input() book:Book;
	structureSelected:Structure;
	shownActions:boolean = false;
	showModalCreateStructure:boolean = false;

	constructor (private bookService: BookService, private alertService: AlertService) {

	}

	ngOnInit () {
		
	}

	selectStructure (structure:Structure) {
		this.structureSelected = structure;
		this.shownActions = false;
	}

	showActions ($event:MouseEvent, structure:Structure) {
		this.shownActions = true;
		$event.stopPropagation();
	}

	closeModals () {
		this.showModalCreateStructure = false;
	}

	createStructure (structure:Structure) {
		let temporalBook = Object.assign({}, this.book);
		temporalBook.structure.push(structure);
		this.bookService.updateBook (temporalBook.library, temporalBook)
		.subscribe((res:any) => {
			let newStructure = res.structure.map((structure:any) => {
				return new Structure(structure.ref, structure.valueType, structure.name, structure._id);
			});
			this.book.structure = newStructure;
			this.closeModals ();
			this.alertService.success(`Campo '${structure.name}' creado con exito`);
		}, (err:any) => {

		});
	}

	editStructure () {
		console.log("edit");
	}

	removeStructure () {
		console.log("remove");
	}

}