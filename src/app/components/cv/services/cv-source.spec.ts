import { TestBed } from '@angular/core/testing';

import { CvSource } from './cv-source';

describe('CvSource', () => {
  let service: CvSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
