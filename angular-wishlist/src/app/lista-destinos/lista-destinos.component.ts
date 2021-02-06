import { Component, OnInit } from '@angular/core';
import { destino } from './../models/destino.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: destino[];
  constructor() {
  	this.destinos = [];
  }
  ngOnInit(): void {
  }

  guardar(nombre:string, url:string):boolean {
  	this.destinos.push(new destino(nombre, url));
  	return false;
  }
}
