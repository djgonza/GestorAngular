import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AlertComponent } from './_directives/index';

import { AuthGuard, Jwt } from './_guards/index';

import { AlertService, AuthenticationService, LibraryService, UserService, BookService, PageService, FieldService } from './_services/index';

//import { HomeComponent } from './home/index';
import { LibraryComponent } from './library/index';
import { SidebarComponent } from './library/sidebar/index';
import { ModalBook, ModalField } from './library/modal/index';
import { PageComponent, PageFieldComponent } from './library/page/index';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LibraryComponent,
        SidebarComponent,
        LoginComponent,
        RegisterComponent,
        ModalBook,
        ModalField,
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
        BookService,
        PageService,
        FieldService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }