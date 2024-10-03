import { Component } from '@angular/core';
import { MOVIMIENTOSLISTA } from '../data/movimientoslista';

@Component({
  selector: 'app-back-almacenes-movimientos',
  templateUrl: './back-almacenes-movimientos.component.html',
  styleUrls: ['./back-almacenes-movimientos.component.css']
})
export class BackAlmacenesMovimientosComponent {

  listaMovimientos = MOVIMIENTOSLISTA;
}
