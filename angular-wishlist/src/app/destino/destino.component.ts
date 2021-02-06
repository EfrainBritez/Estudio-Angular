import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { destino } from './../models/destino.model';


@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {
  @Input() Destino: destino;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {}

  ngOnInit(): void {
  }

}
