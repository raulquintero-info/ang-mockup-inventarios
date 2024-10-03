import { Component, inject } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarTipoProductoComponent } from '../modal-agregar-tipo-producto/modal-agregar-tipo-producto.component';

@Component({
  selector: 'app-back-productos-tipos',
  templateUrl: './back-productos-tipos.component.html',
  styleUrls: ['./back-productos-tipos.component.css']
})
export class BackProductosTiposComponent {


  private modalService= inject(NgbModal);

  onAddTipoNuevo(){
    const modalRef = this.modalService.open(ModalAgregarTipoProductoComponent);
    // modalRef.componentInstance.name = 'World';
  }
}
