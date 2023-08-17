import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http-service';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment.dev';
import { EmployeeResponse } from './employee';

@Injectable()
export class EmployeeService {
  constructor(public httpService: HttpService) {}

  getEmployeeList(): Observable<EmployeeResponse> {
    return this.httpService.get<EmployeeResponse>(
      `${environment.employeeApiUrl}getEmployees`,
    );
  }

  getEmployeeById(empId: number): Observable<EmployeeResponse> {
    return this.httpService.get<EmployeeResponse>(
      `${environment.employeeApiUrl}getEmployeeById/${empId}`,
    );
  }

  createEmployee(payload: unknown): Observable<EmployeeResponse> {
    return this.httpService.post<EmployeeResponse>(
      `${environment.employeeApiUrl}addEmployee`,
      payload,
    );
  }

  updateEmployee(
    empId: number,
    payload: unknown,
  ): Observable<EmployeeResponse> {
    return this.httpService.put<EmployeeResponse>(
      `${environment.employeeApiUrl}updateEmployee/${empId}`,
      payload,
    );
  }
}
