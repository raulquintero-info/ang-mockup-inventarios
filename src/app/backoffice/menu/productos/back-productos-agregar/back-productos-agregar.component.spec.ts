import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackProductosAgregarComponent } from './back-productos-agregar.component';

describe('BackProductosAgregarComponent', () => {
  let component: BackProductosAgregarComponent;
  let fixture: ComponentFixture<BackProductosAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackProductosAgregarComponent]
    });
    fixture = TestBed.createComponent(BackProductosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
