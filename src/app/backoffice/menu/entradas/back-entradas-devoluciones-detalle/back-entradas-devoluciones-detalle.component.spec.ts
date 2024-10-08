import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasDevolucionesDetalleComponent } from './back-entradas-devoluciones-detalle.component';

describe('BackEntradasDevolucionesDetalleComponent', () => {
  let component: BackEntradasDevolucionesDetalleComponent;
  let fixture: ComponentFixture<BackEntradasDevolucionesDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasDevolucionesDetalleComponent]
    });
    fixture = TestBed.createComponent(BackEntradasDevolucionesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
