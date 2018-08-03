import {Routes} from '@angular/router'

//components

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VacanciesComponent } from './vacancies/vacancies.component'




export const routes: Routes = [
    { path: 'home',  component: AppComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'vacancies', component: VacanciesComponent},
    { path: 'userProfile', component: UserProfileComponent}

]

