import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './pages/users.component';
import { UserDashboardComponent } from './pages/user-dashboard.component';
import { UserDetailComponent } from './components/user-detail.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserDashboardComponent,
    UserDetailComponent,
  ]
})
export class UsersModule { }
