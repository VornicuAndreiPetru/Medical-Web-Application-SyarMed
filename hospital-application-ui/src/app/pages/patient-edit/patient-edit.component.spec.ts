import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditComponent } from './patient-edit.component';

describe('PatientEditComponent', () => {
  let component: PatientEditComponent;
  let fixture: ComponentFixture<PatientEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientEditComponent]
    });
    fixture = TestBed.createComponent(PatientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
