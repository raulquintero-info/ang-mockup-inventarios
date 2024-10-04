import { Component } from '@angular/core';
import { ENTRADASORDENES } from '../data/entradasordenes';
import { ORDENES } from '../data/ordenes';

@Component({
  selector: 'app-back-entradas-ordenes',
  templateUrl: './back-entradas-ordenes.component.html',
  styleUrls: ['./back-entradas-ordenes.component.css']
})
export class BackEntradasOrdenesComponent {
  bottomBarSize = "52px";
  isMaximized = false;
  // listaOrdenes: any [] = ENTRADASORDENES
  listaOrdenes: any [] = ORDENES


  maximize(){
    this.bottomBarSize="200px";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="52px";
    this.isMaximized = false;

  }

}
