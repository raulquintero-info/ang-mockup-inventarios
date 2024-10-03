import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSalidasPedidosComponent } from './back-salidas-pedidos.component';

describe('BackSalidasPedidosComponent', () => {
  let component: BackSalidasPedidosComponent;
  let fixture: ComponentFixture<BackSalidasPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackSalidasPedidosComponent]
    });
    fixture = TestBed.createComponent(BackSalidasPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
