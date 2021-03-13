import { TestBed } from '@angular/core/testing';

import { MtnLibService } from './mtn-lib.service';

describe('MtnLibService', () => {
  let service: MtnLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtnLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
