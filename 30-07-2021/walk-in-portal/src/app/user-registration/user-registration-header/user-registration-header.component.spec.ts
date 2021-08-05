import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationHeaderComponent } from './user-registration-header.component';

describe('UserRegistrationHeaderComponent', () => {
  let component: UserRegistrationHeaderComponent;
  let fixture: ComponentFixture<UserRegistrationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
