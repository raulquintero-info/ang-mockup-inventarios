import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasOrdenDetalleComponent } from './back-entradas-orden-detalle.component';

describe('BackEntradasOrdenDetalleComponent', () => {
  let component: BackEntradasOrdenDetalleComponent;
  let fixture: ComponentFixture<BackEntradasOrdenDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasOrdenDetalleComponent]
    });
    fixture = TestBed.createComponent(BackEntradasOrdenDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
