import { TestBed } from '@angular/core/testing';

import { SUserService } from './userservice.service';

describe('SUserService', () => {
  let service: SUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
