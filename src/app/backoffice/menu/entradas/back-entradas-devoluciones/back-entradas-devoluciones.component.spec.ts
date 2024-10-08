import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasDevolucionesComponent } from './back-entradas-devoluciones.component';

describe('BackEntradasDevolucionesComponent', () => {
  let component: BackEntradasDevolucionesComponent;
  let fixture: ComponentFixture<BackEntradasDevolucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasDevolucionesComponent]
    });
    fixture = TestBed.createComponent(BackEntradasDevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
