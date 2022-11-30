import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import { DecisionPageComponent } from './decision-page/decision-page.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ServerInfoComponent } from './server-info/server-info.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
// import { GraphComponent } from './graph/graph.component';
import { TestingComponent } from './testing/testing.component';
import { ChartModule } from 'angular-highcharts';
//import { PopupModule } from 'ng2-opd-popup';
//import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    FirstPageComponent,
    PopupComponent,
    DecisionPageComponent,
    ServerInfoComponent,
    SamplePageComponent,
    TestingComponent,
    // GraphComponent,
   // PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    ChartModule
   
    //PopupModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
