import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarPedidosComponent } from '../page/pedidos/gestionar-pedidos/gestionar-pedidos.component';
import { PedidosComponent } from './pedidos.component';

const routes: Routes = [
  { path: '', component: GestionarPedidosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
