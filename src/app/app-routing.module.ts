import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasrepartidorComponent } from './page/altasrepartidor/altasrepartidor.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { RepartidoresComponent } from './page/repartidores/repartidores.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'altarepartidor' , component: AltasrepartidorComponent},
  { path: 'repartidores' , component: RepartidoresComponent},
  {path: '', redirectTo:'bienvenida',pathMatch: 'full'},
  {path: '**', component:BienvenidaComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
