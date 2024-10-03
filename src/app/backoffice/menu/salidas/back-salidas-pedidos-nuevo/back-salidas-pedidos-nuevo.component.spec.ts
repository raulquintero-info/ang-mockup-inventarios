import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSalidasPedidosNuevoComponent } from './back-salidas-pedidos-nuevo.component';

describe('BackSalidasPedidosNuevoComponent', () => {
  let component: BackSalidasPedidosNuevoComponent;
  let fixture: ComponentFixture<BackSalidasPedidosNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackSalidasPedidosNuevoComponent]
    });
    fixture = TestBed.createComponent(BackSalidasPedidosNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
