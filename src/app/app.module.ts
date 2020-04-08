import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlotlygraphComponent } from './plotlygraph/plotlygraph.component';


import { PlotlyViaCDNModule  } from 'angular-plotly.js';
PlotlyViaCDNModule.plotlyVersion = 'latest'; 
PlotlyViaCDNModule.plotlyBundle = null;

@NgModule({
  declarations: [
    AppComponent,
    PlotlygraphComponent
  ],
  imports: [
    BrowserModule,
    PlotlyViaCDNModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
