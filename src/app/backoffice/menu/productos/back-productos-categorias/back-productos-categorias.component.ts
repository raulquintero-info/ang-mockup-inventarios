import { Component } from '@angular/core';
import { CATEGORIASTABLE } from '../data/categorias';

@Component({
  selector: 'app-back-productos-categorias',
  templateUrl: './back-productos-categorias.component.html',
  styleUrls: ['./back-productos-categorias.component.css']
})
export class BackProductosCategoriasComponent {
  bottomBarSize = "48px";
  isMaximized = false;
  categorias = CATEGORIASTABLE[0];
  categoria: any = {nombre: '', folder: false };

  onCategory(id: number){
    console.log(id,CATEGORIASTABLE[id])
    this.categorias = CATEGORIASTABLE[id];
    this.categoria= {nombre: '', folder: false };
  }
  onEdit(cat: any){
    this.categoria = cat;
  }

  maximize(){
    this.bottomBarSize="200px";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="48px";
    this.isMaximized = false;

  }
}
