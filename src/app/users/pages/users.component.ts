import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { USERS } from 'src/app/data/mock-users';

@Component({
  selector: 'blck-users',
  template: `
    <h2>Users</h2>

    <ul>
      <li *ngFor="let user of users"
        (click)="onSelect(user)"
        [class.selected]="user === selectedUser">
        {{ user.id }} - {{ user.name }}
      </li>
    </ul>

    <blck-user-detail [user]="selectedUser"></blck-user-detail>
  `,
  styles: [
    `.selected { font-weight: bolder; text-decoration: underline; }`,
    `li:hover { font-weight: bolder; }`,
  ]
})
export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
