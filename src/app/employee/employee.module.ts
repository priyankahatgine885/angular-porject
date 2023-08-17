import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateEditComponent } from './add-edit/emp-add-edit.component';
import { EmployeeService } from './employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListPageComponent as EmployeeListComponent } from './list-page/emp-list.component';

@NgModule({
  declarations: [EmployeeCreateEditComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    SharedModule,
  ],
  providers: [EmployeeService],
})
export class EmployeeModule {}
