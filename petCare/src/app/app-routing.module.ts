import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AccordionComponent } from './accordion/accordion.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },{
    path:'customer-list',
    component:AccordionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
