import { Component, Input, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DEPARTAMENTOS } from 'src/app/data/departamentos';
import { ITEMS } from 'src/app/data/items';
import { ModalAgregarItemComponent } from '../../entradas/modal-agregar-item/modal-agregar-item.component';
import { PRODUCTOSLISTA } from '../data/productoslista';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-back-salidas-pedidos-nuevo',
  templateUrl: './back-salidas-pedidos-nuevo.component.html',
  styleUrls: ['./back-salidas-pedidos-nuevo.component.css']
})
export class BackSalidasPedidosNuevoComponent {
  bottomBarSize = "48px";
  isMaximized = false;
  proveedores = DEPARTAMENTOS;
  proveedorSelected: any = null;
  modalAgergarItem: any;
  carrito = PRODUCTOSLISTA;
  items = ITEMS;
  total= 2500

  // @Input() name: string ='';

  private modalService= inject(NgbModal);
  private router = inject(Router);
  ngOnInit(){
    // this.modalAgergarItem.componentInstance.name = 'World';
  }

  setProveedor(index: number){

    this.proveedorSelected = index ? DEPARTAMENTOS[index]: null;

  }
onGrabar(){
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
    text: "Este Salida generará 2 Salidas de diferentes almacenes",
    // icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, continuar!"
  }).then((result) => {
    if (result.isConfirmed) {
      Toast.fire({
        icon: "success",
        title: "Pedido Grabada!",
      });
      this.viewPedido();
    }
  });
}
viewPedido(){
  this.router.navigateByUrl('/salidas/pedidos-detalle/1');
}

  maximize(){
    this.bottomBarSize="35%";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="48px";
    this.isMaximized = false;

  }

  onAddProduct(id: number){
    this.modalAgergarItem = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    this.modalAgergarItem.componentInstance.name = 'Agregar Producto';
    this.modalAgergarItem.componentInstance.btnText = 'Agregar';
    this.modalAgergarItem.componentInstance.item = this.items[id-1];

  }
  onEditProduct(id: number){
    const modalRef = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    modalRef.componentInstance.name = 'Actualizar Producto';
    modalRef.componentInstance.btnText = 'Actualizar';
    modalRef.componentInstance.item = this.carrito[id-1];

  }
}
