import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperimentsComponent } from './pages/experiments.component';

const routes: Routes = [
  { path: 'experiments', component: ExperimentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperimentsRoutingModule { }
