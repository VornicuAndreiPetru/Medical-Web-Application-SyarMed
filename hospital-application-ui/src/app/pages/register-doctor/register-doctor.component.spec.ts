import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDoctorComponent } from './register-doctor.component';

describe('RegisterDoctorComponent', () => {
  let component: RegisterDoctorComponent;
  let fixture: ComponentFixture<RegisterDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDoctorComponent]
    });
    fixture = TestBed.createComponent(RegisterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
