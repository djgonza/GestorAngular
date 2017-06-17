import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Components
import { 
	App,
	Login,
	Register,
	Library,
	Alert
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
	UserService
} from './_services/index';

//import { App } from './app.component';
import { routing } from './app.routing';
import { AppConfig } from './app.config';

/*import { AlertComponent } from './_directives/index';

import { AuthGuard, Jwt } from './_guards/index';

import { AlertService, AuthenticationService, LibraryService, UserService, BookService, PageService, FieldService } from './_services/index';

//import { HomeComponent } from './home/index';
import { LibraryComponent } from './library/index';
import { SidebarComponent } from './library/sidebar/index';
import { ModalBook, ModalField } from './library/modal/index';
import { PageComponent, PageFieldComponent } from './library/page/index';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';*/



@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
	declarations: [
		App,
		Login,
		Register,
		Library,
		Alert
		/*AlertComponent,
		LibraryComponent,
		SidebarComponent,
		LoginComponent,
		RegisterComponent,
		ModalBook,
		ModalField,
		PageComponent,
		PageFieldComponent*/
	],
	providers: [
		AppConfig,
		AuthGuard,
		Jwt,
		AlertService,
		AuthenticationService,
		LibraryService,
		UserService
	],
	bootstrap: [App]
})

export class AppModule {}