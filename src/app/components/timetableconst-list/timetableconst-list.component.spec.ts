import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableconstListComponent } from './timetableconst-list.component';

describe('TimetableconstListComponent', () => {
  let component: TimetableconstListComponent;
  let fixture: ComponentFixture<TimetableconstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableconstListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableconstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
