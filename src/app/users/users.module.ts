import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './pages/users.component';
import { UserDashboardComponent } from './pages/user-dashboard.component';
import { UserDetailComponent } from './components/user-detail.component';
import { UserSearchComponent } from './components/user-search.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserDashboardComponent,
    UserDetailComponent,
    UserSearchComponent,
  ]
})
export class UsersModule { }
