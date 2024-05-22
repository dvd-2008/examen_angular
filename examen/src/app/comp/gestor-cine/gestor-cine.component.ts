import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Icine } from 'src/app/modelo/Icine';
import { cine } from 'src/app/modelo/cine';
import { CineService } from 'src/app/servicios/cine.service';

@Component({
  selector: 'app-gestor-cine',
  templateUrl: './gestor-cine.component.html',
  styleUrls: ['./gestor-cine.component.css']
})
export class GestorCineComponent {
  cines:Icine[]=[];
  cinObj:cine=new cine();
  muestraBtnR:boolean=true;
  muestraBtnA:boolean=false;

  formCine=new FormGroup({
    nombre: new FormControl(),
    estreno:new FormControl(),
    genero:new FormControl(),
    duracion:new FormControl(),
    calificacion:new FormControl()
  })
constructor(private cineService:CineService){

}
listar=()=>{
this.cineService.getCine().subscribe((resp:any)=>{
  this.cines=resp;
})

}
ngOnInit():void{
  this.listar();

}

registrar=()=>{
  this.cinObj.nombre=this.formCine.value.nombre;
  this.cinObj.estreno=this.formCine.value.estreno;
  this.cinObj.genero=this.formCine.value.genero;
  this.cinObj.duracion=this.formCine.value.duracion;
  this.cinObj.calificacion=this.formCine.value.calificacion;

  this.cineService.nuevoCine(this.cinObj).subscribe(resp=>{
    this.listar();
    this.formCine.reset();
  })

}
eliminar=(cin:cine)=>{
  let confirma=window.confirm(`Estas seguro que desea eliminar la pelicula ${cin.nombre} `);
  if(confirma){
    this.cineService.eliminarCine(cin.id).subscribe(resp=>{
      this.listar()
    })
  }

}
editar=(cin:cine)=>{
  this.muestraBtnA=true;
  this.muestraBtnR=false;
  this.cinObj.id=cin.id;
  this.formCine.controls['nombre'].setValue(cin.nombre);
  this.formCine.controls['estreno'].setValue(cin.estreno);
  this.formCine.controls['genero'].setValue(cin.genero);
  this.formCine.controls['duracion'].setValue(cin.duracion);
  this.formCine.controls['calificacion'].setValue(cin.calificacion);


}
actualizar=()=>{

  this.cinObj.nombre=this.formCine.value.nombre;
  this.cinObj.estreno=this.formCine.value.estreno;
  this.cinObj.genero=this.formCine.value.genero;
  this.cinObj.duracion=this.formCine.value.duracion;
  this.cinObj.calificacion=this.formCine.value.calificacion;

this.cineService.actualizarCine(this.cinObj,this.cinObj.id).subscribe(resp=>{
  this.listar()
  this.formCine.reset();
  this.muestraBtnA=false;
  this.muestraBtnR=true;

})



}

cancelar=()=>{
  this.muestraBtnA=false;
  this.muestraBtnR=true;
  this.formCine.reset();
}




}
