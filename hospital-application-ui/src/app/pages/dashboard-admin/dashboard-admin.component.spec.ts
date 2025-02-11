import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminComponent } from './dashboard-admin.component';

describe('DashboardAdminComponent', () => {
  let component: DashboardAdminComponent;
  let fixture: ComponentFixture<DashboardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdminComponent]
    });
    fixture = TestBed.createComponent(DashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
