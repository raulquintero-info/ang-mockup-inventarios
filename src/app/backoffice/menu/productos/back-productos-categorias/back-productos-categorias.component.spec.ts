import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackProductosCategoriasComponent } from './back-productos-categorias.component';

describe('BackProductosCategoriasComponent', () => {
  let component: BackProductosCategoriasComponent;
  let fixture: ComponentFixture<BackProductosCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackProductosCategoriasComponent]
    });
    fixture = TestBed.createComponent(BackProductosCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
