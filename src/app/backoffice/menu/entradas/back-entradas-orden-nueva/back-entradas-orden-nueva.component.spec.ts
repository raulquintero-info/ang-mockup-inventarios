import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasOrdenNuevaComponent } from './back-entradas-orden-nueva.component';

describe('BackEntradasOrdenNuevaComponent', () => {
  let component: BackEntradasOrdenNuevaComponent;
  let fixture: ComponentFixture<BackEntradasOrdenNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasOrdenNuevaComponent]
    });
    fixture = TestBed.createComponent(BackEntradasOrdenNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
