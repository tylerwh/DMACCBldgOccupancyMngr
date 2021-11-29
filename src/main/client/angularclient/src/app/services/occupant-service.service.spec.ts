import { TestBed } from '@angular/core/testing';

import { OccupantServiceService } from './occupant-service.service';

describe('OccupantServiceService', () => {
  let service: OccupantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccupantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
