import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-agregar-tipo-producto',
  templateUrl: './modal-agregar-tipo-producto.component.html',
  styleUrls: ['./modal-agregar-tipo-producto.component.css']
})
export class ModalAgregarTipoProductoComponent {
  public activeModal = inject(NgbActiveModal);
}
