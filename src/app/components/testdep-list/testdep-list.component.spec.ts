import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdepListComponent } from './testdep-list.component';

describe('TestdepListComponent', () => {
  let component: TestdepListComponent;
  let fixture: ComponentFixture<TestdepListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdepListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestdepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
