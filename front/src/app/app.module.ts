import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http'


//routes
import {routes} from './routes'


//components
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


//services
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {RestaurantService} from './services/restaurant.service';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UserProfileComponent,
    VacanciesComponent,
    MyVacancesComponent,
    InterviewComponent,
    SignupRestaurantComponent,
    LoginRestaurantComponent,
    RestaurantProfileComponent,
    RestaurantVacancesComponent,
    RestaurantCommentsComponent,
    OneVacancesComponent,
    NewVacanceComponent,
    NewCommentComponent,
    RestaurantInterviewsComponent,
    UserCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    AuthService,
    UserService,
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
