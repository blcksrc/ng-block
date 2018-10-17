import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './pages/users.component';
import { UserDashboardComponent } from './pages/user-dashboard.component';
import { UserDetailComponent } from './components/user-detail.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
