import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './can-activate.guard';
import { AltasrepartidorComponent } from './page/altasrepartidor/altasrepartidor.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { RepartidoresComponent } from './page/repartidores/repartidores.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'altarepartidor' , component: AltasrepartidorComponent},
  { path: 'repartidores' , component: RepartidoresComponent},
  { path: 'piza', loadChildren: () => import('./piza/piza.module').then(m => m.PizaModule) , canActivate: [CanActivateGuard]},
  {path: '', redirectTo:'bienvenida',pathMatch: 'full'},
  {path: '**', component:BienvenidaComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
