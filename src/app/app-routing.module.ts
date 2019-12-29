import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'new', component: FormComponent},
  { path: 'edit', component: FormEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
