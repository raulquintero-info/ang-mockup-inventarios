import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSalidasDepartamentosComponent } from './back-salidas-departamentos.component';

describe('BackSalidasDepartamentosComponent', () => {
  let component: BackSalidasDepartamentosComponent;
  let fixture: ComponentFixture<BackSalidasDepartamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackSalidasDepartamentosComponent]
    });
    fixture = TestBed.createComponent(BackSalidasDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
