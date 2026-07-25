import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvNavbar } from './cv-navbar';

describe('CvNavbar', () => {
  let component: CvNavbar;
  let fixture: ComponentFixture<CvNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvNavbar],
    }).compileComponents();

    fixture = TestBed.createComponent(CvNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
