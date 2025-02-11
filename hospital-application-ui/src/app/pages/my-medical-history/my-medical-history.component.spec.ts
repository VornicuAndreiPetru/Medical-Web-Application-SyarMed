import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMedicalHistoryComponent } from './my-medical-history.component';

describe('MyMedicalHistoryComponent', () => {
  let component: MyMedicalHistoryComponent;
  let fixture: ComponentFixture<MyMedicalHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMedicalHistoryComponent]
    });
    fixture = TestBed.createComponent(MyMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
