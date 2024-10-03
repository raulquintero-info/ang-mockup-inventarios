import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasOrdenRecepcionComponent } from './back-entradas-orden-recepcion.component';

describe('BackEntradasOrdenRecepcionComponent', () => {
  let component: BackEntradasOrdenRecepcionComponent;
  let fixture: ComponentFixture<BackEntradasOrdenRecepcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasOrdenRecepcionComponent]
    });
    fixture = TestBed.createComponent(BackEntradasOrdenRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
