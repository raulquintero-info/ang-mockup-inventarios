import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarItemComponent } from '../../entradas/modal-agregar-item/modal-agregar-item.component';
import { MOVIMIENTOSLISTA } from '../data/movimientoslista';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEMS } from 'src/app/data/items';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-back-almacenes-movimiento-nuevo',
  templateUrl: './back-almacenes-movimiento-nuevo.component.html',
  styleUrls: ['./back-almacenes-movimiento-nuevo.component.css']
})
export class BackAlmacenesMovimientoNuevoComponent implements OnInit {

  movimientos :any = MOVIMIENTOSLISTA;
  movimiento: any;
  modalAgergarItem: any;
  isEditing: boolean = false;
  bottomBarSize = "48px";
  isMaximized = false;
  items = ITEMS;


  private modalService= inject(NgbModal);
  // private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id}) => {
      this.movimiento = this.movimientos[0];
      console.log(this.movimientos)
    // });

  }

  onGenerar(){
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
      text: "Esta Accion Genera un movimiento nuevo entre almacenes",
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
        this.viewMovimiento();
      }
    });

  }

  viewMovimiento(){
    this.router.navigateByUrl('/almacenes/movimiento-detalle/1');

  }

  maximize(){
    this.bottomBarSize="35%";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="48px";
    this.isMaximized = false;

  }

  onAddProduct(id: number) {
    this.modalAgergarItem = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    this.modalAgergarItem.componentInstance.name = "Agregar Producto";
    this.modalAgergarItem.componentInstance.btnText = "Agregar";
    this.modalAgergarItem.componentInstance.item = this.items[id-1];


  }
  onEditProduct(id: number){
    // if (!this.isEditing) return;
    const modalRef = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    modalRef.componentInstance.name = 'Recibir/Actualizar';
    modalRef.componentInstance.btnText = 'Grabar';
    modalRef.componentInstance.item = this.movimiento.items[id-1];
  }


}
