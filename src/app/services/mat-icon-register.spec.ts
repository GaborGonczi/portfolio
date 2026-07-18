import { TestBed } from '@angular/core/testing';

import { MatIconRegister } from './mat-icon-register';

describe('MatIconRegister', () => {
  let service: MatIconRegister;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatIconRegister);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
