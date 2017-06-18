import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home/index';
//import { LibraryComponent } from './library/index';
import { LoginComponent, RegisterComponent, LibraryComponent } from './_components/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);