import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/models/user';

@Component({
  selector: 'blck-users',
  template: `
    <h2>Users</h2>

    <ul>
      <li *ngFor="let user of users">
        <a routerLink="/detail/{{ user.id }}">
          {{ user.id }} - {{ user.name }}
        </a>
      </li>
    </ul>
  `,
  styles: [
    `.selected { font-weight: bolder; text-decoration: underline; }`,
    `li:hover { font-weight: bolder; }`,
  ]
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}
