import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsHistoryComponent } from './patients-history.component';

describe('PatientsHistoryComponent', () => {
  let component: PatientsHistoryComponent;
  let fixture: ComponentFixture<PatientsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsHistoryComponent]
    });
    fixture = TestBed.createComponent(PatientsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
