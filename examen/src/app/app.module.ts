import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './comp/cliente/cliente.component';
import { GestorCineComponent } from './comp/gestor-cine/gestor-cine.component';
import { ListaPlatosComponent } from './comp/lista-platos/lista-platos.component';
import { MenuComponent } from './comp/menu/menu.component';
import { TiendaZapatillasComponent } from './comp/tienda-zapatillas/tienda-zapatillas.component';
import { BuscadorZapatillasPipe } from './pipes/buscador-zapatillas.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    GestorCineComponent,
    ListaPlatosComponent,
    MenuComponent,
    TiendaZapatillasComponent,
    BuscadorZapatillasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
