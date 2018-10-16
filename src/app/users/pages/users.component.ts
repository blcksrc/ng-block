import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';

@Component({
  selector: 'blck-users',
  template: `
    <h2>Users</h2>

    <div>
      <h3>User Data | {{ user.name | uppercase }}</h3>
      
      <h4>User Details</h4>
      <p>
        <b>Id:</b> {{ user.id }}
        <br>
        <b>Name:</b> {{ user.name }}
      </p>

      <h4>Edit User Details</h4>
      <p>
        <label>Name:
          <input [(ngModel)]="user.name" placeholder="name">
        </label>
      </p>

    </div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  user: User = {
    id: 1,
    name: 'John',
  }

  constructor() { }

  ngOnInit() {
  }

}
