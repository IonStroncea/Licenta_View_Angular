import { TestBed } from '@angular/core/testing';

import { GetMyComputersServiceService } from './get-my-computers-service.service';

describe('GetMyComputersServiceService', () => {
  let service: GetMyComputersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMyComputersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
