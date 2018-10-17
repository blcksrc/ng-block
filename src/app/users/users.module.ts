import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users.component';
import { UserDetailComponent } from './components/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
  ]
})
export class UsersModule { }
