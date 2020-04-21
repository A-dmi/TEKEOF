import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultComponent} from './result/result.component';
import {FilterComponent} from './filter/filter.component';


const routes: Routes = [
  {path: '', component: FilterComponent},
  {path: 'result', component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
