import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/models/user';

@Component({
  selector: 'blck-users',
  template: `
    <h2>Users</h2>

    <div>
      <label>User name:
        <input #userName />
      </label>
      <!-- (click) passes input value to add() and then clears the input -->
      <button (click)="add(userName.value); userName.value=''">
        add
      </button>
    </div>

    <ul>
      <li *ngFor="let user of users">
        <a routerLink="/detail/{{ user.id }}">
          {{ user.id }} - {{ user.name }}
        </a>
        <button title="delete user" (click)="delete(user)">
          x
        </button>
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
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addUser({ name } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }
}
