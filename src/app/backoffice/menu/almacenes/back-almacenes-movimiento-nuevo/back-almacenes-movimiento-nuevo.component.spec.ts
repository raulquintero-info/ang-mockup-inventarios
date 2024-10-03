import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAlmacenesMovimientoNuevoComponent } from './back-almacenes-movimiento-nuevo.component';

describe('BackAlmacenesMovimientoNuevoComponent', () => {
  let component: BackAlmacenesMovimientoNuevoComponent;
  let fixture: ComponentFixture<BackAlmacenesMovimientoNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackAlmacenesMovimientoNuevoComponent]
    });
    fixture = TestBed.createComponent(BackAlmacenesMovimientoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
