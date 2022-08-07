import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestdepComponent } from './add-testdep.component';

describe('AddTestdepComponent', () => {
  let component: AddTestdepComponent;
  let fixture: ComponentFixture<AddTestdepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestdepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTestdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
