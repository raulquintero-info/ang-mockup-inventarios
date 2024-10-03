import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasOrdenRecepcionListComponent } from './back-entradas-orden-recepcion-list.component';

describe('BackEntradasOrdenRecepcionListComponent', () => {
  let component: BackEntradasOrdenRecepcionListComponent;
  let fixture: ComponentFixture<BackEntradasOrdenRecepcionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasOrdenRecepcionListComponent]
    });
    fixture = TestBed.createComponent(BackEntradasOrdenRecepcionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
