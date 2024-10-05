import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarItemComponent } from '../modal-agregar-item/modal-agregar-item.component';
import { PROVEEDORES } from 'src/app/data/proveedores';
import { PRODUCTOSORDEN } from '../data/productosorden';
import { ITEMS } from 'src/app/data/items';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-entradas-orden-nueva',
  templateUrl: './back-entradas-orden-nueva.component.html',
  styleUrls: ['./back-entradas-orden-nueva.component.css']
})
export class BackEntradasOrdenNuevaComponent implements OnInit {
  bottomBarSize = "48px";
  isMaximized = false;
  proveedores = PROVEEDORES;
  proveedorSelected: any = null;
  modalAgergarItem: any;
  carrito = PRODUCTOSORDEN;
  items = ITEMS;
  total = 2500




  private modalService = inject(NgbModal);
  private router = inject(Router)
  ngOnInit() {
    // this.modalAgergarItem.componentInstance.name = 'World';
  }

  setProveedor(index: number) {

    this.proveedorSelected = index ? PROVEEDORES[index] : null;

  }
  onGenerar() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
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
      text: "Esta Accion Grabara una orden nueva en Base de datos",
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
        this.viewOrden();
      }
    });

  }

  viewOrden() {
    this.router.navigateByUrl('/entradas/orden-detalle/1');
  }
  maximize() {
    this.bottomBarSize = "35%";
    this.isMaximized = true;

  }
  minimize() {
    this.bottomBarSize = "48px";
    this.isMaximized = false;

  }

  onAddProduct(id: number) {
    this.modalAgergarItem = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    this.modalAgergarItem.componentInstance.name = "Agregar Producto";
    this.modalAgergarItem.componentInstance.btnText = "Agregar";
    this.modalAgergarItem.componentInstance.item = this.items[id-1];


  }
  onEditProduct(id: number) {
    const modalRef = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    modalRef.componentInstance.name = "Editar Producto";
    modalRef.componentInstance.btnText = "Editar";
    modalRef.componentInstance.item = this.carrito[id-1];
  }
}
