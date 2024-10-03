import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAlmacenesMovimientosComponent } from './back-almacenes-movimientos.component';

describe('BackAlmacenesMovimientosComponent', () => {
  let component: BackAlmacenesMovimientosComponent;
  let fixture: ComponentFixture<BackAlmacenesMovimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackAlmacenesMovimientosComponent]
    });
    fixture = TestBed.createComponent(BackAlmacenesMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
