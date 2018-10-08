import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService
  ]
})
export class AppComponent {
  loggedIn: boolean = false;

  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();
  }
}
