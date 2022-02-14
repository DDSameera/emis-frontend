import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmpSingleComponent} from "./emp-single/emp-single.component";
import {EmpMainComponent} from "./emp-main/emp-main.component";


const routes: Routes = [

  {
    path: 'emp',
    component: EmpMainComponent,

  },

  {
    path: 'single',
    component: EmpSingleComponent,

  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
