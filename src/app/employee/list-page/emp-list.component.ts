import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeResponse } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class ListPageComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  employees: Employee[] = [];

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService
      .getEmployeeList()
      .subscribe((res: EmployeeResponse) => {
        if (res.success) {
          this.employees = res.employeeList;
          console.log(res);
        }
      });
  }

  rowClick(empId: number) {
    this.router.navigate(['employee/edit', empId]);
  }
}
