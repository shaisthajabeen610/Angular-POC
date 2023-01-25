import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './first-page/first-page.component';
// import { GraphComponent } from './graph/graph.component';
import { PricingComponent } from './pricing/pricing.component';

//import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  // {
  //   path:'',pathMatch: 'full' ,redirectTo:'/cloud_central'
  // },
  {path : '', component:FirstPageComponent},
  {path: 'pricing',component:PricingComponent},
  // {path:'decision-tree', component:DecisionPageComponent},
  // {path:'server-posture',component:ServerInfoComponent},
  // {path:'discovery', component:SamplePageComponent},
  // // {path:'graph',component:GraphComponent},
  // {path:'testing',component:TestingComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })  
    
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
