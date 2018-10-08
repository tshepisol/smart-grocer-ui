import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';


import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NgbdCarouselComponent } from './components/ngbd-carousel/ngbd-carousel.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
 // { path: 'customer', component: CustomerComponent, canActivate: [ AuthGuardService ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    HomeComponent,
    NgbCarousel,
    NgbdCarouselComponent
  ],

  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
exports: [NgbCarousel],

  providers: [AuthGuardService,
    UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }

