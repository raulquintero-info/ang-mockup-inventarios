import { Component } from '@angular/core';
import { ENTRADASORDENES } from '../../entradas/data/entradasordenes';
import { PEDIDOSLISTA } from '../data/pedidoslista';

@Component({
  selector: 'app-back-salidas-pedidos',
  templateUrl: './back-salidas-pedidos.component.html',
  styleUrls: ['./back-salidas-pedidos.component.css']
})
export class BackSalidasPedidosComponent {

  bottomBarSize = "52px";
  isMaximized = false;
  listaOrdenes: any [] = PEDIDOSLISTA

  maximize(){
    this.bottomBarSize="200px";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="52px";
    this.isMaximized = false;

  }
}
