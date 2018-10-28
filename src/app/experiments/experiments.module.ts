import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentsRoutingModule } from './experiments-routing.module';
import { ExperimentsComponent } from './pages/experiments.component';

@NgModule({
  imports: [
    CommonModule,
    ExperimentsRoutingModule
  ],
  declarations: [ExperimentsComponent]
})
export class ExperimentsModule { }
