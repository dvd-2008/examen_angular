import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestorCineComponent } from './comp/gestor-cine/gestor-cine.component';
import { ClienteComponent } from './comp/cliente/cliente.component';
import { TiendaZapatillasComponent } from './comp/tienda-zapatillas/tienda-zapatillas.component';
import { ListaPlatosComponent } from './comp/lista-platos/lista-platos.component';

const routes: Routes = [

  {path:'gestor-cine',component:GestorCineComponent},
  {path:'clientes-registro',component:ClienteComponent},
  {path:'tienda-zapatillas',component:TiendaZapatillasComponent},
  {path:'lista-platos',component:ListaPlatosComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
