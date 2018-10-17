import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/models/user';

@Component({
  selector: 'blck-user-detail',
  template: `
    <div *ngIf="user">
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
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
