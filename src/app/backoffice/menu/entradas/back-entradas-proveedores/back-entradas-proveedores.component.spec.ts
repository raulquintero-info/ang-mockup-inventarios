import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasProveedoresComponent } from './back-entradas-proveedores.component';

describe('BackEntradasProveedoresComponent', () => {
  let component: BackEntradasProveedoresComponent;
  let fixture: ComponentFixture<BackEntradasProveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasProveedoresComponent]
    });
    fixture = TestBed.createComponent(BackEntradasProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
