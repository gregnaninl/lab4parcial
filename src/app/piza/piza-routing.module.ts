import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalenPizasComponent } from '../page/pizas/salen-pizas/salen-pizas.component';
import { PizaComponent } from './piza.component';

const routes: Routes = [
  { path: '', component: SalenPizasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizaRoutingModule { }
