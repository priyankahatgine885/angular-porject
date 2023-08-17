import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateEditComponent } from './emp-add-edit.component';

describe('CratePageComponent', () => {
  let component: EmployeeCreateEditComponent;
  let fixture: ComponentFixture<EmployeeCreateEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCreateEditComponent],
    });
    fixture = TestBed.createComponent(EmployeeCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
