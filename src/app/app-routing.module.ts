import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardBackComponent } from './backoffice/menu/dashboard/dashboard-back/dashboard-back.component';
import { BackProductsListComponent } from './backoffice/menu/productos/back-products-list/back-products-list.component';
import { BackEntradasProveedoresComponent } from './backoffice/menu/entradas/back-entradas-proveedores/back-entradas-proveedores.component';
import { BackEntradasOrdenesComponent } from './backoffice/menu/entradas/back-entradas-ordenes/back-entradas-ordenes.component';
import { BackEntradasOrdenNuevaComponent } from './backoffice/menu/entradas/back-entradas-orden-nueva/back-entradas-orden-nueva.component';
import { BackProductosCategoriasComponent } from './backoffice/menu/productos/back-productos-categorias/back-productos-categorias.component';
import { BackSalidasDepartamentosComponent } from './backoffice/menu/salidas/back-salidas-departamentos/back-salidas-departamentos.component';
import { BackProductosAgregarComponent } from './backoffice/menu/productos/back-productos-agregar/back-productos-agregar.component';
import { BackProductosTiposComponent } from './backoffice/menu/productos/back-productos-tipos/back-productos-tipos.component';
import { BackSalidasClientesComponent } from './backoffice/menu/salidas/back-salidas-clientes/back-salidas-clientes.component';
import { BackSalidasPedidosComponent } from './backoffice/menu/salidas/back-salidas-pedidos/back-salidas-pedidos.component';
import { BackAlmacenesMovimientosComponent } from './backoffice/menu/almacenes/back-almacenes-movimientos/back-almacenes-movimientos.component';
import { BackAlmacenesListComponent } from './backoffice/menu/almacenes/back-almacenes-list/back-almacenes-list.component';
import { BackEntradasOrdenDetalleComponent } from './backoffice/menu/entradas/back-entradas-orden-detalle/back-entradas-orden-detalle.component';
import { BackSalidasPedidosDetalleComponent } from './backoffice/menu/salidas/back-salidas-pedidos-detalle/back-salidas-pedidos-detalle.component';
import { BackSalidasPedidosNuevoComponent } from './backoffice/menu/salidas/back-salidas-pedidos-nuevo/back-salidas-pedidos-nuevo.component';
import { BackAlmacenesMovimientoNuevoComponent } from './backoffice/menu/almacenes/back-almacenes-movimiento-nuevo/back-almacenes-movimiento-nuevo.component';
import { BackEntradasOrdenRecepcionListComponent } from './backoffice/menu/entradas/back-entradas-orden-recepcion-list/back-entradas-orden-recepcion-list.component';
import { BackEntradasOrdenRecepcionDetalleComponent } from './backoffice/menu/entradas/back-entradas-orden-recepcion-detalle/back-entradas-orden-recepcion-detalle.component';
import { HomeComponent } from './backoffice/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "dashboard", component:DashboardBackComponent},
  {path: "productos", component: BackProductsListComponent},
  {path: "productos/categorias", component: BackProductosCategoriasComponent},
  {path: "productos/agregar", component: BackProductosAgregarComponent},
  {path: "productos/tipos", component: BackProductosTiposComponent},
  {path: "entradas/proveedores", component: BackEntradasProveedoresComponent},
  {path: "entradas/ordenes", component: BackEntradasOrdenesComponent},
  {path: "entradas/ordenes-recepcion-list", component: BackEntradasOrdenRecepcionListComponent},
  {path: "entradas/ordenes-recepcion-detalle/:id", component: BackEntradasOrdenRecepcionDetalleComponent},
  {path: "entradas/orden-nueva", component: BackEntradasOrdenNuevaComponent},
  {path: "entradas/orden-detalle/:id", component: BackEntradasOrdenDetalleComponent},
  {path: "salidas/pedidos", component: BackSalidasPedidosComponent},
  {path: "salidas/pedidos-nuevo", component: BackSalidasPedidosNuevoComponent},
  {path: "salidas/pedidos-detalle/:id", component: BackSalidasPedidosDetalleComponent},
  {path: "salidas/clientes", component: BackSalidasClientesComponent},
  {path: "salidas/departamentos", component: BackSalidasDepartamentosComponent},
  {path: "almacenes/movimientos", component: BackAlmacenesMovimientosComponent},
  {path: "almacenes/movimiento-nuevo", component: BackAlmacenesMovimientoNuevoComponent},
  {path: "almacenes", component: BackAlmacenesListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
