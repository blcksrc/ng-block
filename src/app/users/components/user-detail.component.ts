import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from 'src/app/services/user.service';

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

      <button (click)="goBack()">go back</button>
      <button (click)="save()">save</button>
    </div>
  `,
  styles: []
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
