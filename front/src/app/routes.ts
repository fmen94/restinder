import {Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VacanciesComponent } from './vacancies/vacancies.component'
import { MyVacancesComponent } from './my-vacances/my-vacances.component';
import { InterviewComponent } from './interview/interview.component';
import { SignupRestaurantComponent } from './signup-restaurant/signup-restaurant.component';
import { LoginRestaurantComponent } from './login-restaurant/login-restaurant.component';
import { RestaurantProfileComponent } from './restaurant-profile/restaurant-profile.component';
import { RestaurantVacancesComponent } from './restaurant-vacances/restaurant-vacances.component';
import { RestaurantCommentsComponent } from './restaurant-comments/restaurant-comments.component';
import { OneVacancesComponent } from './one-vacances/one-vacances.component';
import { NewVacanceComponent } from './new-vacance/new-vacance.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { RestaurantInterviewsComponent } from './restaurant-interviews/restaurant-interviews.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { UserInterviewsComponent } from './user-interviews/user-interviews.component';
import { UserRestaurantComponent } from './user-restaurant/user-restaurant.component';

export const routes: Routes = [
    { path: 'home',  component: AppComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'vacancies', component: VacanciesComponent},
    { path: 'userProfile', component: UserProfileComponent},
    { path: 'myVacances', component: MyVacancesComponent},
    { path: 'interview/:vacancies/:restaurant', component: InterviewComponent},
    { path: 'signupRestaurant', component: SignupRestaurantComponent},
    { path: 'restaurantlogin',  component: LoginRestaurantComponent },
    { path: 'restaurantprofile',  component: RestaurantProfileComponent },
    { path: 'restaurantvacances/:id',  component: RestaurantVacancesComponent },
    { path: 'restaurantcomments/:id',  component: RestaurantCommentsComponent },
    { path: 'onevancances/:id',  component: OneVacancesComponent },
    { path: 'newvacance',  component: NewVacanceComponent },
    { path: 'newcomment/:res',  component: NewCommentComponent },
    { path: 'restaurantinterview/:id',  component: RestaurantInterviewsComponent },
    { path: 'usercomments/:restaurant',  component: UserCommentsComponent },
    { path: 'userinterviews',  component: UserInterviewsComponent },
    { path: 'userrestaurant/:id',  component: UserRestaurantComponent },
]

