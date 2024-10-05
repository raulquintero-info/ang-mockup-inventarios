import { Component, OnInit, inject } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MyModalComponent } from '../my-modal/my-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../../../models/Item';
import { ITEMS } from 'src/app/data/items';
import { CATEGORIAS } from 'src/app/data/categorias';
import { PRODUCTOS } from 'src/app/data/productos';

@Component({
  selector: 'app-back-products-list',
  templateUrl: './back-products-list.component.html',
  styleUrls: ['./back-products-list.component.css']
})
export class BackProductsListComponent implements OnInit{
  displayStyle: string = 'none';
  windowSize = "68dvh";
  itemSelected: Item | null = null;
  allProducts = ITEMS;
	items: Item[] =[];
  categorias: any [] = [];
  categorySelected: number = 0;
  categoriaTitulo: string ='';
  private spinner =inject( NgxSpinnerService);
  private modalService= inject(NgbModal);

  preventSingleClick = false;
  timer: any;
  // delay: Number = 0;

	page = 1;
	pageSize = 25;
	collectionSize = ITEMS.length;



	constructor() {
		this.refreshCountries();
	}

  ngOnInit(){
    this.categorias = CATEGORIAS;
    // console.log(this.categorias.lenght)

  }

  onAgregarProducto(){
    const modalRefEditar = this.modalService.open(MyModalComponent, {windowClass:  "my-modal "});
    modalRefEditar.componentInstance.name = 'Agregar Producto';
  }

  onCategory(categoria: string, id: any, i: any){
    this.categorySelected = id;
    let temp = PRODUCTOS.filter((x: any)=>{
      if(x.id==id)
      return x;
    })
    this.items = temp[0].content;
    this. categoriaTitulo = categoria;
    console.log(categoria, id, event);

    let element = document.getElementsByClassName('active-category')[0];
    if(element){
      element.classList.remove("active-category");
      element.classList.add("btn-azul")
    }
    element = document.getElementsByClassName('btn-azul')[i+2];
    console.log(i);
    element.classList.add("active-category")
    element.classList.remove("btn-azul")



    // this.items = PRODUCTOS;
  }

	refreshCountries() {
		this.items = ITEMS.map((item: any, i: number) => ({ id: i + 1, ...item })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}



  singleClick(id: any) {
    console.log(id)
    this.preventSingleClick = false;
     const delay = 200;
      this.timer = setTimeout(() => {
        if (!this.preventSingleClick) {
          this.itemSelected = null;
          this.timer = setTimeout(()=>{

            this.itemSelected= this.allProducts[id];
          }, 300)
          this.windowSize = "45dvh";
          //  alert('Single Click Event');


        }
      }, delay);
  }

  doubleClick (id: number) {
    this.preventSingleClick = true;
    clearTimeout(this.timer);
    // alert('No es posible mostar el Modal para editar el articulo')
    console.log("No es posible mostar el Modal para editar el articulo");

    const modalRefEditar = this.modalService.open(MyModalComponent, {windowClass:  "my-modal "});
    modalRefEditar.componentInstance.name = 'Editar Producto';
    modalRefEditar.componentInstance.item = this.items[id-1];

  }
  maximize(){
    this.windowSize = "68dvh";
    this.itemSelected = null;
  }


}

