import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageCv } from './single-page-cv';

describe('SinglePageCv', () => {
  let component: SinglePageCv;
  let fixture: ComponentFixture<SinglePageCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageCv],
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePageCv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
