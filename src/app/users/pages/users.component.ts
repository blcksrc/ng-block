import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/models/user';

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

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
