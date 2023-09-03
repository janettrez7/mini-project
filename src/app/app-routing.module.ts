import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './MyComponents/companies/companies.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path:'upcoming', component:TodosComponent},
  {path:'company',component:CompaniesComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
