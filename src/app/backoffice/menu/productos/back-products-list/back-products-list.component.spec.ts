import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackProductsListComponent } from './back-products-list.component';

describe('BackProductsListComponent', () => {
  let component: BackProductsListComponent;
  let fixture: ComponentFixture<BackProductsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackProductsListComponent]
    });
    fixture = TestBed.createComponent(BackProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
