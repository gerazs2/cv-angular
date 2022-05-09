import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './Componets/curriculum/curriculum.component';
import { HomeComponent } from './Componets/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"curriculum",component:CurriculumComponent},
  { path: '**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
