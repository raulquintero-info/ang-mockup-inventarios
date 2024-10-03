import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntradasOrdenesComponent } from './back-entradas-ordenes.component';

describe('BackEntradasOrdenesComponent', () => {
  let component: BackEntradasOrdenesComponent;
  let fixture: ComponentFixture<BackEntradasOrdenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEntradasOrdenesComponent]
    });
    fixture = TestBed.createComponent(BackEntradasOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
