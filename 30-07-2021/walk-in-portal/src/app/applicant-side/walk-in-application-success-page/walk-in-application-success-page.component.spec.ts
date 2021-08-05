import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInApplicationSuccessPageComponent } from './walk-in-application-success-page.component';

describe('WalkInApplicationSuccessPageComponent', () => {
  let component: WalkInApplicationSuccessPageComponent;
  let fixture: ComponentFixture<WalkInApplicationSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkInApplicationSuccessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInApplicationSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
