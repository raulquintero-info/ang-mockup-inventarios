import { Component, OnInit, inject } from '@angular/core';
import { PRODUCTOSORDEN } from '../../entradas/data/productosorden';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarItemComponent } from '../../entradas/modal-agregar-item/modal-agregar-item.component';
import { DEPARTAMENTOS } from 'src/app/data/departamentos';
import { PEDIDOS } from '../data/pedidos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-back-salidas-pedidos-detalle',
  templateUrl: './back-salidas-pedidos-detalle.component.html',
  styleUrls: ['./back-salidas-pedidos-detalle.component.css']
})
export class BackSalidasPedidosDetalleComponent implements OnInit{
  bottomBarSize = "48px";
  isMaximized = false;
  proveedores = DEPARTAMENTOS;
  proveedorSelected: any = DEPARTAMENTOS[0];
  modalAgergarItem: any;
  carrito = PRODUCTOSORDEN;
  // items = ITEMS;
  total= 2500
  isEditing: boolean = false;
  pedidos: any = PEDIDOS;
  pedido: any;

  private modalService= inject(NgbModal);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activatedRoute.params.subscribe(({id}) => {
      this.pedido = this.pedidos[id-1];
    });
  }

  onEditar(){
    this.isEditing = true;
  }
  onGrabar(){
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
    this.modalAgergarItem = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});

  }
  onEditProduct(){
    if (!this.isEditing) return;
    const modalRef = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    modalRef.componentInstance.name = 'World';
  }


}
