import { TestBed, inject } from '@angular/core/testing';

import { DriverDetailsService } from './driver-details.service';

describe('DriverDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverDetailsService]
    });
  });

  it('should be created', inject([DriverDetailsService], (service: DriverDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
