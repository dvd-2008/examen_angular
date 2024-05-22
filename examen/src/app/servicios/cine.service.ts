import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icine } from '../modelo/Icine';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CineService {
  url="http://localhost:3001/cines";

  constructor(private http:HttpClient) { }
  getCine=()=>{
    let header=new HttpHeaders().set('Type-conect','application/json');
    return this.http.get(this.url,{
      headers:header
    })
  }
  nuevoCine=(data:Icine)=>{
    return this.http.post<Icine>(this.url,data)
    .pipe(map((resp)=>resp))
  }
  eliminarCine=(id:number)=>{
    return this.http.delete<Icine>(`${this.url}/${id}`)
    .pipe(map((resp)=>resp))
  }
  actualizarCine=(data:Icine,id:number)=>{
    return this.http.put<Icine>(`${this.url}/${id}`,data)
    .pipe(map((resp)=>resp))
  }

}
