import { Component } from '@angular/core';
import { DEPARTAMENTOS } from 'src/app/data/departamentos';

@Component({
  selector: 'app-back-salidas-departamentos',
  templateUrl: './back-salidas-departamentos.component.html',
  styleUrls: ['./back-salidas-departamentos.component.css']
})
export class BackSalidasDepartamentosComponent {
  bottomBarSize = "48px";
  isMaximized = false;
  departamentos = DEPARTAMENTOS;
  departamento:any  = {nombre: '', status: false}

  onCategory(id: number){
    console.log(id,DEPARTAMENTOS[id])
    this.departamentos = DEPARTAMENTOS;
    this.departamento =  DEPARTAMENTOS[id];
  }
  onEdit(cat: any){
    this.departamento = cat;
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
