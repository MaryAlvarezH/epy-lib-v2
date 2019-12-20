import { TestBed } from '@angular/core/testing';

import { EpyService } from './epy.service';

describe('EpyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpyService = TestBed.get(EpyService);
    expect(service).toBeTruthy();
  });
});
