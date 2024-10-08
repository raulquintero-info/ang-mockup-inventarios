import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAlmacenesMovimientoDetalleComponent } from './back-almacenes-movimiento-detalle.component';

describe('BackAlmacenesMovimientoDetalleComponent', () => {
  let component: BackAlmacenesMovimientoDetalleComponent;
  let fixture: ComponentFixture<BackAlmacenesMovimientoDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackAlmacenesMovimientoDetalleComponent]
    });
    fixture = TestBed.createComponent(BackAlmacenesMovimientoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
