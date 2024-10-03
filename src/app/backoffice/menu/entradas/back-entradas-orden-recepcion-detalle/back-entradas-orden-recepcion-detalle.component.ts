import { Component, inject } from '@angular/core';
import { ModalAgregarItemComponent } from '../modal-agregar-item/modal-agregar-item.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PROVEEDORES } from 'src/app/data/proveedores';
import { PRODUCTOSORDEN } from '../data/productosorden';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-back-entradas-orden-recepcion-detalle',
  templateUrl: './back-entradas-orden-recepcion-detalle.component.html',
  styleUrls: ['./back-entradas-orden-recepcion-detalle.component.css']
})
export class BackEntradasOrdenRecepcionDetalleComponent {
  bottomBarSize = "48px";
  isMaximized = false;
  proveedores = PROVEEDORES;
  proveedorSelected: any = PROVEEDORES[0];
  //{"id": "1", "proveedor": {id:1, nombre: "Office Depot"}, "domicilio": "Av Lazaro Cardena 1190", "ciudad": "Mexicali", "estado": " Baja California", "cp":"21110"};
  modalAgergarItem: any;
  carrito = PRODUCTOSORDEN;
  // items = ITEMS;
  total= 2500
  isEditing: boolean = true;

  private modalService= inject(NgbModal);
  private router = inject(Router);
  ngOnInit(){

  }

  onSave() {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Swal.fire({
      title: "Desea Continuar?",
      text: "You won't be able to revert this!",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, continuar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "Orden Grabada!"
        });
        this.grabarOrden();
      }
    });

  }



  onEditar(){
    this.isEditing = true;
  }
  grabarOrden(){
    this.isEditing = false;
  }

  maximize(){
    this.bottomBarSize="35%";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="48px";
    this.isMaximized = false;

  }

  onAddProduct(){
    if (!this.isEditing) return;

    this.modalAgergarItem = this.modalService.open(ModalAgregarItemComponent);

  }
  onEditProduct(){
    if (!this.isEditing) return;
    const modalRef = this.modalService.open(ModalAgregarItemComponent);
    modalRef.componentInstance.name = 'World';
  }


}
