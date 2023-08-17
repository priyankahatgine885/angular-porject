import { ApiResponse } from '../shared/common-models';

export interface EmployeeResponse extends ApiResponse {
  employeeDto: Employee;
  employeeList: Employee[];
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  panNumber: string;
  phoneNumber: string;
  gender: string;
}
