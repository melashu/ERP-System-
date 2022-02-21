import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUserComponent } from './registered-user.component';

describe('RegisteredUserComponent', () => {
  let component: RegisteredUserComponent;
  let fixture: ComponentFixture<RegisteredUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
