import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSideHeaderComponent } from './applicant-side-header.component';

describe('ApplicantSideHeaderComponent', () => {
  let component: ApplicantSideHeaderComponent;
  let fixture: ComponentFixture<ApplicantSideHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantSideHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantSideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
