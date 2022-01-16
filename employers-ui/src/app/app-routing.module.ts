import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersComponent } from './employers/employers.component';
import { ViewEmployerComponent } from './employers/view-employer/view-employer.component';

const routes: Routes = [
{
  path: '',
  component: EmployersComponent
},
{
path: 'employers',
component: EmployersComponent

},
{
  path: 'employers/:id',
  component: ViewEmployerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
