import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'blck-user-dashboard',
  template: `
    <h2>User Dashboard</h2>
    <div>
      <a *ngFor="let user of users"
        routerLink="/detail/{{ user.id }}">
        {{user.name}}
      </a>
    </div>
  `,
  styles: []
})
export class UserDashboardComponent implements OnInit {

  users: User[] = [];
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.getUsers();
  }
 
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(1, 5));
  }
}
