import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecisionPageComponent } from './decision-page/decision-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
// import { GraphComponent } from './graph/graph.component';
import { PricingComponent } from './pricing/pricing.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { TestingComponent } from './testing/testing.component';
//import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  // {
  //   path:'',pathMatch: 'full' ,redirectTo:'/cloud_central'
  // },
  {path : '', component:FirstPageComponent},
  {path: 'pricing',component:PricingComponent},
  // {path:'decision-tree', component:DecisionPageComponent},
  {path:'server-posture',component:ServerInfoComponent},
  {path:'discovery', component:SamplePageComponent},
  // {path:'graph',component:GraphComponent},
  {path:'testing',component:TestingComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })  
    
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
