import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasOrdenRecepcionDetalleComponent } from './back-entradas-orden-recepcion-detalle.component';

describe('BackEntradasOrdenRecepcionDetalleComponent', () => {
  let component: BackEntradasOrdenRecepcionDetalleComponent;
  let fixture: ComponentFixture<BackEntradasOrdenRecepcionDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasOrdenRecepcionDetalleComponent]
    });
    fixture = TestBed.createComponent(BackEntradasOrdenRecepcionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
