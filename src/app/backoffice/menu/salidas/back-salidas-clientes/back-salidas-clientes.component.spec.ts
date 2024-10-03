import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSalidasClientesComponent } from './back-salidas-clientes.component';

describe('BackSalidasClientesComponent', () => {
  let component: BackSalidasClientesComponent;
  let fixture: ComponentFixture<BackSalidasClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackSalidasClientesComponent]
    });
    fixture = TestBed.createComponent(BackSalidasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
