import { Component, NgZone, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-agregar-item',
  templateUrl: './modal-agregar-item.component.html',
  styleUrls: ['./modal-agregar-item.component.css']
})
export class ModalAgregarItemComponent {


  public activeModal = inject(NgbActiveModal);
    private ngZone = inject (NgZone);

}


