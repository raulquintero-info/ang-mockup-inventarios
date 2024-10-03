import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarItemComponent } from './modal-agregar-item.component';

describe('ModalAgregarItemComponent', () => {
  let component: ModalAgregarItemComponent;
  let fixture: ComponentFixture<ModalAgregarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAgregarItemComponent]
    });
    fixture = TestBed.createComponent(ModalAgregarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
