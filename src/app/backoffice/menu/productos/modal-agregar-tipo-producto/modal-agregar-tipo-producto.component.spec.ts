import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarTipoProductoComponent } from './modal-agregar-tipo-producto.component';

describe('ModalAgregarTipoProductoComponent', () => {
  let component: ModalAgregarTipoProductoComponent;
  let fixture: ComponentFixture<ModalAgregarTipoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAgregarTipoProductoComponent]
    });
    fixture = TestBed.createComponent(ModalAgregarTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
