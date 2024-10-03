import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSalidasPedidosDetalleComponent } from './back-salidas-pedidos-detalle.component';

describe('BackSalidasPedidosDetalleComponent', () => {
  let component: BackSalidasPedidosDetalleComponent;
  let fixture: ComponentFixture<BackSalidasPedidosDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackSalidasPedidosDetalleComponent]
    });
    fixture = TestBed.createComponent(BackSalidasPedidosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
