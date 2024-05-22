import { Component, OnInit } from '@angular/core';
import { platos } from 'src/data';

@Component({
  selector: 'app-lista-platos',
  templateUrl: './lista-platos.component.html',
  styleUrls: ['./lista-platos.component.css']
})
export class ListaPlatosComponent implements OnInit {
  platos= platos
  currentIndex = 0;
  currentPlato = this.platos[this.currentIndex];
  constructor() { }

  ngOnInit(): void {
    this.currentPlato = this.platos[this.currentIndex];
  }
  nextPlato(): void {
    if (this.currentIndex < this.platos.length - 1) {
      this.currentIndex++;
      this.currentPlato = this.platos[this.currentIndex];
    }
  }
  previousPlato(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentPlato = this.platos[this.currentIndex];
    }
  }
}
