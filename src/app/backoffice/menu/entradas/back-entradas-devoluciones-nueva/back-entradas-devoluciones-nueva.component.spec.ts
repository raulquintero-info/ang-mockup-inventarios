import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasDevolucionesNuevaComponent } from './back-entradas-devoluciones-nueva.component';

describe('BackEntradasDevolucionesNuevaComponent', () => {
  let component: BackEntradasDevolucionesNuevaComponent;
  let fixture: ComponentFixture<BackEntradasDevolucionesNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasDevolucionesNuevaComponent]
    });
    fixture = TestBed.createComponent(BackEntradasDevolucionesNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
