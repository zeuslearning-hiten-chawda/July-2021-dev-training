import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInDetailsPageComponent } from './walk-in-details-page.component';

describe('WalkInDetailsPageComponent', () => {
  let component: WalkInDetailsPageComponent;
  let fixture: ComponentFixture<WalkInDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkInDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
