import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Components
import { 
	AppComponent,
	LoginComponent,
	RegisterComponent,
	LibraryComponent,
	AlertComponent,
	BookComponent,
	UserComponent,
	ModalCreateBook,
	ModalEditBook,
	ModalRemoveBook,
	StructureComponent,
	ModalCreateStructure,
	PageComponent,
	PageFieldComponent
} from './_components/index';

//models
import {
	Book,
	User
} from './_components/index';

//Guards
import { 
	AuthGuard, 
	Jwt 
} from './_guards/index';

//Services
import { 
	AlertService, 
	AuthenticationService, 
	LibraryService, 
	UserService,
	BookService
} from './_services/index';

import { routing } from './app.routing';
import { AppConfig } from './app.config';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		LibraryComponent,
		AlertComponent,
		BookComponent,
		UserComponent,
		ModalCreateBook,
		ModalEditBook,
		ModalRemoveBook,
		StructureComponent,
		ModalCreateStructure,
		PageComponent,
		PageFieldComponent
	],
	providers: [
		AppConfig,
		AuthGuard,
		Jwt,
		AlertService,
		AuthenticationService,
		LibraryService,
		UserService,
		BookService
	],
	bootstrap: [AppComponent]
})

export class AppModule {}