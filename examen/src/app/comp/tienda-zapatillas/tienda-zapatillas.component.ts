import { Component } from '@angular/core';
import { Zapatillas } from 'src/data';

@Component({
  selector: 'app-tienda-zapatillas',
  templateUrl: './tienda-zapatillas.component.html',
  styleUrls: ['./tienda-zapatillas.component.css']
})
export class TiendaZapatillasComponent {
  zapatillas=Zapatillas;
  consulta:string="";
  maxPrecio:any;

}
