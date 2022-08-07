import { TestBed } from '@angular/core/testing';

import { DepartureService } from './shared/departure.service';

describe('DepartureService', () => {
  let service: DepartureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
