import { Component } from '@angular/core';
import { CATEGORIASTABLE } from '../../productos/data/categorias';
import { ALMACENES } from '../../../../data/almacenes';

@Component({
  selector: 'app-back-almacenes-list',
  templateUrl: './back-almacenes-list.component.html',
  styleUrls: ['./back-almacenes-list.component.css']
})
export class BackAlmacenesListComponent {
  bottomBarSize = "48px";
  isMaximized = false;
  categorias = ALMACENES;
  categoria: any = {id: 0, nombre: '', domicilio: '',reponsable:'',telefono: '' };

  onCategory(id: number){
    console.log(id,ALMACENES[id])
    this.categoria = ALMACENES[id-1];
    // this.categoria= {nombre: '', folder: false };
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
