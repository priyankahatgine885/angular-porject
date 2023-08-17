import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeResponse } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css'],
})
export class EmployeeCreateEditComponent {
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const empId: string | null = this.route.snapshot.paramMap.get('id');
    if (empId) {
      this.isEdit = true;
      this.empId = Number(empId);
      this.getEmployeeById(this.empId);
    } else {
      this.isEdit = false;
    }
  }

  submitted = false;
  isEdit: boolean = false;
  empId: number = 0;

  get empForm() {
    return this.profileForm.controls;
  }
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    panNumber: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
  });

  getEmployeeById(empId: number) {
    this.employeeService
      .getEmployeeById(empId)
      .subscribe((res: EmployeeResponse) => {
        if (res.success) {
          this.profileForm.patchValue(res.employeeDto);
        }
      });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      if (!this.isEdit) {
        this.employeeService
          .createEmployee(this.profileForm.value)
          .subscribe((res: EmployeeResponse) => {
            if (res.success) {
              console.log(res);
              this.toastr.success('Employee saved successfully!');
              this.router.navigate(['employee/list']);
            }
          });
      } else {
        this.employeeService
          .updateEmployee(this.empId, this.profileForm.value)
          .subscribe((res: EmployeeResponse) => {
            if (res.success) {
              console.log(res);
              this.toastr.success('Employee updated successfully!');
              this.router.navigate(['employee/list']);
            }
          });
      }
    }
  }
}
