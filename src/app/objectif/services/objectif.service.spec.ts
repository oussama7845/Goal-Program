import { TestBed } from '@angular/core/testing';

import { objectifService } from './objectif.service';

describe('objectifService', () => {
  let service: objectifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(objectifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
