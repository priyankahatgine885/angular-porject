import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent as EmployeeListComponent } from './list-page/emp-list.component';
import { EmployeeCreateEditComponent as EmployeeCreateEditComponent } from './add-edit/emp-add-edit.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: EmployeeListComponent },
      { path: 'create', component: EmployeeCreateEditComponent },
      { path: 'edit/:id', component: EmployeeCreateEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
