import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home/index';
//import { LibraryComponent } from './library/index';
import { Login, Register,Library } from './_components/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'library', component: Library, canActivate: [AuthGuard] },
    { path: 'login', component: Login },
    { path: 'register', component: Register },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);