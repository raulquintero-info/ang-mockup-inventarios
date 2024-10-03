import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackProductosTiposComponent } from './back-productos-tipos.component';

describe('BackProductosTiposComponent', () => {
  let component: BackProductosTiposComponent;
  let fixture: ComponentFixture<BackProductosTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackProductosTiposComponent]
    });
    fixture = TestBed.createComponent(BackProductosTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
