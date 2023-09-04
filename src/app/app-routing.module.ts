import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './MyComponents/companies/companies.component';
import { StudyComponent } from './MyComponents/study/study.component';
import { ContactComponent } from './MyComponents/contact/contact.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path:'upcoming', component:TodosComponent},
  {path:'company',component:CompaniesComponent},
  {path:'study',component:StudyComponent},
  {path:'contact',component:ContactComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
