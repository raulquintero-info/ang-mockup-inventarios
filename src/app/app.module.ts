import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarBackComponent } from './backoffice/components/navbar-back/navbar-back.component';
import { DashboardBackComponent } from './backoffice/menu/dashboard/dashboard-back/dashboard-back.component';
import { BackProductsListComponent } from './backoffice/menu/productos/back-products-list/back-products-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MyModalComponent } from './backoffice/menu/productos/my-modal/my-modal.component';
import { BackEntradasOrdenesComponent } from './backoffice/menu/entradas/back-entradas-ordenes/back-entradas-ordenes.component';
import { BackEntradasProveedoresComponent } from './backoffice/menu/entradas/back-entradas-proveedores/back-entradas-proveedores.component';
import { FormsModule } from '@angular/forms';
import { BackEntradasOrdenNuevaComponent } from './backoffice/menu/entradas/back-entradas-orden-nueva/back-entradas-orden-nueva.component';
import { ModalAgregarItemComponent } from './backoffice/menu/entradas/modal-agregar-item/modal-agregar-item.component';
import { BackProductosCategoriasComponent } from './backoffice/menu/productos/back-productos-categorias/back-productos-categorias.component';
import { BackSalidasDepartamentosComponent } from './backoffice/menu/salidas/back-salidas-departamentos/back-salidas-departamentos.component';
import { BackProductosAgregarComponent } from './backoffice/menu/productos/back-productos-agregar/back-productos-agregar.component';
import { BackProductosTiposComponent } from './backoffice/menu/productos/back-productos-tipos/back-productos-tipos.component';
import { BackSalidasPedidosComponent } from './backoffice/menu/salidas/back-salidas-pedidos/back-salidas-pedidos.component';
import { BackSalidasClientesComponent } from './backoffice/menu/salidas/back-salidas-clientes/back-salidas-clientes.component';
import { BackAlmacenesMovimientosComponent } from './backoffice/menu/almacenes/back-almacenes-movimientos/back-almacenes-movimientos.component';
import { BackAlmacenesListComponent } from './backoffice/menu/almacenes/back-almacenes-list/back-almacenes-list.component';
import { ModalAgregarTipoProductoComponent } from './backoffice/menu/productos/modal-agregar-tipo-producto/modal-agregar-tipo-producto.component';
import { BackEntradasOrdenDetalleComponent } from './backoffice/menu/entradas/back-entradas-orden-detalle/back-entradas-orden-detalle.component';
import { BackSalidasPedidosDetalleComponent } from './backoffice/menu/salidas/back-salidas-pedidos-detalle/back-salidas-pedidos-detalle.component';
import { BackSalidasPedidosNuevoComponent } from './backoffice/menu/salidas/back-salidas-pedidos-nuevo/back-salidas-pedidos-nuevo.component';
import { BackEntradasOrdenRecepcionComponent } from './backoffice/menu/entradas/back-entradas-orden-recepcion/back-entradas-orden-recepcion.component';
import { BackAlmacenesMovimientoNuevoComponent } from './backoffice/menu/almacenes/back-almacenes-movimiento-nuevo/back-almacenes-movimiento-nuevo.component';
import { BackEntradasOrdenRecepcionListComponent } from './backoffice/menu/entradas/back-entradas-orden-recepcion-list/back-entradas-orden-recepcion-list.component';
import { BackEntradasOrdenRecepcionDetalleComponent } from './backoffice/menu/entradas/back-entradas-orden-recepcion-detalle/back-entradas-orden-recepcion-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarBackComponent,
    DashboardBackComponent,
    BackProductsListComponent,
    MyModalComponent,
    BackEntradasOrdenesComponent,
    BackEntradasProveedoresComponent,
    BackEntradasOrdenNuevaComponent,
    ModalAgregarItemComponent,
    BackProductosCategoriasComponent,
    BackSalidasDepartamentosComponent,
    BackProductosAgregarComponent,
    BackProductosTiposComponent,
    BackSalidasPedidosComponent,
    BackSalidasClientesComponent,
    BackAlmacenesMovimientosComponent,
    BackAlmacenesListComponent,
    ModalAgregarTipoProductoComponent,
    BackEntradasOrdenDetalleComponent,
    BackSalidasPedidosDetalleComponent,
    BackSalidasPedidosNuevoComponent,
    BackEntradasOrdenRecepcionComponent,
    BackAlmacenesMovimientoNuevoComponent,
    BackEntradasOrdenRecepcionListComponent,
    BackEntradasOrdenRecepcionDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
