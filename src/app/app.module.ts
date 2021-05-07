import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { MenuComponent } from './page/menu/menu.component';
import { InicioComponent } from './page/componente/inicio/inicio.component';
import { AltasrepartidorComponent } from './page/altasrepartidor/altasrepartidor.component';
import { PaisComponent } from './page/componente/pais/pais.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire';
import {  environment } from './../environments/environment';
import { RepartidoresComponent } from './page/repartidores/repartidores.component';
import { TablaRepartidoresComponent } from './page/componente/tabla-repartidores/tabla-repartidores.component';
import { DetalleRepartidorComponent } from './page/componente/detalle-repartidor/detalle-repartidor.component';
import { DetallePaisComponent } from './page/componente/detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    MenuComponent,
    InicioComponent,
    AltasrepartidorComponent,
    PaisComponent,
    RepartidoresComponent,
    TablaRepartidoresComponent,
    DetalleRepartidorComponent,
    DetallePaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
