import { Component } from '@angular/core';
import { ENTRADASORDENESRECIBIDAS } from '../data/entradasordenesrecibidas';

@Component({
  selector: 'app-back-entradas-orden-recepcion-list',
  templateUrl: './back-entradas-orden-recepcion-list.component.html',
  styleUrls: ['./back-entradas-orden-recepcion-list.component.css']
})
export class BackEntradasOrdenRecepcionListComponent {
  bottomBarSize = "52px";
  isMaximized = false;
  listaOrdenes: any [] = ENTRADASORDENESRECIBIDAS


  maximize(){
    this.bottomBarSize="200px";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="52px";
    this.isMaximized = false;

  }
}
