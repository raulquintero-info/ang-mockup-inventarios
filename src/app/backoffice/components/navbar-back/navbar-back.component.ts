import { Component } from '@angular/core';
import { ALMACENES } from 'src/app/data/almacenes';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent {

  almacenes = ALMACENES;
  almacenSelected: any = ALMACENES[0];


  onAlmacen(almacen: any){
    this.almacenSelected = almacen;
  }
}
