import { Component } from '@angular/core';
import { ENTRADASORDENES } from '../data/entradasordenes';

@Component({
  selector: 'app-back-entradas-ordenes',
  templateUrl: './back-entradas-ordenes.component.html',
  styleUrls: ['./back-entradas-ordenes.component.css']
})
export class BackEntradasOrdenesComponent {
  bottomBarSize = "52px";
  isMaximized = false;
  listaOrdenes: any [] = ENTRADASORDENES


  maximize(){
    this.bottomBarSize="200px";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="52px";
    this.isMaximized = false;

  }

}
