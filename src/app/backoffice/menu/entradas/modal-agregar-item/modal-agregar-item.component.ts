import { Component, Input, NgZone, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-agregar-item',
  templateUrl: './modal-agregar-item.component.html',
  styleUrls: ['./modal-agregar-item.component.css']
})
export class ModalAgregarItemComponent {

@Input() name: string ='';
@Input() item: any;

  public activeModal = inject(NgbActiveModal);
    private ngZone = inject (NgZone);

}


