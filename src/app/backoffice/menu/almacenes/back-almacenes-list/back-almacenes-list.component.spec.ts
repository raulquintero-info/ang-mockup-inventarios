import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAlmacenesListComponent } from './back-almacenes-list.component';

describe('BackAlmacenesListComponent', () => {
  let component: BackAlmacenesListComponent;
  let fixture: ComponentFixture<BackAlmacenesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackAlmacenesListComponent]
    });
    fixture = TestBed.createComponent(BackAlmacenesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
