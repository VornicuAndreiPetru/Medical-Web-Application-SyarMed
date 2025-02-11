import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentsComponent } from './doctor-appointments.component';

describe('DoctorAppointmentsComponent', () => {
  let component: DoctorAppointmentsComponent;
  let fixture: ComponentFixture<DoctorAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorAppointmentsComponent]
    });
    fixture = TestBed.createComponent(DoctorAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
