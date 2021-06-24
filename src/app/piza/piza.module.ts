import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizaRoutingModule } from './piza-routing.module';
import { PizaComponent } from './piza.component';


@NgModule({
  declarations: [
    PizaComponent
  ],
  imports: [
    CommonModule,
    PizaRoutingModule
  ]
})
export class PizaModule { }
